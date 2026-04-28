/* i18n foundation for EN/UR */
const i18nDict = {
  en: {
    brand: "LearnDocs Hub",
    home: "Home",
    blog: "Blog",
    'pdf-tools': "PDF Tools",
    'image-tools': "Image Tools",
    'audio-tools': "Audio Tools",
    'video-tools': "Video Tools",
    'text-tools': "Text Tools",
    'ai-chat': "AI Chat",
    'all-tools': "All Tools",
    categories: "Tool Categories",
    'why-title': "Why LearnDocs Hub?",
    'why-sub': "Built for privacy, speed, and simplicity",
    'about-title': "About LearnDocs Hub",
    'about-p1': "LearnDocs Hub is a free, privacy-focused collection of 100+ online tools for PDFs, images, text, and business documents. Tools run entirely in your browser, ensuring your data stays on your device.",
    'footer-copy': "© 2026 LearnDocs Hub",
    'hero-title-1': "LearnDocs Hub",
    'hero-title-2': "Free Tools + AI Assistant",
    'hero-subtitle': "Process PDFs, images, text and business documents with AI assistance. Everything runs in your browser - your files never leave your device.",
    'search-placeholder': "Search tools... (e.g. PDF Merge, OCR, Invoice)",
    'test-paper': "Test Paper Generator",
    'create-paper': "Create Paper",
    'question-bank': "Question Bank",
    'my-papers': "My Papers",
  },
  ur: {
    brand: "لیرن ڈاکس ہب",
    home: "صفحۂ آغاز",
    blog: "بلاگ",
    'pdf-tools': "PDF ٹولز",
    'image-tools': "تصویری اوزار",
    'audio-tools': "آڈیو اوزار",
    'video-tools': "ویڈیو اوزار",
    'text-tools': "متن کے اوزار",
    'ai-chat': "اے آئی چیٹ",
    'all-tools': "تمام ٹولز",
    categories: "ٹولز کی زمرہ بندی",
    'why-title': "کیوں لیرن ڈاکس ہب؟",
    'why-sub': "پرائیویسی، رفتار، اور سادگی کے لیے بنا",
    'about-title': "لیرن ڈاکس ہب کے بارے میں",
    'about-p1': "لیرن ڈاکس ہب ایک مفت، پرائیویسی پر مبنی ٹولز کا مجموعہ ہے۔ 100+ ابزار PDFs، تصاویر، متن، اور بزنس ڈاکومنٹس کے لیے۔",
    'footer-copy': "© 2026 لیرن ڈاکس ہب",
    'hero-title-1': "لیرن ڈاکس ہب",
    'hero-title-2': "مفت ٹولز + اے آئی اسسٹنٹ",
    'hero-subtitle': "اپنے براؤزر میں PDF، تصاویر، متن اور بزنس ڈاکومنٹس پر AI مدد سے عمل کریں - آپ کی فائلیں آپ کے آلے پر رہتی ہیں۔",
    'search-placeholder': "Tools کو تلاش کریں... (مثلاً PDF Merge, OCR, Invoice)",
    'test-paper': "ٹیسٹ پیپر جنریٹر",
    'create-paper': "پیپر بنائیں",
    'question-bank': "سوالوں کا بینک",
    'my-papers': "میرے پیپرز",
  }
};

function translatePage() {
  const lang = localStorage.getItem('eds-lang') || 'en';
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    const t = i18nDict[lang] && i18nDict[lang][key];
    if (t !== undefined) {
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.placeholder = t;
      } else {
        el.textContent = t;
      }
    }
  });
  const brand = document.getElementById('brand-name');
  if (brand && i18nDict[lang].brand) brand.textContent = i18nDict[lang].brand;
}

function setLanguage(lang) {
  if (!['en','ur'].includes(lang)) return;
  localStorage.setItem('eds-lang', lang);
  translatePage();
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('eds-lang') || 'en';
  const sel = document.getElementById('langSelect');
  if (sel) {
    sel.value = lang;
    sel.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  translatePage();
});

// Global Search Function
const toolsData = [
  { name: 'PDF Tools', page: 'pdf-tools.html', keywords: 'pdf convert merge split compress' },
  { name: 'Image Tools', page: 'image-tools.html', keywords: 'image photo resize crop compress convert' },
  { name: 'Audio Tools', page: 'audio-tools.html', keywords: 'audio mp3 convert trim cut' },
  { name: 'Video Tools', page: 'video-tools.html', keywords: 'video mp4 convert trim cut compress' },
  { name: 'Text Tools', page: 'text-tools.html', keywords: 'text word count format json html' },
  { name: 'Business Tools', page: 'business-tools.html', keywords: 'business invoice generator resume' },
  { name: 'Social Media Tools', page: 'social-tools.html', keywords: 'social media instagram facebook thumbnail' },
  { name: 'Calculators', page: 'calculators.html', keywords: 'calculator age bmi emi conversion' },
  { name: 'Test Paper Generator', page: 'test-paper-generator.html', keywords: 'test paper exam question mcq generate' },
  { name: 'PDF Editor', page: 'pdf-editor.html', keywords: 'pdf edit annotate modify' },
  { name: 'AI Chat', page: 'chat.html', keywords: 'ai chat gpt artificial intelligence' },
  { name: 'Popular Tools', page: 'popular-tools.html', keywords: 'popular tools trending' },
  { name: 'Blog', page: 'blog.html', keywords: 'blog articles posts' },
  { name: 'Settings', page: 'settings.html', keywords: 'settings preferences theme' },
  { name: 'About', page: 'about.html', keywords: 'about us information' },
  { name: 'Privacy Policy', page: 'privacy.html', keywords: 'privacy policy terms' },
  { name: 'FAQ', page: 'faq.html', keywords: 'faq questions help' },
  { name: 'Contact', page: 'contact.html', keywords: 'contact us email' },
  { name: 'Home', page: 'index.html', keywords: 'home main' }
];

function globalSearch(query) {
  const resultsDiv = document.getElementById('searchResults');
  if (!resultsDiv) return;
  
  if (!query || query.length < 1) {
    resultsDiv.style.display = 'none';
    return;
  }
  
  query = query.toLowerCase();
  const results = toolsData.filter(tool => 
    tool.name.toLowerCase().includes(query) || 
    tool.keywords.includes(query)
  ).slice(0, 8);
  
  if (results.length === 0) {
    resultsDiv.innerHTML = '<div style="padding:12px; color:var(--text-muted);">No tools found</div>';
  } else {
    resultsDiv.innerHTML = results.map(tool => 
      `<a href="${tool.page}" style="display:block; padding:10px 12px; text-decoration:none; color:var(--text-primary); border-bottom:1px solid var(--border);">${tool.name}</a>`
    ).join('');
  }
  
  resultsDiv.style.display = 'block';
}

function showSearchResults() {
  const resultsDiv = document.getElementById('searchResults');
  if (resultsDiv && resultsDiv.innerHTML) {
    resultsDiv.style.display = 'block';
  }
}

function hideSearchResults() {
  setTimeout(() => {
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
      resultsDiv.style.display = 'none';
    }
  }, 200);
}
