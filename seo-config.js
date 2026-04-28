/**
 * SEO Configuration for LearnDocs Hub
 * This file contains all SEO metadata for pages and tools
 */

const seoConfig = {
  siteName: 'LearnDocs Hub',
  siteUrl: 'https://learndocs-hub.com',
  description: 'Free online tools for PDF editing, image processing, text utilities, AI Chat, and business documents. 100% private - all processing happens in your browser.',
  author: 'Muhammad Hussain Shakir',
  twitterHandle: '@shakirhussain12',
  googleAnalyticsId: 'G-FG6LEW3P8C',
  
  // Pages with individual descriptions
  pages: {
    home: {
      title: 'LearnDocs Hub | Free AI Chat + 100+ Online PDF, Image & Text Tools',
      description: 'Free online tools for PDF editing, image processing, text utilities, and business documents. Plus FREE AI Chat Assistant - ask anything! 100% private - all processing happens in your browser. No uploads, no sign-up needed.',
      keywords: 'free AI chat, AI assistant, online PDF tools, image converter, text tools, business tools, free online tools, PDF merge, PDF compress, image resize, QR code generator, invoice generator, resume builder, password generator, OCR, AI chatbot',
      priority: 1.0,
      changefreq: 'weekly'
    },
    
    pdfTools: {
      title: 'Free PDF Tools - Merge, Split, Compress & Convert | LearnDocs Hub',
      description: 'Free online PDF tools: merge, split, compress, convert to Word/Image, watermark, protect, unlock, rotate. 100% free - no uploads, no sign-up needed.',
      keywords: 'PDF merge, PDF split, PDF compress, PDF to Word, PDF to Image, watermark PDF, protect PDF, unlock PDF, rotate PDF, free PDF tools, online PDF editor',
      longDescription: 'Our free PDF tools let you merge, split, compress, and convert PDFs instantly. No registration required. All processing happens securely in your browser.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    
    pdfEditor: {
      title: 'Online PDF Editor - Edit, Annotate & Modify PDFs | LearnDocs Hub',
      description: 'Free online PDF editor to edit text, add annotations, watermarks, and more. Simple, fast, and secure - no uploads required.',
      keywords: 'PDF editor, edit PDF, PDF annotate, add watermark, modify PDF, free PDF editor online',
      longDescription: 'Edit PDFs online without installing software. Add text, draw, highlight, and annotate with our free PDF editor.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    imageTools: {
      title: 'Free Image Tools - Resize, Compress, Convert & Edit | LearnDocs Hub',
      description: 'Free online image tools: resize, compress, convert formats (JPG, PNG, WebP), crop, rotate, and more. Instant processing, no uploads.',
      keywords: 'image resize, compress image, image converter, crop image, rotate image, JPG to PNG, image optimization, free image tools',
      longDescription: 'Process images instantly with our free online tools. Resize, compress, convert between formats, and edit without leaving your browser.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    
    textTools: {
      title: 'Free Text Tools - Format, Convert & Analyze Text | LearnDocs Hub',
      description: 'Free text tools: case converter, word counter, duplicate remover, JSON formatter, regex tester, text statistics, and more.',
      keywords: 'text tools, case converter, word counter, text formatter, JSON editor, duplicate remover, text statistics, regex tester, free text tools',
      longDescription: 'Powerful text processing tools for developers and writers. Convert case, count words, remove duplicates, format JSON, test regex patterns.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    audioTools: {
      title: 'Free Audio Tools - Convert, Trim & Process Audio | LearnDocs Hub',
      description: 'Free online audio tools: convert formats, trim, merge, and process audio files. No uploads, all in your browser.',
      keywords: 'audio converter, trim audio, merge audio, audio format convert, free audio tools, audio editor online',
      longDescription: 'Edit and convert audio files online. Trim, merge, and convert between audio formats without uploading to servers.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    videoTools: {
      title: 'Free Video Tools - Convert, Compress & Edit Videos | LearnDocs Hub',
      description: 'Free online video tools: convert formats, compress, trim, and process videos. Fast, secure, no uploads required.',
      keywords: 'video converter, compress video, video trim, video format convert, free video tools, video editor online',
      longDescription: 'Process videos online with our free tools. Convert formats, compress, trim, and edit videos in your browser.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    businessTools: {
      title: 'Business Tools - Invoice, Resume, QR Code & More | LearnDocs Hub',
      description: 'Free business tools: invoice generator, resume builder, QR code maker, business letter templates. Instant, free, no sign-up needed.',
      keywords: 'invoice generator, resume builder, QR code, business tools, free templates, invoice maker',
      longDescription: 'Professional tools for business needs. Generate invoices, create resumes, make QR codes, and use ready-made templates.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    socialTools: {
      title: 'Social Media Tools - Post Scheduler, Analytics & More | LearnDocs Hub',
      description: 'Free social media tools: post scheduler, content calendar, analytics tracker, hashtag generator, and more.',
      keywords: 'social media tools, post scheduler, hashtag generator, content calendar, social analytics',
      longDescription: 'Manage your social media presence with our free tools. Schedule posts, track analytics, and generate trending hashtags.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    
    calculators: {
      title: 'Free Online Calculators - Math, Finance & Conversion | LearnDocs Hub',
      description: 'Free online calculators: scientific calculator, financial calculator, unit converter, percentage calculator, and more.',
      keywords: 'calculator, scientific calculator, financial calculator, unit converter, percentage calculator, free calculator online',
      longDescription: 'Comprehensive calculators for everyday math, finance, and unit conversions.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    
    chat: {
      title: 'Free AI Chat - Ask Anything with Our AI Assistant | LearnDocs Hub',
      description: 'Free AI chat assistant. Ask any questions, get instant answers, 100% private with local browser processing.',
      keywords: 'AI chat, chatbot, AI assistant, free AI, ask questions, instant answers',
      longDescription: 'Chat with our free AI assistant. All conversations stay private with browser-based processing.',
      priority: 0.9,
      changefreq: 'weekly'
    },
    
    testPaperGenerator: {
      title: 'Test Paper Generator - Create Question Papers Online | LearnDocs Hub',
      description: 'Free test paper generator for teachers. Create custom question papers, exams, and quizzes instantly.',
      keywords: 'test paper generator, question paper maker, exam creator, quiz maker, free test paper',
      longDescription: 'Teachers can create custom test papers and question sets with our free online generator.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    
    about: {
      title: 'About LearnDocs Hub - Free Online Tools & AI Chat',
      description: 'Learn about LearnDocs Hub - a free platform with 100+ tools for PDF, image, text processing, and AI chat.',
      keywords: 'about, LearnDocs Hub, free tools platform',
      priority: 0.5,
      changefreq: 'monthly'
    },
    
    contact: {
      title: 'Contact Us - LearnDocs Hub Support',
      description: 'Contact LearnDocs Hub support team. Report bugs, request features, or share feedback.',
      keywords: 'contact, support, feedback, bug report',
      priority: 0.5,
      changefreq: 'monthly'
    },
    
    faq: {
      title: 'FAQ - Frequently Asked Questions | LearnDocs Hub',
      description: 'Frequently asked questions about LearnDocs Hub tools, privacy, and usage.',
      keywords: 'FAQ, questions, help, support',
      priority: 0.6,
      changefreq: 'monthly'
    },
    
    blog: {
      title: 'Blog - LearnDocs Hub Tips, Tutorials & News',
      description: 'Read tutorials, tips, and updates about our free online tools and AI features.',
      keywords: 'blog, tutorials, tips, news, learning',
      priority: 0.6,
      changefreq: 'weekly'
    },
    
    privacy: {
      title: 'Privacy Policy - LearnDocs Hub',
      description: 'Learn how we protect your privacy. All processing happens in your browser.',
      keywords: 'privacy, policy',
      priority: 0.3,
      changefreq: 'yearly'
    },
    
    terms: {
      title: 'Terms of Service - LearnDocs Hub',
      description: 'LearnDocs Hub terms of service and user agreement.',
      keywords: 'terms, service, agreement',
      priority: 0.3,
      changefreq: 'yearly'
    }
  },

  // Individual tool pages mapping
  tools: [
    {
      name: 'PDF Merger',
      url: '/pdf-tools.html#merge',
      shortDesc: 'Merge multiple PDFs into one',
      fullDesc: 'Combine multiple PDF files into a single document instantly',
      keywords: 'merge PDF, combine PDFs, PDF merger tool'
    },
    {
      name: 'PDF Splitter',
      url: '/pdf-tools.html#split',
      shortDesc: 'Split PDF into separate pages',
      fullDesc: 'Extract specific pages or split a PDF into individual files',
      keywords: 'split PDF, extract PDF pages, PDF splitter'
    },
    {
      name: 'PDF Compressor',
      url: '/pdf-tools.html#compress',
      shortDesc: 'Reduce PDF file size',
      fullDesc: 'Compress PDF files to reduce size while maintaining quality',
      keywords: 'compress PDF, reduce PDF size, PDF compressor'
    },
    {
      name: 'Image Resizer',
      url: '/image-tools.html#resize',
      shortDesc: 'Resize images to any dimension',
      fullDesc: 'Change image dimensions while maintaining aspect ratio',
      keywords: 'resize image, image resizer, change image size'
    },
    {
      name: 'Image Compressor',
      url: '/image-tools.html#compress',
      shortDesc: 'Reduce image file size',
      fullDesc: 'Compress images without losing quality',
      keywords: 'compress image, reduce image size, image compressor'
    },
    {
      name: 'QR Code Generator',
      url: '/business-tools.html#qr',
      shortDesc: 'Create QR codes instantly',
      fullDesc: 'Generate QR codes for URLs, text, or vCard',
      keywords: 'QR code generator, create QR code, free QR maker'
    },
    {
      name: 'Invoice Generator',
      url: '/business-tools.html#invoice',
      shortDesc: 'Create professional invoices',
      fullDesc: 'Generate invoices with custom branding and details',
      keywords: 'invoice generator, create invoice, free invoice maker'
    },
    {
      name: 'Resume Builder',
      url: '/business-tools.html#resume',
      shortDesc: 'Build professional resumes',
      fullDesc: 'Create ATS-friendly resumes with templates',
      keywords: 'resume builder, create resume, CV maker, job resume'
    },
    {
      name: 'Password Generator',
      url: '/text-tools.html#password',
      shortDesc: 'Generate secure passwords',
      fullDesc: 'Create strong, random passwords with custom rules',
      keywords: 'password generator, generate password, secure password'
    },
    {
      name: 'Text Case Converter',
      url: '/text-tools.html#case',
      shortDesc: 'Convert text case format',
      fullDesc: 'Change between uppercase, lowercase, title case, and more',
      keywords: 'case converter, text case, uppercase lowercase'
    }
  ]
};

// Function to generate schema markup for a page
function generatePageSchema(pageKey, siteUrl = seoConfig.siteUrl) {
  const page = seoConfig.pages[pageKey];
  if (!page) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageKey === 'home' ? siteUrl : `${siteUrl}/${pageKey === 'pdfTools' ? 'pdf-tools.html' : pageKey}.html`,
    'name': page.title,
    'description': page.description,
    'url': pageKey === 'home' ? siteUrl : `${siteUrl}/${pageKey}.html`,
    'isPartOf': {
      '@id': `${siteUrl}/#website`
    },
    'inLanguage': 'en-US',
    'datePublished': new Date().toISOString(),
    'dateModified': new Date().toISOString()
  };
}

// Function to generate FAQPage schema
function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is LearnDocs Hub really free?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! All tools are completely free. No hidden charges, no registration required.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is my data safe and private?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. All processing happens locally in your browser. We never upload or store your files on servers.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need to sign up?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No sign-up is required. Just visit the tool and start using it immediately.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which file formats are supported?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We support most common formats: PDF, JPG, PNG, WebP, MP3, MP4, and many more.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I use these tools offline?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! Install the Progressive Web App (PWA) and use tools offline.'
        }
      }
    ]
  };
}

// Function to generate Product schema for tools
function generateToolSchema(tool, siteUrl = seoConfig.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': tool.name,
    'description': tool.fullDesc,
    'url': `${siteUrl}${tool.url}`,
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '1000+'
    }
  };
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    seoConfig,
    generatePageSchema,
    generateFAQSchema,
    generateToolSchema
  };
}
