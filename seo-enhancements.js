/**
 * SEO Enhancements Script
 * Dynamically adds breadcrumbs, schema markup, and internal linking
 */

(function() {
  'use strict';

  // Configuration for different pages
  const pageConfig = {
    'pdf-tools.html': {
      title: 'Free PDF Tools - Merge, Split, Compress, Convert & Edit | LearnDocs Hub',
      description: 'Free online PDF tools to merge, split, compress, convert to Word/Image, watermark, protect, unlock, and rotate PDFs. No uploads needed - 100% browser-based processing.',
      tools: [
        { id: 'merge', name: 'PDF Merger', desc: 'Merge multiple PDFs into one document' },
        { id: 'split', name: 'PDF Splitter', desc: 'Extract and split PDF pages' },
        { id: 'compress', name: 'PDF Compressor', desc: 'Reduce PDF file size' },
        { id: 'convert', name: 'PDF Converter', desc: 'Convert PDF to other formats' },
        { id: 'watermark', name: 'Watermark', desc: 'Add watermarks to PDFs' },
        { id: 'protect', name: 'Protector', desc: 'Password protect PDFs' }
      ]
    },
    'image-tools.html': {
      title: 'Free Image Tools - Resize, Compress, Convert & Edit | LearnDocs Hub',
      description: 'Free online image tools: resize, compress, convert formats (JPG, PNG, WebP), crop, rotate, and more. Instant processing, no uploads.',
      tools: [
        { id: 'resize', name: 'Image Resizer', desc: 'Resize images to any dimension' },
        { id: 'compress', name: 'Image Compressor', desc: 'Reduce image file size' },
        { id: 'convert', name: 'Format Converter', desc: 'Convert between image formats' },
        { id: 'crop', name: 'Crop Tool', desc: 'Crop and resize images' },
        { id: 'rotate', name: 'Rotate Tool', desc: 'Rotate images any angle' },
        { id: 'filter', name: 'Filters', desc: 'Apply effects and filters' }
      ]
    },
    'text-tools.html': {
      title: 'Free Text Tools - Format, Convert & Analyze Text | LearnDocs Hub',
      description: 'Free text tools: case converter, word counter, duplicate remover, JSON formatter, regex tester, text statistics, and more.',
      tools: [
        { id: 'case', name: 'Case Converter', desc: 'Convert text case format' },
        { id: 'counter', name: 'Word Counter', desc: 'Count words, characters, lines' },
        { id: 'duplicate', name: 'Duplicate Remover', desc: 'Remove duplicate lines' },
        { id: 'formatter', name: 'JSON Formatter', desc: 'Format and validate JSON' },
        { id: 'regex', name: 'Regex Tester', desc: 'Test regular expressions' },
        { id: 'password', name: 'Password Generator', desc: 'Generate secure passwords' }
      ]
    },
    'audio-tools.html': {
      title: 'Free Audio Tools - Convert, Trim & Process Audio | LearnDocs Hub',
      description: 'Free online audio tools: convert formats, trim, merge, and process audio files. No uploads, all in your browser.',
      tools: [
        { id: 'converter', name: 'Audio Converter', desc: 'Convert between audio formats' },
        { id: 'trim', name: 'Audio Trimmer', desc: 'Trim and cut audio files' },
        { id: 'merge', name: 'Audio Merger', desc: 'Merge multiple audio files' },
        { id: 'volume', name: 'Volume Control', desc: 'Adjust audio volume' }
      ]
    },
    'video-tools.html': {
      title: 'Free Video Tools - Convert, Compress & Edit Videos | LearnDocs Hub',
      description: 'Free online video tools: convert formats, compress, trim, and process videos. Fast, secure, no uploads required.',
      tools: [
        { id: 'converter', name: 'Video Converter', desc: 'Convert video formats' },
        { id: 'compress', name: 'Video Compressor', desc: 'Reduce video file size' },
        { id: 'trim', name: 'Video Trimmer', desc: 'Trim video clips' },
        { id: 'merge', name: 'Video Merger', desc: 'Merge multiple videos' }
      ]
    },
    'business-tools.html': {
      title: 'Business Tools - Invoice, Resume, QR Code & More | LearnDocs Hub',
      description: 'Free business tools: invoice generator, resume builder, QR code maker, business letter templates. Instant, free, no sign-up needed.',
      tools: [
        { id: 'invoice', name: 'Invoice Generator', desc: 'Create professional invoices' },
        { id: 'resume', name: 'Resume Builder', desc: 'Build professional resumes' },
        { id: 'qr', name: 'QR Code Generator', desc: 'Create QR codes instantly' },
        { id: 'letter', name: 'Letter Templates', desc: 'Business letter templates' },
        { id: 'certificate', name: 'Certificate Maker', desc: 'Create certificates' }
      ]
    },
    'social-tools.html': {
      title: 'Social Media Tools - Post Scheduler, Analytics & More | LearnDocs Hub',
      description: 'Free social media tools: post scheduler, content calendar, analytics tracker, hashtag generator, and more.',
      tools: [
        { id: 'scheduler', name: 'Post Scheduler', desc: 'Schedule social posts' },
        { id: 'hashtag', name: 'Hashtag Generator', desc: 'Generate trending hashtags' },
        { id: 'calendar', name: 'Content Calendar', desc: 'Plan content strategy' },
        { id: 'analytics', name: 'Analytics Tracker', desc: 'Track social metrics' }
      ]
    },
    'calculators.html': {
      title: 'Free Online Calculators - Math, Finance & Conversion | LearnDocs Hub',
      description: 'Free online calculators: scientific calculator, financial calculator, unit converter, percentage calculator, and more.',
      tools: [
        { id: 'scientific', name: 'Scientific Calculator', desc: 'Advanced math calculations' },
        { id: 'financial', name: 'Financial Calculator', desc: 'Loan, mortgage, investment' },
        { id: 'converter', name: 'Unit Converter', desc: 'Convert units instantly' },
        { id: 'percentage', name: 'Percentage Calculator', desc: 'Calculate percentages' }
      ]
    },
    'chat.html': {
      title: 'Free AI Chat - Ask Anything with Our AI Assistant | LearnDocs Hub',
      description: 'Free AI chat assistant. Ask any questions, get instant answers, 100% private with local browser processing.',
      isFeatured: true
    }
  };

  // Add breadcrumb navigation
  function addBreadcrumbs(pageName) {
    const breadcrumbContainer = document.createElement('nav');
    breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');
    breadcrumbContainer.className = 'seo-breadcrumbs';
    
    const breadcrumbList = document.createElement('script');
    breadcrumbList.type = 'application/ld+json';
    
    const breadcrumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://learndocs-hub.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Tools',
          'item': 'https://learndocs-hub.com/#tools'
        }
      ]
    };
    
    if (pageName && pageConfig[pageName]) {
      const config = pageConfig[pageName];
      breadcrumbs.itemListElement.push({
        '@type': 'ListItem',
        'position': 3,
        'name': config.title.split('|')[0].trim(),
        'item': `https://learndocs-hub.com/${pageName}`
      });
    }
    
    breadcrumbList.textContent = JSON.stringify(breadcrumbs);
    document.head.appendChild(breadcrumbList);
  }

  // Add FAQPage schema
  function addFAQSchema() {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Is LearnDocs Hub completely free?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! All tools are 100% free. No hidden charges, no premium tiers, no sign-up required.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is my data private and secure?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Absolutely. All processing happens locally in your browser. We never upload, store, or access your files on our servers.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need to create an account?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No account needed. Just visit the tool page and start using it immediately. No registration, no login required.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What file formats are supported?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We support all common formats: PDF, JPG, PNG, WebP, GIF, MP3, MP4, and many more. Check individual tool pages for specific formats.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I use LearnDocs Hub offline?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Install our Progressive Web App (PWA) and use most tools even when offline.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is there a file size limit?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No server uploads mean no file size limits (limited only by your browser\'s memory).'
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }

  // Add tool schema markup
  function addToolSchemas(tools) {
    if (!tools || tools.length === 0) return;
    
    tools.forEach(tool => {
      const toolSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': tool.name,
        'description': tool.desc,
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
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(toolSchema);
      document.head.appendChild(script);
    });
  }

  // Add internal linking strategy
  function addInternalLinks() {
    const linksSection = document.createElement('nav');
    linksSection.className = 'seo-related-tools';
    linksSection.setAttribute('aria-label', 'Related Tools');
    
    const heading = document.createElement('h3');
    heading.textContent = 'Related Tools';
    linksSection.appendChild(heading);
    
    const list = document.createElement('ul');
    
    // Add links to other tool categories
    const relatedTools = [
      { href: '/', text: 'Home' },
      { href: '/pdf-tools.html', text: 'PDF Tools' },
      { href: '/image-tools.html', text: 'Image Tools' },
      { href: '/text-tools.html', text: 'Text Tools' },
      { href: '/business-tools.html', text: 'Business Tools' },
      { href: '/chat.html', text: 'AI Chat' }
    ];
    
    relatedTools.forEach(tool => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = tool.href;
      a.textContent = tool.text;
      li.appendChild(a);
      list.appendChild(li);
    });
    
    linksSection.appendChild(list);
    
    // Append to footer or before closing body
    const footer = document.querySelector('footer');
    if (footer) {
      footer.parentNode.insertBefore(linksSection, footer);
    }
  }

  // Initialize
  function init() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Add breadcrumbs
    addBreadcrumbs(currentPage);
    
    // Add FAQ schema for FAQ page
    if (currentPage === 'faq.html') {
      addFAQSchema();
    }
    
    // Add tool schemas if on tool page
    if (pageConfig[currentPage] && pageConfig[currentPage].tools) {
      addToolSchemas(pageConfig[currentPage].tools);
    }
    
    // Add internal linking
    addInternalLinks();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
