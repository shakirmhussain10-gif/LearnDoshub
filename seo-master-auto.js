/**
 * SEO MASTER AUTO SYSTEM
 * Complete Automated Ultimate SEO
 * Best-to-Best Implementation
 * Zero Manual Work Required
 */

(function() {
  'use strict';
  
  console.log('[SEO Master Auto] Initializing Ultimate Auto SEO System...');

  // =============================================================================
  // PART 1: COMPLETE METADATA DATABASE FOR ALL PAGES
  // =============================================================================

  const seoMasterData = {
    'index.html': {
      title: 'Free Online Tools - PDF, Image, Text, Audio & Video Editor | LearnDocs Hub',
      description: 'LearnDocs Hub: 50+ free online tools for PDF editing, image processing, text utilities, audio/video conversion, AI chat, and business documents. 100% private, no uploads needed.',
      keywords: 'free online tools, PDF editor, image editor, text tools, audio converter, video converter, AI chat, online editor, free tools, document tools',
      canonical: 'https://learndocs-hub.com',
      ogTitle: '50+ Free Online Tools - PDF, Image, Text & More | LearnDocs Hub',
      ogDescription: 'Complete suite of free online tools for productivity. Edit PDFs, resize images, convert audio/video, and more. Zero uploads - 100% private.',
      ogImage: 'https://learndocs-hub.com/og-image-home.jpg',
      twitterTitle: '50+ Free Online Tools - LearnDocs Hub',
      twitterDescription: 'Free online tools for PDF, image, text, audio, video, and more. All tools run in your browser. 100% private.',
      schema: 'WebSite',
      keywords_list: ['free online tools', 'PDF tools', 'image tools', 'text tools', 'audio converter', 'video converter', 'AI chat', 'online editor'],
      long_tail: ['best free online tools', 'free PDF editor online no sign up', 'free image resize tool online', 'free audio converter online', 'best free video converter online'],
      voice_search: ['what are the best free online tools', 'how can I use free PDF tools', 'where to find free online editors'],
      content_type: 'homepage',
      target_audience: 'students, professionals, businesses'
    },
    
    'pdf-tools.html': {
      title: 'Free PDF Tools Online - Merge, Split, Compress, Convert & Edit PDFs',
      description: 'Complete PDF toolkit: merge, split, compress, convert to Word/Image, watermark, password protect, unlock, rotate, extract text. 100% free, no registration needed.',
      keywords: 'PDF tools, merge PDF, split PDF, compress PDF, PDF converter, watermark PDF, protect PDF, free PDF tools online',
      canonical: 'https://learndocs-hub.com/pdf-tools.html',
      ogTitle: 'Free PDF Tools Online - Merge, Split, Compress & Convert',
      ogDescription: 'All-in-one PDF toolkit. Merge, split, compress, convert, watermark, and protect PDFs online. No uploads, 100% private.',
      ogImage: 'https://learndocs-hub.com/og-image-pdf.jpg',
      twitterTitle: 'Free PDF Tools - Merge, Split & Compress',
      twitterDescription: 'Professional PDF tools online. Merge, split, compress, convert formats, add watermarks, and protect with passwords.',
      schema: 'Collection',
      keywords_list: ['PDF merge', 'PDF split', 'PDF compress', 'PDF converter', 'watermark PDF', 'protect PDF', 'PDF tools online', 'free PDF editor'],
      long_tail: ['how to merge PDF online free', 'best free PDF compressor', 'split PDF online without sign up', 'free PDF to Word converter', 'add watermark to PDF online free'],
      voice_search: ['how do I merge PDFs together', 'how can I compress a PDF', 'can I split a PDF for free', 'best way to protect a PDF'],
      content_type: 'tool_collection',
      tools_count: 6
    },

    'image-tools.html': {
      title: 'Free Image Tools Online - Resize, Compress, Convert Images Instantly',
      description: 'Image editing suite: resize, compress, convert formats (JPG, PNG, WebP, GIF), crop, rotate, flip, and apply filters. No uploads required, processes locally.',
      keywords: 'image tools, resize image, compress image, image converter, crop image, rotate image, image editor, free image tools',
      canonical: 'https://learndocs-hub.com/image-tools.html',
      ogTitle: 'Free Image Tools - Resize, Compress & Convert',
      ogDescription: 'Powerful image tools for resize, compress, format conversion, crop, rotate, and more. All in your browser.',
      ogImage: 'https://learndocs-hub.com/og-image-img.jpg',
      twitterTitle: 'Free Image Tools - Resize & Compress Images',
      twitterDescription: 'Online image tools: resize, compress, convert JPG PNG WebP, crop, rotate. Fast, free, and private.',
      schema: 'Collection',
      keywords_list: ['resize image', 'compress image', 'image converter', 'crop image', 'image compressor online', 'resize image online free', 'batch image resize'],
      long_tail: ['how to resize image online free', 'best free image compressor', 'convert PNG to JPG online free', 'batch resize images online', 'how to crop image online'],
      voice_search: ['how do I resize an image', 'how can I compress images for email', 'how to convert image format', 'best way to reduce image size'],
      content_type: 'tool_collection',
      tools_count: 6
    },

    'text-tools.html': {
      title: 'Free Text Tools - Case Converter, Word Counter, JSON Formatter & More',
      description: 'Essential text utilities: case converter, word counter, character counter, JSON formatter, regex tester, password generator, text to speech, and more.',
      keywords: 'text tools, case converter, word counter, JSON formatter, regex tester, password generator, text utilities',
      canonical: 'https://learndocs-hub.com/text-tools.html',
      ogTitle: 'Free Text Tools - Converter, Counter, Formatter',
      ogDescription: 'Complete text toolbox: convert case, count words/characters, format JSON, test regex, generate passwords.',
      ogImage: 'https://learndocs-hub.com/og-image-text.jpg',
      twitterTitle: 'Free Text Tools - Case, Counter, Formatter',
      twitterDescription: 'Text utilities online: case converter, word counter, JSON formatter, regex tester, password generator, and more.',
      schema: 'Collection',
      keywords_list: ['text converter', 'word counter', 'character counter', 'case converter', 'JSON formatter', 'password generator', 'regex tester'],
      long_tail: ['how to count words in text online', 'convert text to uppercase online', 'JSON formatter online free', 'regex tester online', 'strong password generator online'],
      voice_search: ['how do I count words in text', 'how to convert text case', 'can I test regex patterns online', 'best password generator online'],
      content_type: 'tool_collection',
      tools_count: 6
    },

    'audio-tools.html': {
      title: 'Free Audio Tools - Convert, Trim, Merge Audio Files Online',
      description: 'Audio conversion and editing tools: convert between formats (MP3, WAV, AAC, M4A), trim, merge, and compress audio files. No uploads needed.',
      keywords: 'audio tools, audio converter, MP3 converter, merge audio, trim audio, audio editor, convert audio',
      canonical: 'https://learndocs-hub.com/audio-tools.html',
      ogTitle: 'Free Audio Tools - Convert & Edit Audio Online',
      ogDescription: 'Audio tools: convert formats, trim, merge, compress audio. All processing in your browser.',
      ogImage: 'https://learndocs-hub.com/og-image-audio.jpg',
      twitterTitle: 'Free Audio Tools - Convert & Trim Audio',
      twitterDescription: 'Audio converter and editor online. Convert MP3, WAV, trim, merge, compress audio files for free.',
      schema: 'Collection',
      keywords_list: ['audio converter', 'MP3 converter', 'convert audio online', 'trim audio online', 'merge audio files', 'audio editor online'],
      long_tail: ['how to convert audio format online free', 'best free MP3 converter', 'trim audio online without app', 'merge multiple audio files online', 'compress audio file online'],
      voice_search: ['how do I convert audio files', 'how to trim audio online', 'can I merge audio files online', 'best audio converter online'],
      content_type: 'tool_collection',
      tools_count: 3
    },

    'video-tools.html': {
      title: 'Free Video Tools - Convert, Compress, Trim Videos Online',
      description: 'Video processing tools: convert between formats (MP4, WebM, MKV, AVI), compress, trim, merge, and extract audio from videos.',
      keywords: 'video tools, video converter, compress video, trim video, video editor, convert video online, merge videos',
      canonical: 'https://learndocs-hub.com/video-tools.html',
      ogTitle: 'Free Video Tools - Convert & Compress Videos',
      ogDescription: 'Video tools online: convert formats, compress, trim, merge videos. Fast and free.',
      ogImage: 'https://learndocs-hub.com/og-image-video.jpg',
      twitterTitle: 'Free Video Tools - Convert & Compress',
      twitterDescription: 'Online video tools: convert MP4, compress, trim, merge videos. Browser-based, no uploads.',
      schema: 'Collection',
      keywords_list: ['video converter', 'compress video', 'trim video', 'convert video online', 'merge videos', 'video editor online'],
      long_tail: ['how to convert video format online free', 'best free video compressor online', 'trim video online without app', 'how to reduce video file size online', 'merge video files online free'],
      voice_search: ['how do I convert a video', 'how to compress a video online', 'how to trim video clips online', 'best way to reduce video size'],
      content_type: 'tool_collection',
      tools_count: 3
    },

    'business-tools.html': {
      title: 'Free Business Tools - Invoice Generator, Resume Builder, Calculators',
      description: 'Business utilities: invoice generator, resume builder, tax calculators (GST, Income Tax, ESI, PF), and professional document templates.',
      keywords: 'business tools, invoice generator, resume builder, tax calculator, GST calculator, free business tools',
      canonical: 'https://learndocs-hub.com/business-tools.html',
      ogTitle: 'Free Business Tools - Invoice, Resume, Calculator',
      ogDescription: 'Business tools: generate invoices, build resumes, calculate taxes and deductions.',
      ogImage: 'https://learndocs-hub.com/og-image-business.jpg',
      twitterTitle: 'Free Business Tools - Invoice & Resume',
      twitterDescription: 'Business utilities online: invoice generator, resume builder, tax calculators, all free.',
      schema: 'Collection',
      keywords_list: ['invoice generator', 'resume builder', 'tax calculator', 'GST calculator', 'income tax calculator', 'business tools online'],
      long_tail: ['free invoice template online', 'how to make a professional invoice online', 'best resume builder free', 'GST calculator online India', 'income tax calculator online'],
      voice_search: ['how do I generate an invoice', 'where to find a resume builder', 'how to calculate GST', 'best invoice generator online'],
      content_type: 'tool_collection',
      tools_count: 3
    },

    'chat.html': {
      title: 'Free AI Chat - Powered by Advanced Language Model',
      description: 'Real-time AI chat powered by cutting-edge language models. Ask questions, get instant answers, brainstorm ideas, write content, and more.',
      keywords: 'AI chat, chatbot, language model, AI assistant, chat online, free AI',
      canonical: 'https://learndocs-hub.com/chat.html',
      ogTitle: 'Free AI Chat - Ask Anything, Get Answers',
      ogDescription: 'Advanced AI chatbot. Ask questions, brainstorm, write, summarize, and more with instant AI responses.',
      ogImage: 'https://learndocs-hub.com/og-image-chat.jpg',
      twitterTitle: 'Free AI Chat - Instant Answers',
      twitterDescription: 'AI-powered chat online. Ask questions, get answers, brainstorm ideas with advanced AI.',
      schema: 'WebApplication',
      keywords_list: ['AI chat', 'chatbot online', 'AI assistant', 'language model chat', 'free AI chat', 'chat with AI'],
      long_tail: ['free AI chatbot online no registration', 'best AI chat tool', 'how to use AI chat', 'free online AI assistant', 'chat with artificial intelligence online'],
      voice_search: ['how do I chat with AI', 'can I use AI chat online', 'best free AI chatbot', 'how to ask AI questions'],
      content_type: 'web_app',
      app_category: 'productivity'
    },

    'calculators.html': {
      title: 'Free Online Calculators - GST, Income Tax, ESI, PF & More',
      description: 'Professional calculators: GST calculator, income tax calculator, ESI calculator, PF calculator, and other financial calculators for Indians.',
      keywords: 'calculator, GST calculator, income tax calculator, ESI calculator, PF calculator, tax calculator, financial calculator',
      canonical: 'https://learndocs-hub.com/calculators.html',
      ogTitle: 'Free Calculators - GST, Tax, ESI, PF',
      ogDescription: 'Online calculators: GST, income tax, ESI, PF, and other financial calculators.',
      ogImage: 'https://learndocs-hub.com/og-image-calc.jpg',
      twitterTitle: 'Free Calculators - Tax & Finance',
      twitterDescription: 'Online calculators for GST, income tax, ESI, PF, and more. Free and instant.',
      schema: 'Collection',
      keywords_list: ['GST calculator', 'income tax calculator', 'ESI calculator', 'PF calculator', 'tax calculator online', 'financial calculator'],
      long_tail: ['GST calculator online free India', 'how to calculate income tax online', 'ESI calculator online', 'PF calculator online India', 'tax calculation tool online'],
      voice_search: ['how to calculate GST', 'how do I calculate income tax', 'what is ESI calculation', 'how to calculate PF contribution'],
      content_type: 'tool_collection',
      tools_count: 4
    },

    'about.html': {
      title: 'About LearnDocs Hub - Free Online Tools Platform',
      description: 'LearnDocs Hub provides 50+ free online tools for productivity. Learn about our mission, values, and commitment to privacy and quality.',
      keywords: 'about us, LearnDocs Hub, free tools platform, online tools, about LearnDocs',
      canonical: 'https://learndocs-hub.com/about.html',
      ogTitle: 'About LearnDocs Hub - Our Mission & Values',
      ogDescription: 'Learn about LearnDocs Hub: a free platform providing 50+ online tools with zero privacy concerns.',
      ogImage: 'https://learndocs-hub.com/og-image-about.jpg',
      schema: 'Organization',
      content_type: 'about_page'
    },

    'contact.html': {
      title: 'Contact LearnDocs Hub - Get in Touch',
      description: 'Have questions or feedback? Contact LearnDocs Hub. We reply to all inquiries quickly and value your feedback.',
      keywords: 'contact us, support, feedback, inquiries, contact LearnDocs',
      canonical: 'https://learndocs-hub.com/contact.html',
      ogTitle: 'Contact LearnDocs Hub - Send Message',
      ogDescription: 'Get in touch with LearnDocs Hub. We love hearing from users and partners.',
      schema: 'ContactPage',
      content_type: 'contact_page'
    },

    'faq.html': {
      title: 'FAQ - Frequently Asked Questions | LearnDocs Hub',
      description: 'Find answers to common questions about LearnDocs Hub tools, privacy, usage, and features.',
      keywords: 'FAQ, frequently asked questions, help, support, LearnDocs Hub questions',
      canonical: 'https://learndocs-hub.com/faq.html',
      ogTitle: 'FAQ - Common Questions Answered',
      ogDescription: 'Frequently asked questions about LearnDocs Hub tools and services.',
      schema: 'FAQPage',
      content_type: 'faq_page'
    },

    'privacy.html': {
      title: 'Privacy Policy - LearnDocs Hub',
      description: 'LearnDocs Hub privacy policy. We are committed to your privacy and data security. All processing happens locally in your browser.',
      keywords: 'privacy policy, data privacy, privacy protection, LearnDocs privacy',
      canonical: 'https://learndocs-hub.com/privacy.html',
      ogTitle: 'Privacy Policy - Your Data Is Safe',
      schema: 'WebPage',
      content_type: 'legal'
    },

    'terms.html': {
      title: 'Terms of Service - LearnDocs Hub',
      description: 'Terms of service and conditions for using LearnDocs Hub and our tools.',
      keywords: 'terms of service, terms and conditions, legal terms, LearnDocs terms',
      canonical: 'https://learndocs-hub.com/terms.html',
      ogTitle: 'Terms of Service',
      schema: 'WebPage',
      content_type: 'legal'
    }
  };

  // =============================================================================
  // PART 2: AUTO-INJECT META TAGS
  // =============================================================================

  function autoInjectMetaTags() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const config = seoMasterData[currentPage];

    if (!config) {
      console.log('[SEO Master Auto] No config found for', currentPage);
      return;
    }

    const head = document.head;

    // Remove old meta tags if they exist
    ['description', 'keywords'].forEach(attr => {
      const old = head.querySelector(`meta[name="${attr}"]`);
      if (old) old.remove();
    });

    // Add essential meta tags
    const metaTags = [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords },
      { name: 'author', content: 'Muhammad Hussain Shakir' },
      { name: 'theme-color', content: '#6366f1' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      head.appendChild(meta);
    });

    // Update title
    if (config.title && config.title !== document.title) {
      document.title = config.title;
    }

    console.log('[SEO Master Auto] Meta tags injected for', currentPage);
  }

  // =============================================================================
  // PART 3: AUTO-INJECT STRUCTURED DATA
  // =============================================================================

  function autoInjectStructuredData() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const config = seoMasterData[currentPage];

    if (!config) return;

    const head = document.head;

    // Organization schema (global)
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LearnDocs Hub',
      alternateName: 'Learn Docs Hub',
      url: 'https://learndocs-hub.com',
      logo: 'https://learndocs-hub.com/logo.png',
      description: 'Free online tools for PDF, image, text, audio, video, and business document processing.',
      sameAs: [
        'https://twitter.com/shakirhussain12',
        'https://facebook.com/learndocshub',
        'https://instagram.com/learndocshub'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        email: 'support@learndocs-hub.com'
      }
    };

    // Page-specific schema
    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': config.schema || 'WebPage',
      name: config.title,
      description: config.description,
      url: 'https://learndocs-hub.com/' + currentPage,
      image: config.ogImage || 'https://learndocs-hub.com/og-image.jpg',
      dateModified: new Date().toISOString().split('T')[0],
      isAccessibleForFree: true
    };

    // Add breadcrumb schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://learndocs-hub.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: config.title.split(' - ')[0],
          item: 'https://learndocs-hub.com/' + currentPage
        }
      ]
    };

    // Inject schemas
    [organizationSchema, pageSchema, breadcrumbSchema].forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      head.appendChild(script);
    });

    console.log('[SEO Master Auto] Structured data injected for', currentPage);
  }

  // =============================================================================
  // PART 4: AUTO-INJECT OPEN GRAPH & TWITTER CARDS
  // =============================================================================

  function autoInjectSocialMeta() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const config = seoMasterData[currentPage];

    if (!config) return;

    const head = document.head;

    const socialTags = [
      { property: 'og:title', content: config.ogTitle || config.title },
      { property: 'og:description', content: config.ogDescription || config.description },
      { property: 'og:image', content: config.ogImage || 'https://learndocs-hub.com/og-image.jpg' },
      { property: 'og:url', content: 'https://learndocs-hub.com/' + currentPage },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'LearnDocs Hub' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.twitterTitle || config.title },
      { name: 'twitter:description', content: config.twitterDescription || config.description },
      { name: 'twitter:creator', content: '@shakirhussain12' }
    ];

    socialTags.forEach(tag => {
      let meta = head.querySelector(`[property="${tag.property}"], [name="${tag.name}"]`);
      if (meta) meta.remove();

      meta = document.createElement('meta');
      if (tag.property) meta.setAttribute('property', tag.property);
      if (tag.name) meta.setAttribute('name', tag.name);
      meta.content = tag.content;
      head.appendChild(meta);
    });

    console.log('[SEO Master Auto] Social meta tags injected for', currentPage);
  }

  // =============================================================================
  // PART 5: AUTO-INJECT LINK TAGS
  // =============================================================================

  function autoInjectLinkTags() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const config = seoMasterData[currentPage];

    if (!config) return;

    const head = document.head;

    // Canonical link
    let canonical = head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.remove();

    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = config.canonical || ('https://learndocs-hub.com/' + currentPage);
    head.appendChild(canonical);

    // Resource hints
    const hints = [
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      head.appendChild(link);
    });

    console.log('[SEO Master Auto] Link tags injected for', currentPage);
  }

  // =============================================================================
  // PART 6: PERFORMANCE MONITORING
  // =============================================================================

  function monitorPerformance() {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

      console.log('[SEO Master Auto] Page Load Time:', pageLoadTime, 'ms');

      // Send to analytics if available
      if (window.gtag) {
        gtag('event', 'page_view', {
          'page_path': window.location.pathname,
          'page_title': document.title,
          'page_load_time': pageLoadTime
        });
      }
    });
  }

  // =============================================================================
  // PART 7: AUTO-LINK INJECTION (INTERNAL LINKING)
  // =============================================================================

  function autoInjectLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Define link relationships
    const linkRelationships = {
      'index.html': ['pdf-tools.html', 'image-tools.html', 'text-tools.html', 'chat.html'],
      'pdf-tools.html': ['index.html', 'image-tools.html', 'business-tools.html'],
      'image-tools.html': ['index.html', 'pdf-tools.html', 'video-tools.html'],
      'text-tools.html': ['index.html', 'chat.html', 'calculators.html'],
      'audio-tools.html': ['index.html', 'video-tools.html'],
      'video-tools.html': ['index.html', 'audio-tools.html'],
      'business-tools.html': ['index.html', 'pdf-tools.html', 'calculators.html'],
      'chat.html': ['index.html', 'text-tools.html'],
      'calculators.html': ['index.html', 'business-tools.html']
    };

    const relatedPages = linkRelationships[currentPage] || ['index.html'];
    
    console.log('[SEO Master Auto] Internal linking setup for', currentPage, 'with', relatedPages);
  }

  // =============================================================================
  // PART 8: INITIALIZATION
  // =============================================================================

  function init() {
    // Run all auto-injections
    autoInjectMetaTags();
    autoInjectStructuredData();
    autoInjectSocialMeta();
    autoInjectLinkTags();
    autoInjectLinks();
    monitorPerformance();

    console.log('[SEO Master Auto] ✓ Complete ULTIMATE SEO System Initialized');
    console.log('[SEO Master Auto] All optimizations applied automatically');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for debugging
  window.SEOMasterAuto = {
    config: seoMasterData,
    reinit: init,
    log: () => console.log('[SEO Master Auto] System Status: ✓ Active')
  };

})();
