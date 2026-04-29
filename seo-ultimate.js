/**
 * ULTIMATE SEO CONFIGURATION
 * Complete metadata for all pages and tools
 * Best-to-Best SEO Optimization
 */

const ultimateSEOConfig = {
  // Site-wide configuration
  site: {
    name: 'LearnDocs Hub',
    url: 'https://learndocs-hub.com',
    alternateUrl: 'https://learn-doshub.vercel.app',
    description: 'Free online tools for PDF editing, image processing, text utilities, AI Chat, and business documents. 100% private - all processing happens in your browser.',
    author: 'Muhammad Hussain Shakir',
    creator: 'Muhammad Hussain Shakir',
    publisher: 'LearnDocs Hub',
    email: 'support@learndocs-hub.com',
    phone: '+92-300-0000000',
    twitterHandle: '@shakirhussain12',
    facebookPage: 'https://facebook.com/learndocshub',
    linkedinCompany: 'https://linkedin.com/company/learndocshub',
    youtubeChannel: 'https://youtube.com/@learndocshub',
    instagramHandle: '@learndocshub',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899'
    },
    logo: 'https://learndocs-hub.com/logo.png',
    favicon: 'https://learndocs-hub.com/favicon.ico',
    appleTouchIcon: 'https://learndocs-hub.com/apple-touch-icon.png',
    ogImage: 'https://learndocs-hub.com/og-image.png',
    languages: ['en', 'ur', 'hi', 'pa'],
    country: 'PK',
    currency: 'USD'
  },

  // All tools with complete metadata
  tools: {
    pdf: {
      merge: {
        title: 'Free PDF Merger - Combine Multiple PDFs Online | LearnDocs Hub',
        description: 'Merge multiple PDF files into one document instantly. Free online PDF merger with no file size limits, no uploads, no registration.',
        keywords: 'PDF merge, combine PDF, merge PDF files, PDF joiner, merge multiple PDFs, free PDF merger',
        longDescription: 'Easily merge multiple PDF documents into a single file. Our free online PDF merger requires no signup and handles files of any size.',
        benefits: ['Fast processing', 'No file size limits', 'Secure', 'No registration', 'Works offline'],
        searchIntent: 'How to merge PDFs online'
      },
      split: {
        title: 'Free PDF Splitter - Extract & Split PDF Pages | LearnDocs Hub',
        description: 'Extract pages from PDF or split into multiple files. Free online PDF splitter with instant processing and no uploads.',
        keywords: 'PDF split, split PDF, extract PDF pages, PDF splitter, divide PDF, separate PDF pages',
        longDescription: 'Split PDFs and extract specific pages easily with our free online tool. No limits, no registration required.',
        benefits: ['Extract any pages', 'Fast & secure', 'No registration', 'Works offline', 'Batch processing'],
        searchIntent: 'How to split PDF files'
      },
      compress: {
        title: 'Free PDF Compressor - Reduce PDF File Size | LearnDocs Hub',
        description: 'Compress PDF files to reduce size while maintaining quality. Fast online compression with no uploads or file limits.',
        keywords: 'compress PDF, reduce PDF size, PDF compressor, shrink PDF, optimize PDF',
        longDescription: 'Reduce PDF file sizes instantly with our free online compressor. Perfect for sharing large documents via email.',
        benefits: ['Reduces file size by 50-80%', 'Maintains quality', 'Instant compression', 'Secure', 'No registration'],
        searchIntent: 'How to compress PDF online'
      },
      convert: {
        title: 'Free PDF Converter - Convert PDF to Images & Documents | LearnDocs Hub',
        description: 'Convert PDF to JPG, PNG, Word, Excel, PowerPoint. Free PDF converter with instant processing and high-quality output.',
        keywords: 'PDF converter, convert PDF to image, PDF to JPG, PDF to Word, PDF to PNG, PDF conversion',
        longDescription: 'Convert PDFs to multiple formats including images and documents. Our free converter supports batch conversion.',
        benefits: ['Convert to 10+ formats', 'High-quality output', 'Fast processing', 'Batch conversion', 'No registration'],
        searchIntent: 'How to convert PDF to'
      },
      watermark: {
        title: 'Free PDF Watermark Tool - Add Text & Image Watermarks | LearnDocs Hub',
        description: 'Add text and image watermarks to PDFs. Protect your documents with visible or invisible watermarks online.',
        keywords: 'PDF watermark, add watermark to PDF, watermark tool, document protection',
        longDescription: 'Protect your PDFs by adding custom watermarks. Add text or images to single or multiple pages.',
        benefits: ['Add text watermarks', 'Add image watermarks', 'Customizable', 'Batch processing', 'Instant'],
        searchIntent: 'How to watermark PDF'
      },
      protect: {
        title: 'Free PDF Protector - Password Protect PDFs | LearnDocs Hub',
        description: 'Password protect PDFs with encryption. Secure your documents with owner and user passwords online.',
        keywords: 'PDF protect, password protect PDF, secure PDF, PDF encryption, protect PDF files',
        longDescription: 'Secure your PDFs with strong password protection and encryption. Set restrictions on copying and printing.',
        benefits: ['Strong encryption', 'Set permissions', 'Owner password', 'User password', 'Instant protection'],
        searchIntent: 'How to password protect PDF'
      }
    },
    image: {
      resize: {
        title: 'Free Image Resizer - Resize Images Online | LearnDocs Hub',
        description: 'Resize images to any dimensions. Free online image resizer supporting all formats with batch processing.',
        keywords: 'image resize, resize image, photo resizer, image scaler, batch resize',
        longDescription: 'Resize images to specific dimensions or percentage. Supports batch processing for multiple images.',
        benefits: ['Any dimensions', 'Batch processing', 'Aspect ratio control', 'Quality settings', 'Fast'],
        searchIntent: 'How to resize image online'
      },
      compress: {
        title: 'Free Image Compressor - Reduce Image Size | LearnDocs Hub',
        description: 'Compress images to reduce file size without losing quality. Free online image optimizer for all formats.',
        keywords: 'compress image, image compressor, reduce image size, optimize image, image optimization',
        longDescription: 'Compress images while maintaining visual quality. Perfect for web optimization and faster uploads.',
        benefits: ['Reduces size by 50-70%', 'Quality preservation', 'All formats', 'Batch compress', 'No registration'],
        searchIntent: 'How to compress image online'
      },
      convert: {
        title: 'Free Image Converter - Convert Between Image Formats | LearnDocs Hub',
        description: 'Convert images between JPG, PNG, WebP, GIF, BMP formats. Free fast conversion with high-quality output.',
        keywords: 'image converter, convert image, JPG to PNG, image format conversion, convert to WebP',
        longDescription: 'Convert images between any formats. Support for JPG, PNG, WebP, GIF, BMP, TIFF, and more.',
        benefits: ['10+ formats', 'Batch conversion', 'Quality settings', 'Fast processing', 'No registration'],
        searchIntent: 'How to convert image format'
      },
      crop: {
        title: 'Free Image Cropper - Crop Images Online | LearnDocs Hub',
        description: 'Crop images precisely with our free online cropper. Adjust aspect ratio, rotate, and resize.',
        keywords: 'crop image, image cropper, crop photos, image editor, photo cropper',
        longDescription: 'Crop images with custom aspect ratios and precise control. Includes rotation and resize features.',
        benefits: ['Precise cropping', 'Custom ratios', 'Rotate feature', 'Instant preview', 'Easy to use'],
        searchIntent: 'How to crop image online'
      },
      rotate: {
        title: 'Free Image Rotator - Rotate Images Online | LearnDocs Hub',
        description: 'Rotate images by any angle. Free online image rotator for fixing orientation quickly.',
        keywords: 'rotate image, image rotator, rotate photo, fix image orientation, rotate image online',
        longDescription: 'Rotate images by any degree. Useful for fixing photo orientation and creating designs.',
        benefits: ['Any angle rotation', 'Flip horizontally/vertically', 'Batch processing', 'Instant', 'No registration'],
        searchIntent: 'How to rotate image'
      },
      filter: {
        title: 'Free Image Filter Effects - Apply Filters Online | LearnDocs Hub',
        description: 'Apply filters and effects to images. Free online image editor with multiple filters and adjustments.',
        keywords: 'image filter, photo filter, image effects, photo effects, apply filters',
        longDescription: 'Apply professional filters and effects to images. Includes brightness, contrast, saturation, and more.',
        benefits: ['20+ filters', 'Adjustable effects', 'Batch processing', 'Real-time preview', 'No registration'],
        searchIntent: 'How to apply filters to images'
      }
    },
    text: {
      case: {
        title: 'Free Text Case Converter - Change Text Case Online | LearnDocs Hub',
        description: 'Convert text to uppercase, lowercase, title case, sentence case, and more. Fast online text case converter.',
        keywords: 'case converter, text case, uppercase, lowercase, title case, convert case',
        longDescription: 'Convert text between different case formats instantly. Supports multiple case styles.',
        benefits: ['10+ case styles', 'Instant conversion', 'Copy to clipboard', 'Batch processing', 'No registration'],
        searchIntent: 'How to change text case online'
      },
      counter: {
        title: 'Free Word Counter - Count Words, Characters & Lines | LearnDocs Hub',
        description: 'Count words, characters, sentences, paragraphs, and lines. Free online text analysis tool.',
        keywords: 'word counter, character counter, text statistics, count words, word counter online',
        longDescription: 'Analyze text with detailed statistics including word count, character count, sentence count, and more.',
        benefits: ['Detailed statistics', 'Real-time counting', 'Supports multiple languages', 'Copy to clipboard', 'Free'],
        searchIntent: 'How to count words in text'
      },
      duplicate: {
        title: 'Free Duplicate Remover - Remove Duplicate Lines | LearnDocs Hub',
        description: 'Remove duplicate lines and words from text. Free online duplicate remover for text cleaning.',
        keywords: 'duplicate remover, remove duplicates, text cleaner, remove duplicate lines, duplicate line remover',
        longDescription: 'Clean text by removing duplicate lines and words. Perfect for data cleaning and text processing.',
        benefits: ['Remove duplicate lines', 'Remove duplicate words', 'Preserve order', 'Case sensitive options', 'Instant'],
        searchIntent: 'How to remove duplicate lines'
      },
      formatter: {
        title: 'Free JSON Formatter - Format & Validate JSON | LearnDocs Hub',
        description: 'Format, validate, and minify JSON instantly. Free online JSON formatter for developers.',
        keywords: 'JSON formatter, format JSON, validate JSON, JSON validator, minify JSON',
        longDescription: 'Format, validate, and minify JSON code. Supports beautification with custom indentation.',
        benefits: ['Format/beautify JSON', 'Validate syntax', 'Minify JSON', 'Error detection', 'Copy to clipboard'],
        searchIntent: 'How to format JSON online'
      },
      regex: {
        title: 'Free Regex Tester - Test Regular Expressions | LearnDocs Hub',
        description: 'Test and debug regular expressions with our free online regex tester. Real-time pattern matching.',
        keywords: 'regex tester, regular expression tester, regex test, pattern matching, regex tool',
        longDescription: 'Test regular expressions in real-time with syntax highlighting and match highlighting.',
        benefits: ['Real-time testing', 'Syntax highlighting', 'Match highlighting', 'Pattern flags', 'Explanation'],
        searchIntent: 'How to test regex patterns'
      },
      password: {
        title: 'Free Password Generator - Generate Secure Passwords | LearnDocs Hub',
        description: 'Generate strong, secure passwords instantly. Customizable password generator with multiple options.',
        keywords: 'password generator, generate password, secure password, strong password, random password',
        longDescription: 'Create strong, random passwords with customizable length, characters, symbols, and numbers.',
        benefits: ['Secure generation', 'Customizable', 'Copy to clipboard', 'Bulk generation', 'No tracking'],
        searchIntent: 'How to generate secure passwords'
      }
    },
    audio: {
      convert: {
        title: 'Free Audio Converter - Convert Audio Formats Online | LearnDocs Hub',
        description: 'Convert audio files between MP3, WAV, FLAC, OGG, and more formats. Free online audio converter.',
        keywords: 'audio converter, convert audio, MP3 converter, convert audio format, audio format conversion',
        longDescription: 'Convert between popular audio formats with quality preservation. Supports batch conversion.',
        benefits: ['10+ formats', 'Quality settings', 'Batch conversion', 'Fast processing', 'No registration'],
        searchIntent: 'How to convert audio format'
      },
      trim: {
        title: 'Free Audio Trimmer - Trim & Cut Audio Online | LearnDocs Hub',
        description: 'Trim, cut, and edit audio files online. Free audio trimmer with precise control.',
        keywords: 'audio trimmer, trim audio, cut audio, audio editor, trim MP3',
        longDescription: 'Trim audio files to specific lengths with frame-accurate control.',
        benefits: ['Precise trimming', 'Easy interface', 'Preview before trim', 'Fast processing', 'No registration'],
        searchIntent: 'How to trim audio file'
      },
      merge: {
        title: 'Free Audio Merger - Merge Audio Files Online | LearnDocs Hub',
        description: 'Merge multiple audio files into one. Free online audio merger with no file size limits.',
        keywords: 'merge audio, combine audio, audio merger, merge MP3, merge audio files',
        longDescription: 'Combine multiple audio files into a single track with instant processing.',
        benefits: ['Merge multiple files', 'No file size limits', 'Preserve quality', 'Fast merging', 'No registration'],
        searchIntent: 'How to merge audio files'
      }
    },
    video: {
      convert: {
        title: 'Free Video Converter - Convert Video Formats Online | LearnDocs Hub',
        description: 'Convert videos between MP4, AVI, MKV, WebM, and more. Free online video converter.',
        keywords: 'video converter, convert video, MP4 converter, video format conversion, convert to MP4',
        longDescription: 'Convert videos between multiple formats with quality settings and fast processing.',
        benefits: ['10+ formats', 'Quality control', 'Batch conversion', 'Fast processing', 'No registration'],
        searchIntent: 'How to convert video format'
      },
      trim: {
        title: 'Free Video Trimmer - Trim Videos Online | LearnDocs Hub',
        description: 'Trim and cut videos precisely. Free online video trimmer with easy interface.',
        keywords: 'video trimmer, trim video, cut video, video cutter, trim MP4',
        longDescription: 'Cut videos to specific lengths with frame-accurate control and instant preview.',
        benefits: ['Precise trimming', 'Fast processing', 'Multiple formats', 'Preview feature', 'No registration'],
        searchIntent: 'How to trim video'
      },
      compress: {
        title: 'Free Video Compressor - Reduce Video Size Online | LearnDocs Hub',
        description: 'Compress videos to reduce file size while maintaining quality. Free online video compressor.',
        keywords: 'video compressor, compress video, reduce video size, video optimizer',
        longDescription: 'Reduce video file sizes by up to 80% with adjustable quality settings.',
        benefits: ['Reduces file size', 'Quality control', 'Fast compression', 'Multiple formats', 'No registration'],
        searchIntent: 'How to compress video'
      }
    },
    business: {
      invoice: {
        title: 'Free Invoice Generator - Create Invoices Online | LearnDocs Hub',
        description: 'Generate professional invoices instantly. Free online invoice creator with templates and PDF export.',
        keywords: 'invoice generator, create invoice, invoice maker, professional invoice, invoice template',
        longDescription: 'Create professional invoices with customizable templates and export to PDF.',
        benefits: ['Professional templates', 'Customizable', 'PDF export', 'Email ready', 'No registration'],
        searchIntent: 'How to create invoice online'
      },
      resume: {
        title: 'Free Resume Builder - Create Professional Resumes | LearnDocs Hub',
        description: 'Build professional resumes with templates. Free resume builder with PDF export and formatting.',
        keywords: 'resume builder, create resume, resume maker, resume template, CV maker',
        longDescription: 'Create impressive resumes using professional templates and instant formatting.',
        benefits: ['10+ templates', 'ATS optimized', 'PDF export', 'Easy editing', 'Free forever'],
        searchIntent: 'How to create resume online'
      },
      calculator: {
        title: 'Free Business Calculators - GST, Tax, Salary Calculators | LearnDocs Hub',
        description: 'Free business calculators for GST, income tax, salary, and more. Instant calculations for business needs.',
        keywords: 'business calculator, GST calculator, tax calculator, salary calculator, ESI calculator',
        longDescription: 'Multiple calculators for business needs including GST, tax, salary, and financial calculations.',
        benefits: ['Multiple calculators', 'Accurate calculations', 'Instant results', 'No registration', 'Mobile friendly'],
        searchIntent: 'How to calculate taxes/GST'
      }
    }
  },

  // Content guidelines for each tool
  contentGuidelines: {
    headers: {
      h1: 'Primary page title with main keyword',
      h2: 'Section title with secondary keywords',
      h3: 'Subsection with long-tail keywords'
    },
    contentLength: {
      short: '150-300 words for tool pages',
      medium: '300-600 words for feature pages',
      long: '1000+ words for detailed guides'
    },
    keywordStrategy: {
      primary: 'Include 2-3 times naturally',
      secondary: 'Include 1-2 times naturally',
      longTail: 'Include 1 time naturally',
      relatedKeywords: 'Scattered throughout for context'
    }
  },

  // Voice search phrases
  voiceSearchPhrases: [
    'How do I merge PDF files?',
    'What is the best PDF tool?',
    'Can I compress images online?',
    'How to convert image format?',
    'Where can I create invoice?',
    'Best free online tools',
    'Can I edit PDF online?',
    'How to resize image?',
    'Free invoice generator',
    'Text case converter online'
  ],

  // FAQ content for all sections
  faqCategories: {
    general: [
      { q: 'Is LearnDocs Hub completely free?', a: 'Yes, all tools are free forever with no hidden charges.' },
      { q: 'Do I need to create an account?', a: 'No registration needed. Start using tools instantly.' },
      { q: 'Are my files secure?', a: 'Absolutely. All processing happens locally in your browser. We never upload or store files.' },
      { q: 'Works on mobile?', a: 'Yes, fully responsive and works on all devices.' },
      { q: 'Can I use offline?', a: 'Yes, after first visit, most tools work offline.' }
    ],
    privacy: [
      { q: 'Do you track my data?', a: 'No tracking. Your privacy is protected. All processing is local.' },
      { q: 'Is data stored on server?', a: 'No servers involved. Everything stays in your browser.' },
      { q: 'Can you see my files?', a: 'Impossible. Files never leave your device.' },
      { q: 'GDPR compliant?', a: 'Yes, fully compliant with privacy regulations.' }
    ],
    technical: [
      { q: 'Supported file formats?', a: 'PDF, JPG, PNG, GIF, WebP, MP3, MP4, and 20+ more.' },
      { q: 'File size limits?', a: 'No limits. Process files of any size.' },
      { q: 'Batch processing?', a: 'Yes, process multiple files at once.' },
      { q: 'Browser requirements?', a: 'Modern browsers (Chrome, Firefox, Safari, Edge).' }
    ]
  }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
  window.ultimateSEOConfig = ultimateSEOConfig;
  console.log('[v0-SEO] Ultimate SEO Config loaded with', Object.keys(ultimateSEOConfig.tools).length, 'tool categories');
}
