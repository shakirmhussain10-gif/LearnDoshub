// File Sharing & PDF Viewer Handler
// Handles file uploads, sharing, and auto-opening PDFs from external sources

const FileHandler = {
  // Storage keys
  STORAGE_KEYS: {
    DRAFTS: 'pdf_drafts',
    RECENT_FILES: 'recent_files',
    FILE_CACHE: 'file_cache'
  },

  // Initialize file handler
  init: function() {
    this.setupFileInput();
    this.setupDropZone();
    this.handleURLParams();
    this.setupShareReceiver();
  },

  // Setup file input handling
  setupFileInput: function() {
    const fileInputs = document.querySelectorAll('input[type="file"][accept*="pdf"]');
    fileInputs.forEach(input => {
      input.addEventListener('change', (e) => this.handleFileUpload(e));
    });
  },

  // Setup drag and drop
  setupDropZone: function() {
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.add('drag-over');
    });

    document.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.remove('drag-over');
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.remove('drag-over');
      
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        this.handleDroppedFiles(files);
      }
    });
  },

  // Handle dropped files
  handleDroppedFiles: function(files) {
    Array.from(files).forEach(file => {
      if (file.type === 'application/pdf') {
        this.openPDFInViewer(file);
      }
    });
  },

  // Handle file upload
  handleFileUpload: function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.openPDFInViewer(file);
    }
  },

  // Open PDF in viewer
  openPDFInViewer: function(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const pdfData = e.target.result;
      
      // Save to recent files
      this.saveRecentFile({
        name: file.name,
        size: file.size,
        date: new Date().toISOString(),
        data: pdfData
      });

      // Redirect to PDF editor with file data
      window.location.href = `/pdf-editor.html?pdf=${encodeURIComponent(btoa(pdfData))}&name=${encodeURIComponent(file.name)}`;
    };
    reader.readAsDataURL(file);
  },

  // Handle URL parameters (for external file sharing)
  handleURLParams: function() {
    const params = new URLSearchParams(window.location.search);
    
    // If PDF data passed via URL
    if (params.has('pdf')) {
      const pdfData = atob(params.get('pdf'));
      const fileName = params.get('name') || 'document.pdf';
      this.loadPDFFromData(pdfData, fileName);
    }

    // If file shared via Web Share API
    if (params.has('shared_file')) {
      this.handleSharedFile(params.get('shared_file'));
    }
  },

  // Load PDF from data URL
  loadPDFFromData: function(pdfData, fileName) {
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    // Auto-open in viewer if on PDF editor page
    if (window.location.pathname.includes('pdf-editor')) {
      if (window.PDFViewer && window.PDFViewer.loadPDF) {
        window.PDFViewer.loadPDF(url, fileName);
      }
    }
  },

  // Handle Web Share API
  setupShareReceiver: function() {
    // Listen for shared files from other apps (WhatsApp, email, etc)
    if (navigator.share) {
      window.addEventListener('beforeunload', (e) => {
        // Preserve file data before navigation
        if (window.currentPDF) {
          sessionStorage.setItem('pending_pdf', JSON.stringify({
            data: window.currentPDF.data,
            name: window.currentPDF.name
          }));
        }
      });
    }
  },

  // Handle shared file from external source
  handleSharedFile: function(fileId) {
    // Retrieve from session storage if file was just shared
    const pending = sessionStorage.getItem('pending_pdf');
    if (pending) {
      const file = JSON.parse(pending);
      this.loadPDFFromData(file.data, file.name);
      sessionStorage.removeItem('pending_pdf');
    }
  },

  // Draft management
  saveDraft: function(pdfName, pdfContent, annotations) {
    const drafts = this.getDrafts();
    const draft = {
      id: Date.now(),
      name: pdfName,
      content: pdfContent,
      annotations: annotations || [],
      savedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    drafts.push(draft);
    localStorage.setItem(this.STORAGE_KEYS.DRAFTS, JSON.stringify(drafts));
    
    return draft;
  },

  // Load draft
  loadDraft: function(draftId) {
    const drafts = this.getDrafts();
    return drafts.find(d => d.id === draftId);
  },

  // Get all drafts
  getDrafts: function() {
    const drafts = localStorage.getItem(this.STORAGE_KEYS.DRAFTS);
    return drafts ? JSON.parse(drafts) : [];
  },

  // Update draft
  updateDraft: function(draftId, content, annotations) {
    const drafts = this.getDrafts();
    const draftIndex = drafts.findIndex(d => d.id === draftId);
    
    if (draftIndex >= 0) {
      drafts[draftIndex].content = content;
      drafts[draftIndex].annotations = annotations || [];
      drafts[draftIndex].updatedAt = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEYS.DRAFTS, JSON.stringify(drafts));
      return drafts[draftIndex];
    }
    return null;
  },

  // Delete draft
  deleteDraft: function(draftId) {
    const drafts = this.getDrafts();
    const filtered = drafts.filter(d => d.id !== draftId);
    localStorage.setItem(this.STORAGE_KEYS.DRAFTS, JSON.stringify(filtered));
  },

  // Save recent file
  saveRecentFile: function(fileData) {
    const recent = this.getRecentFiles();
    
    // Remove if already exists
    const filtered = recent.filter(f => f.name !== fileData.name);
    
    // Add to beginning
    filtered.unshift(fileData);
    
    // Keep only last 10
    filtered.splice(10);
    
    localStorage.setItem(this.STORAGE_KEYS.RECENT_FILES, JSON.stringify(filtered));
  },

  // Get recent files
  getRecentFiles: function() {
    const recent = localStorage.getItem(this.STORAGE_KEYS.RECENT_FILES);
    return recent ? JSON.parse(recent) : [];
  },

  // Clear recent files
  clearRecentFiles: function() {
    localStorage.removeItem(this.STORAGE_KEYS.RECENT_FILES);
  },

  // Export PDF with annotations
  exportPDF: function(pdfData, fileName, annotations) {
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // Share file with native share API
  shareFile: function(fileName, fileData) {
    if (navigator.share) {
      const blob = new Blob([fileData], { type: 'application/pdf' });
      
      // For iOS/Android native sharing
      if (navigator.canShare && navigator.canShare({ files: [new File([blob], fileName)] })) {
        navigator.share({
          files: [new File([blob], fileName, { type: 'application/pdf' })],
          title: 'LearnDocs Hub',
          text: `Check out this PDF: ${fileName}`
        });
      } else {
        // Fallback to data URL sharing
        this.shareViaDataURL(fileName, fileData);
      }
    } else {
      // Fallback for older browsers
      this.shareViaDataURL(fileName, fileData);
    }
  },

  // Share via data URL
  shareViaDataURL: function(fileName, fileData) {
    const dataUrl = `data:application/pdf;base64,${btoa(fileData)}`;
    const encodedUrl = `/pdf-editor.html?pdf=${encodeURIComponent(dataUrl)}&name=${encodeURIComponent(fileName)}`;
    
    // Copy link to clipboard
    const fullUrl = window.location.origin + encodedUrl;
    navigator.clipboard.writeText(fullUrl).then(() => {
      if (window.EDS) {
        window.EDS.showSuccess('message', 'Link copied! Share this link to open PDF in LearnDocs Hub');
      }
    });
  }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  FileHandler.init();
});

// Store current PDF globally for sharing
window.currentPDF = null;

// Expose globally
window.FileHandler = FileHandler;
