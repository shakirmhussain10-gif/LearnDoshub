/**
 * LearnDocs Hub - API Endpoints
 * RESTful API for accessing all tools and services
 * Created by Muhammad Hussain Shakir
 */

class LearnDocsAPI {
  constructor() {
    this.baseURL = 'https://learn-doshub.vercel.app/api';
    this.apiKey = null;
    this.timeout = 30000; // 30 seconds
  }

  /**
   * Set API key for requests
   */
  setAPIKey(key) {
    this.apiKey = key;
  }

  /**
   * Make authenticated request
   */
  async request(endpoint, options = {}) {
    if (!this.apiKey) {
      throw new Error('API key not set. Use setAPIKey() first.');
    }

    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      'X-API-Key': this.apiKey
    };

    const fetchOptions = {
      method: options.method || 'GET',
      headers,
      timeout: this.timeout,
      ...options
    };

    if (options.body && typeof options.body === 'object') {
      fetchOptions.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * PDF Tools Endpoints
   */
  pdf = {
    /**
     * Merge PDFs
     * POST /pdf/merge
     * body: { files: File[], fileName: string }
     */
    merge: async (files, fileName = 'merged.pdf') => {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      formData.append('fileName', fileName);

      return this.request('/pdf/merge', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Split PDF
     * POST /pdf/split
     * body: { file: File, pages: number[] }
     */
    split: async (file, pages) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('pages', JSON.stringify(pages));

      return this.request('/pdf/split', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Compress PDF
     * POST /pdf/compress
     * body: { file: File, quality: 'low|medium|high' }
     */
    compress: async (file, quality = 'medium') => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('quality', quality);

      return this.request('/pdf/compress', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Convert to PDF
     * POST /pdf/convert
     * body: { file: File, format: 'doc|image|text' }
     */
    convert: async (file, format) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', format);

      return this.request('/pdf/convert', {
        method: 'POST',
        body: formData
      });
    }
  };

  /**
   * Image Tools Endpoints
   */
  image = {
    /**
     * Compress image
     * POST /image/compress
     * body: { file: File, quality: number 1-100 }
     */
    compress: async (file, quality = 80) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('quality', quality);

      return this.request('/image/compress', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Resize image
     * POST /image/resize
     * body: { file: File, width: number, height: number }
     */
    resize: async (file, width, height) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('width', width);
      formData.append('height', height);

      return this.request('/image/resize', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Convert image format
     * POST /image/convert
     * body: { file: File, format: 'jpg|png|webp|gif' }
     */
    convert: async (file, format) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', format);

      return this.request('/image/convert', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Remove background
     * POST /image/remove-bg
     * body: { file: File }
     */
    removeBg: async (file) => {
      const formData = new FormData();
      formData.append('file', file);

      return this.request('/image/remove-bg', {
        method: 'POST',
        body: formData
      });
    }
  };

  /**
   * Text Tools Endpoints
   */
  text = {
    /**
     * Count words
     * POST /text/count
     * body: { text: string }
     */
    count: async (text) => {
      return this.request('/text/count', {
        method: 'POST',
        body: { text }
      });
    },

    /**
     * Convert case
     * POST /text/convert-case
     * body: { text: string, case: 'upper|lower|title|sentence' }
     */
    convertCase: async (text, caseType) => {
      return this.request('/text/convert-case', {
        method: 'POST',
        body: { text, case: caseType }
      });
    },

    /**
     * Remove duplicates
     * POST /text/remove-duplicates
     * body: { text: string }
     */
    removeDuplicates: async (text) => {
      return this.request('/text/remove-duplicates', {
        method: 'POST',
        body: { text }
      });
    },

    /**
     * Extract emails
     * POST /text/extract-emails
     * body: { text: string }
     */
    extractEmails: async (text) => {
      return this.request('/text/extract-emails', {
        method: 'POST',
        body: { text }
      });
    }
  };

  /**
   * Audio Tools Endpoints
   */
  audio = {
    /**
     * Compress audio
     * POST /audio/compress
     * body: { file: File, bitrate: '128k|192k|256k' }
     */
    compress: async (file, bitrate = '192k') => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bitrate', bitrate);

      return this.request('/audio/compress', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Convert audio format
     * POST /audio/convert
     * body: { file: File, format: 'mp3|wav|m4a|ogg' }
     */
    convert: async (file, format) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', format);

      return this.request('/audio/convert', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Merge audio files
     * POST /audio/merge
     * body: { files: File[] }
     */
    merge: async (files) => {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));

      return this.request('/audio/merge', {
        method: 'POST',
        body: formData
      });
    }
  };

  /**
   * Video Tools Endpoints
   */
  video = {
    /**
     * Compress video
     * POST /video/compress
     * body: { file: File, quality: 'low|medium|high' }
     */
    compress: async (file, quality = 'medium') => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('quality', quality);

      return this.request('/video/compress', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Convert video format
     * POST /video/convert
     * body: { file: File, format: 'mp4|avi|mov|mkv' }
     */
    convert: async (file, format) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', format);

      return this.request('/video/convert', {
        method: 'POST',
        body: formData
      });
    },

    /**
     * Extract audio from video
     * POST /video/extract-audio
     * body: { file: File, format: 'mp3|wav|m4a' }
     */
    extractAudio: async (file, format = 'mp3') => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('format', format);

      return this.request('/video/extract-audio', {
        method: 'POST',
        body: formData
      });
    }
  };

  /**
   * Business Tools Endpoints
   */
  business = {
    /**
     * Generate invoice
     * POST /business/invoice
     * body: { items: Array, clientName: string, amount: number }
     */
    generateInvoice: async (items, clientName, amount) => {
      return this.request('/business/invoice', {
        method: 'POST',
        body: { items, clientName, amount }
      });
    },

    /**
     * Create QR code
     * POST /business/qr-code
     * body: { text: string, size: number }
     */
    createQRCode: async (text, size = 200) => {
      return this.request('/business/qr-code', {
        method: 'POST',
        body: { text, size }
      });
    },

    /**
     * Generate barcode
     * POST /business/barcode
     * body: { text: string, format: 'code128|ean|upc' }
     */
    generateBarcode: async (text, format = 'code128') => {
      return this.request('/business/barcode', {
        method: 'POST',
        body: { text, format }
      });
    }
  };

  /**
   * Health check endpoint
   * GET /health
   */
  healthCheck = async () => {
    return this.request('/health');
  };

  /**
   * Get account info
   * GET /account/info
   */
  getAccountInfo = async () => {
    return this.request('/account/info');
  };

  /**
   * Get API usage stats
   * GET /account/usage
   */
  getUsageStats = async () => {
    return this.request('/account/usage');
  };
}

// Export for use in other applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LearnDocsAPI;
}
