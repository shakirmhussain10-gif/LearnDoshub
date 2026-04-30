# LearnDocs Hub - API Documentation

**Version:** 1.0  
**Base URL:** `https://learn-doshub.vercel.app/api`  
**Created by:** Muhammad Hussain Shakir  
**Last Updated:** 2026-04-29

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Authentication](#authentication)
3. [API Key Management](#api-key-management)
4. [PDF Tools](#pdf-tools)
5. [Image Tools](#image-tools)
6. [Text Tools](#text-tools)
7. [Audio Tools](#audio-tools)
8. [Video Tools](#video-tools)
9. [Business Tools](#business-tools)
10. [Rate Limiting](#rate-limiting)
11. [Error Handling](#error-handling)
12. [Examples](#examples)

---

## Getting Started

### Prerequisites

- API Key (Generate one using the API Key System)
- JavaScript (or any language that supports HTTP requests)
- Basic understanding of REST APIs

### Quick Start

```javascript
// 1. Import the API client
const LearnDocsAPI = require('./api-endpoints.js');

// 2. Create instance
const api = new LearnDocsAPI();

// 3. Set your API key
api.setAPIKey('YOUR_API_KEY_HERE');

// 4. Use the API
const result = await api.text.count('Hello World');
console.log(result);
```

---

## Authentication

All API requests require authentication using an API Key.

### Header Format

```
Authorization: Bearer YOUR_API_KEY
X-API-Key: YOUR_API_KEY
```

### Example Request

```bash
curl -X POST https://learn-doshub.vercel.app/api/text/count \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer lds_your_api_key_here" \
  -d '{"text": "Hello World"}'
```

---

## API Key Management

### Generate API Key

```javascript
// Using the API Key System
const APIKeySystem = require('./api-key-system.js');
const system = new APIKeySystem();

const newKey = system.createAPIKey(
  'My App Name',
  'API Key for my custom application'
);

console.log(newKey.key); // lds_xxxxx_timestamp
```

### API Key Format

```
lds_[32-random-characters]_[timestamp]
```

**Example:** `lds_aB3cDeFgHiJkLmNoPqRsTuVwXyZ123456_abcd1234`

### Store Your API Key Securely

**For Node.js Applications:**
```javascript
// Use environment variables
const API_KEY = process.env.LEARNDOCS_API_KEY;
```

**For Browser Applications:**
```javascript
// Store in localStorage (for development only)
localStorage.setItem('learndocs_api_key', 'your_key_here');

// Retrieve when needed
const apiKey = localStorage.getItem('learndocs_api_key');
```

### Manage Your Keys

```javascript
const system = new APIKeySystem();

// Get key information
const info = system.getKeyInfo('lds_your_api_key');

// List all keys
const allKeys = system.listAllKeys();

// Revoke a key
system.revokeAPIKey('lds_your_api_key');

// Regenerate a key
const newKey = system.regenerateAPIKey('lds_old_key');

// Get usage statistics
const stats = system.getUsageStats('lds_your_api_key');
```

---

## PDF Tools

### Merge PDFs

**Endpoint:** `POST /pdf/merge`

```javascript
const pdfFile1 = document.getElementById('file1').files[0];
const pdfFile2 = document.getElementById('file2').files[0];

const result = await api.pdf.merge([pdfFile1, pdfFile2], 'merged.pdf');
if (result.success) {
  console.log('PDF merged:', result.data);
}
```

### Split PDF

**Endpoint:** `POST /pdf/split`

```javascript
const pdfFile = document.getElementById('fileInput').files[0];
const pages = [1, 3, 5]; // Extract pages 1, 3, and 5

const result = await api.pdf.split(pdfFile, pages);
if (result.success) {
  console.log('PDF split:', result.data);
}
```

### Compress PDF

**Endpoint:** `POST /pdf/compress`

```javascript
const pdfFile = document.getElementById('fileInput').files[0];

const result = await api.pdf.compress(pdfFile, 'high'); // 'low', 'medium', 'high'
if (result.success) {
  console.log('PDF compressed:', result.data);
}
```

### Convert to PDF

**Endpoint:** `POST /pdf/convert`

```javascript
const docFile = document.getElementById('docInput').files[0];

const result = await api.pdf.convert(docFile, 'doc'); // 'doc', 'image', 'text'
if (result.success) {
  console.log('File converted to PDF:', result.data);
}
```

---

## Image Tools

### Compress Image

**Endpoint:** `POST /image/compress`

```javascript
const imageFile = document.getElementById('imageInput').files[0];

const result = await api.image.compress(imageFile, 85); // Quality 1-100
if (result.success) {
  console.log('Image compressed:', result.data);
}
```

### Resize Image

**Endpoint:** `POST /image/resize`

```javascript
const imageFile = document.getElementById('imageInput').files[0];

const result = await api.image.resize(imageFile, 800, 600); // width, height
if (result.success) {
  console.log('Image resized:', result.data);
}
```

### Convert Image Format

**Endpoint:** `POST /image/convert`

```javascript
const imageFile = document.getElementById('imageInput').files[0];

const result = await api.image.convert(imageFile, 'webp'); // 'jpg', 'png', 'webp', 'gif'
if (result.success) {
  console.log('Image converted:', result.data);
}
```

### Remove Background

**Endpoint:** `POST /image/remove-bg`

```javascript
const imageFile = document.getElementById('imageInput').files[0];

const result = await api.image.removeBg(imageFile);
if (result.success) {
  console.log('Background removed:', result.data);
}
```

---

## Text Tools

### Count Words

**Endpoint:** `POST /text/count`

```javascript
const text = 'Hello World. This is a test.';

const result = await api.text.count(text);
if (result.success) {
  console.log('Words:', result.data.words);
  console.log('Characters:', result.data.characters);
  console.log('Sentences:', result.data.sentences);
}
```

### Convert Case

**Endpoint:** `POST /text/convert-case`

```javascript
const text = 'Hello World';

// Options: 'upper', 'lower', 'title', 'sentence'
const result = await api.text.convertCase(text, 'upper');
if (result.success) {
  console.log('Converted:', result.data.text); // 'HELLO WORLD'
}
```

### Remove Duplicates

**Endpoint:** `POST /text/remove-duplicates`

```javascript
const text = 'apple banana apple orange banana';

const result = await api.text.removeDuplicates(text);
if (result.success) {
  console.log('Result:', result.data.text); // 'apple banana orange'
}
```

### Extract Emails

**Endpoint:** `POST /text/extract-emails`

```javascript
const text = 'Contact us at info@example.com or support@example.com';

const result = await api.text.extractEmails(text);
if (result.success) {
  console.log('Emails:', result.data.emails);
  // ['info@example.com', 'support@example.com']
}
```

---

## Audio Tools

### Compress Audio

**Endpoint:** `POST /audio/compress`

```javascript
const audioFile = document.getElementById('audioInput').files[0];

// Options: '128k', '192k', '256k'
const result = await api.audio.compress(audioFile, '192k');
if (result.success) {
  console.log('Audio compressed:', result.data);
}
```

### Convert Audio Format

**Endpoint:** `POST /audio/convert`

```javascript
const audioFile = document.getElementById('audioInput').files[0];

// Options: 'mp3', 'wav', 'm4a', 'ogg'
const result = await api.audio.convert(audioFile, 'mp3');
if (result.success) {
  console.log('Audio converted:', result.data);
}
```

### Merge Audio Files

**Endpoint:** `POST /audio/merge`

```javascript
const audioFile1 = document.getElementById('file1').files[0];
const audioFile2 = document.getElementById('file2').files[0];

const result = await api.audio.merge([audioFile1, audioFile2]);
if (result.success) {
  console.log('Audio merged:', result.data);
}
```

---

## Video Tools

### Compress Video

**Endpoint:** `POST /video/compress`

```javascript
const videoFile = document.getElementById('videoInput').files[0];

// Options: 'low', 'medium', 'high'
const result = await api.video.compress(videoFile, 'medium');
if (result.success) {
  console.log('Video compressed:', result.data);
}
```

### Convert Video Format

**Endpoint:** `POST /video/convert`

```javascript
const videoFile = document.getElementById('videoInput').files[0];

// Options: 'mp4', 'avi', 'mov', 'mkv'
const result = await api.video.convert(videoFile, 'mp4');
if (result.success) {
  console.log('Video converted:', result.data);
}
```

### Extract Audio from Video

**Endpoint:** `POST /video/extract-audio`

```javascript
const videoFile = document.getElementById('videoInput').files[0];

// Options: 'mp3', 'wav', 'm4a'
const result = await api.video.extractAudio(videoFile, 'mp3');
if (result.success) {
  console.log('Audio extracted:', result.data);
}
```

---

## Business Tools

### Generate Invoice

**Endpoint:** `POST /business/invoice`

```javascript
const items = [
  { description: 'Service 1', quantity: 1, price: 100 },
  { description: 'Service 2', quantity: 2, price: 50 }
];

const result = await api.business.generateInvoice(items, 'John Doe', 200);
if (result.success) {
  console.log('Invoice:', result.data);
}
```

### Create QR Code

**Endpoint:** `POST /business/qr-code`

```javascript
const result = await api.business.createQRCode('https://example.com', 300);
if (result.success) {
  console.log('QR Code:', result.data.qrCodeUrl);
}
```

### Generate Barcode

**Endpoint:** `POST /business/barcode`

```javascript
const result = await api.business.generateBarcode('123456789', 'code128');
if (result.success) {
  console.log('Barcode:', result.data.barcodeUrl);
}
```

---

## Rate Limiting

- **Limit:** 1000 requests per hour
- **Window:** 3600000 milliseconds (1 hour)
- **Response:** Includes `X-RateLimit-Remaining` header

### Check Rate Limit

```javascript
const result = await api.text.count('test');

if (result.success) {
  console.log('Remaining requests:', result.data.remaining);
} else if (result.error === 'Rate limit exceeded') {
  console.log('Too many requests. Try again later.');
}
```

---

## Error Handling

All API responses follow this format:

```javascript
{
  success: true/false,
  data: { /* response data */ },
  error: "Error message (if success is false)"
}
```

### Example Error Handling

```javascript
const result = await api.text.count('Hello');

if (!result.success) {
  switch (result.error) {
    case 'Invalid key format':
      console.log('Please provide a valid API key');
      break;
    case 'API key not found':
      console.log('Your API key is not registered');
      break;
    case 'Rate limit exceeded':
      console.log('Too many requests. Wait before retrying');
      break;
    default:
      console.log('Error:', result.error);
  }
}
```

---

## Examples

### Complete Node.js Example

```javascript
const LearnDocsAPI = require('./api-endpoints.js');

async function main() {
  const api = new LearnDocsAPI();
  api.setAPIKey(process.env.LEARNDOCS_API_KEY);

  try {
    // Example 1: Count words
    const countResult = await api.text.count('Hello World');
    console.log('Word count:', countResult.data.words);

    // Example 2: Convert case
    const caseResult = await api.text.convertCase('hello world', 'upper');
    console.log('Uppercase:', caseResult.data.text);

    // Example 3: Check API health
    const healthResult = await api.healthCheck();
    console.log('API Status:', healthResult.success ? 'Online' : 'Offline');

  } catch (error) {
    console.error('API Error:', error.message);
  }
}

main();
```

### Complete Browser Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>LearnDocs API Demo</title>
</head>
<body>
  <input type="text" id="textInput" placeholder="Enter text">
  <button onclick="countWords()">Count Words</button>
  <div id="result"></div>

  <script src="api-endpoints.js"></script>
  <script>
    const api = new LearnDocsAPI();
    
    // Set your API key (from localStorage or environment)
    const apiKey = localStorage.getItem('learndocs_api_key');
    api.setAPIKey(apiKey);

    async function countWords() {
      const text = document.getElementById('textInput').value;
      const result = await api.text.count(text);
      
      if (result.success) {
        document.getElementById('result').innerHTML = `
          Words: ${result.data.words}<br>
          Characters: ${result.data.characters}
        `;
      } else {
        alert('Error: ' + result.error);
      }
    }
  </script>
</body>
</html>
```

---

## Support

For issues, questions, or feature requests, please contact:
- Email: support@learndocshub.com
- Documentation: https://learn-doshub.vercel.app/api/docs
- GitHub: https://github.com/shakirmhussain10-gif/LearnDoshub

---

**Created by Muhammad Hussain Shakir**  
**LearnDocs Hub - Professional Tools & Services Platform**
