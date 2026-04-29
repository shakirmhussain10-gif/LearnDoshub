/**
 * LearnDocs Hub - API Key System
 * Professional API Key Management for Multiple Applications
 * Created by Muhammad Hussain Shakir
 */

class APIKeySystem {
  constructor() {
    this.apiKeys = this.loadKeys();
    this.requestLogs = [];
    this.rateLimit = {
      maxRequests: 1000,
      timeWindow: 3600000 // 1 hour in milliseconds
    };
  }

  /**
   * Generate a new API Key
   * Format: lds_[random-string]_[timestamp]
   */
  generateAPIKey() {
    const prefix = 'lds_'; // LearnDocs
    const randomPart = this.generateRandomString(32);
    const timestamp = Date.now().toString(36);
    const apiKey = `${prefix}${randomPart}_${timestamp}`;
    
    return {
      key: apiKey,
      created: new Date().toISOString(),
      status: 'active',
      usageCount: 0,
      lastUsed: null,
      description: 'LearnDocs Hub API Key'
    };
  }

  /**
   * Generate random string for API key
   */
  generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Save API keys to localStorage
   */
  saveKeys() {
    try {
      localStorage.setItem('lds_api_keys', JSON.stringify(this.apiKeys));
      return true;
    } catch (e) {
      console.error('[API System] Error saving keys:', e);
      return false;
    }
  }

  /**
   * Load API keys from localStorage
   */
  loadKeys() {
    try {
      const stored = localStorage.getItem('lds_api_keys');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error('[API System] Error loading keys:', e);
      return {};
    }
  }

  /**
   * Create and store a new API key
   */
  createAPIKey(appName, description = '') {
    const keyData = this.generateAPIKey();
    keyData.appName = appName;
    keyData.description = description || `API Key for ${appName}`;
    
    this.apiKeys[keyData.key] = keyData;
    this.saveKeys();
    
    console.log('[API System] API Key created:', {
      appName,
      keyLength: keyData.key.length,
      created: keyData.created
    });
    
    return keyData;
  }

  /**
   * Validate API key
   */
  validateAPIKey(key) {
    if (!key || typeof key !== 'string') {
      return { valid: false, error: 'Invalid key format' };
    }

    const keyData = this.apiKeys[key];
    
    if (!keyData) {
      return { valid: false, error: 'API key not found' };
    }

    if (keyData.status !== 'active') {
      return { valid: false, error: 'API key is not active' };
    }

    return { valid: true, keyData };
  }

  /**
   * Check rate limit
   */
  checkRateLimit(apiKey) {
    const now = Date.now();
    const recentRequests = this.requestLogs.filter(
      log => log.key === apiKey && (now - log.timestamp) < this.rateLimit.timeWindow
    );

    if (recentRequests.length >= this.rateLimit.maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    return {
      allowed: true,
      remaining: this.rateLimit.maxRequests - recentRequests.length
    };
  }

  /**
   * Log API request
   */
  logRequest(apiKey, endpoint, method = 'GET') {
    const validation = this.validateAPIKey(apiKey);
    
    if (!validation.valid) {
      return { success: false, error: validation.error };
    }

    const rateCheck = this.checkRateLimit(apiKey);
    
    if (!rateCheck.allowed) {
      return { success: false, error: 'Rate limit exceeded' };
    }

    // Update last used
    this.apiKeys[apiKey].lastUsed = new Date().toISOString();
    this.apiKeys[apiKey].usageCount++;
    this.saveKeys();

    // Log request
    this.requestLogs.push({
      key: apiKey,
      endpoint,
      method,
      timestamp: Date.now(),
      status: 'success'
    });

    // Keep only last 1000 logs
    if (this.requestLogs.length > 1000) {
      this.requestLogs = this.requestLogs.slice(-1000);
    }

    return {
      success: true,
      remaining: rateCheck.remaining,
      usageCount: this.apiKeys[apiKey].usageCount
    };
  }

  /**
   * Get key information
   */
  getKeyInfo(apiKey) {
    const validation = this.validateAPIKey(apiKey);
    
    if (!validation.valid) {
      return null;
    }

    return {
      key: apiKey,
      appName: validation.keyData.appName,
      created: validation.keyData.created,
      lastUsed: validation.keyData.lastUsed,
      usageCount: validation.keyData.usageCount,
      status: validation.keyData.status,
      description: validation.keyData.description
    };
  }

  /**
   * List all API keys
   */
  listAllKeys() {
    return Object.values(this.apiKeys).map(key => ({
      appName: key.appName,
      created: key.created,
      status: key.status,
      usageCount: key.usageCount,
      lastUsed: key.lastUsed,
      description: key.description
    }));
  }

  /**
   * Revoke API key
   */
  revokeAPIKey(apiKey) {
    if (this.apiKeys[apiKey]) {
      this.apiKeys[apiKey].status = 'revoked';
      this.saveKeys();
      return true;
    }
    return false;
  }

  /**
   * Regenerate API key
   */
  regenerateAPIKey(oldKey) {
    if (!this.apiKeys[oldKey]) {
      return null;
    }

    const oldData = this.apiKeys[oldKey];
    const newKeyData = this.generateAPIKey();
    
    newKeyData.appName = oldData.appName;
    newKeyData.description = oldData.description;
    newKeyData.usageCount = oldData.usageCount;
    
    delete this.apiKeys[oldKey];
    this.apiKeys[newKeyData.key] = newKeyData;
    this.saveKeys();

    return newKeyData;
  }

  /**
   * Get API usage statistics
   */
  getUsageStats(apiKey = null) {
    if (apiKey) {
      const keyData = this.apiKeys[apiKey];
      if (!keyData) return null;
      
      return {
        appName: keyData.appName,
        totalRequests: keyData.usageCount,
        created: keyData.created,
        lastUsed: keyData.lastUsed,
        averageRequestsPerDay: this.calculateAverageRequestsPerDay(keyData)
      };
    }

    // Return stats for all keys
    return Object.entries(this.apiKeys).map(([key, keyData]) => ({
      appName: keyData.appName,
      totalRequests: keyData.usageCount,
      created: keyData.created,
      lastUsed: keyData.lastUsed
    }));
  }

  /**
   * Calculate average requests per day
   */
  calculateAverageRequestsPerDay(keyData) {
    const created = new Date(keyData.created);
    const now = new Date();
    const daysActive = Math.ceil((now - created) / (1000 * 60 * 60 * 24));
    return (keyData.usageCount / Math.max(daysActive, 1)).toFixed(2);
  }
}

// Initialize and export
const apiKeySystem = new APIKeySystem();

// For Node.js/Vercel environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APIKeySystem;
}
