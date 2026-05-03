/**
 * affiliate-loader.js — v2.0
 * LearnDocs Hub — Download Intercept + Overlay System
 */
(function () {
  'use strict';

  const FIREBASE_DB_URL = 'https://app-link-7cb74-default-rtdb.asia-southeast1.firebasedatabase.app';

  const pageMeta = document.querySelector('meta[name="page-id"]');
  const PAGE_ID = pageMeta ? pageMeta.getAttribute('content') : detectPageId();

  function detectPageId() {
    const path = location.pathname.split('/').pop().replace('.html', '');
    const map = { 'video-tools':'video-tools','audio-tools':'audio-tools','image-tools':'image-tools','text-tools':'text-tools','calculators':'calculators','social-tools':'social-tools','business-tools':'business-tools','popular-tools':'popular-tools' };
    return map[path] || null;
  }

  if (!PAGE_ID) return;

  async function fetchFirebase(path) {
    try { const r = await fetch(FIREBASE_DB_URL + '/' + path + '.json'); return await r.json(); }
    catch (e) { return null; }
  }

  let affLinks = {}, settings = {}, pendingAction = null;

  async function init() {
    const [links, banner, cfg] = await Promise.all([
      fetchFirebase('affiliateLinks/' + PAGE_ID),
      fetchFirebase('pageBanners/' + PAGE_ID),
      fetchFirebase('adminSettings'),
    ]);
    affLinks = links || {};
    settings = cfg || { btnText:'🎁 Claim Offer – Click Here', btnColor:'#6366f1' };

    const hasLink = Object.values(affLinks).some(v => v && v.trim());
    if (!hasLink && !(banner && banner.url)) return;

    injectStyles(settings.btnColor || '#6366f1');
    buildOverlay();

    if (banner && banner.url && banner.text) showBanner(banner.text, banner.url);

    setTimeout(interceptButtons, 900);
    observeNewButtons();
  }

  /* ── OVERLAY ── */
  function buildOverlay() {
    if (document.getElementById('aff-overlay')) return;
    const o = document.createElement('div');
    o.id = 'aff-overlay';
    o.innerHTML = '<div id="aff-modal"><button id="aff-modal-close" onclick="window.__affClose()">✕</button><div id="aff-modal-icon">⚡</div><div id="aff-modal-tag">SPONSORED</div><h2 id="aff-modal-title">Before You Download</h2><p id="aff-modal-sub">Support us by checking out this offer — takes 2 seconds!</p><a id="aff-modal-btn" href="#" target="_blank" rel="noopener sponsored"><span id="aff-modal-btn-text">🎁 Claim Offer</span><span class="aff-arrow">→</span></a><div class="aff-timer-wrap"><div class="aff-timer-bar"><div id="aff-timer-fill"></div></div><span id="aff-timer-txt">Wait <b id="aff-countdown">5</b>s to unlock download</span></div><button id="aff-skip-btn" onclick="window.__affSkip()" disabled>⬇️ Skip & Continue Download</button><p class="aff-note">Your file is ready. Download starts after skip.</p></div>';
    document.body.appendChild(o);
    window.__affClose = closeOverlay;
    window.__affSkip = skipAndDownload;
    o.addEventListener('click', e => { if (e.target === o) closeOverlay(); });
  }

  function showOverlay(affUrl, originalFn) {
    const o = document.getElementById('aff-overlay');
    if (!o) return;
    pendingAction = originalFn;
    document.getElementById('aff-modal-btn').href = affUrl || '#';
    document.getElementById('aff-modal-btn-text').textContent = settings.btnText || '🎁 Claim Offer – Click Here';
    o.classList.add('active');
    document.body.style.overflow = 'hidden';

    let startTime = Date.now();
    const dur = 5000;
    const skipBtn = document.getElementById('aff-skip-btn');
    const fill = document.getElementById('aff-timer-fill');
    const cd = document.getElementById('aff-countdown');
    skipBtn.disabled = true; skipBtn.style.opacity = '0.4';
    fill.style.width = '0%'; cd.textContent = '5';

    const tmr = setInterval(() => {
      const el = Date.now() - startTime;
      fill.style.width = Math.min((el/dur)*100,100) + '%';
      cd.textContent = Math.max(0, Math.ceil((dur-el)/1000));
      if (el >= dur) {
        clearInterval(tmr);
        skipBtn.disabled = false; skipBtn.style.opacity = '1';
        document.getElementById('aff-timer-txt').innerHTML = '✅ Ready! Click below to download.';
      }
    }, 50);
    o._tmr = tmr;
  }

  function closeOverlay() {
    const o = document.getElementById('aff-overlay');
    if (!o) return;
    if (o._tmr) clearInterval(o._tmr);
    o.classList.remove('active');
    document.body.style.overflow = '';
    pendingAction = null;
  }

  function skipAndDownload() {
    const o = document.getElementById('aff-overlay');
    if (o) { if (o._tmr) clearInterval(o._tmr); o.classList.remove('active'); }
    document.body.style.overflow = '';
    if (pendingAction) { try { pendingAction(); } catch(e){} pendingAction = null; }
  }

  /* ── BUTTON INTERCEPT ── */
  const DL_TEXT = /download|convert|compress|trim|create gif|generate|export/i;
  const SKIP_TEXT = /upload|preview|play|pause|theme|close|cancel|reset|set.?speed|preset|calculate|emi|bmi|age|gst|percentage/i;

  function isDownloadBtn(btn) {
    if (btn._affIntercepted) return false;
    if (btn.closest('#aff-overlay, #aff-page-banner')) return false;
    if (btn.id === 'aff-skip-btn' || btn.id === 'aff-modal-close') return false;
    const txt = (btn.textContent || '').trim();
    const fn  = btn.getAttribute('onclick') || '';
    const cls = btn.className || '';
    if (SKIP_TEXT.test(txt) || SKIP_TEXT.test(fn)) return false;
    const isPrimary = /primary|download|convert|success/.test(cls);
    return (isPrimary && DL_TEXT.test(txt + fn)) || DL_TEXT.test(txt);
  }

  function getAffLink() {
    const vals = Object.values(affLinks).filter(v => v && v.trim());
    if (!vals.length) return null;
    return vals[Math.floor(Math.random() * vals.length)];
  }

  function interceptBtn(btn) {
    if (!isDownloadBtn(btn)) return;
    const affUrl = getAffLink();
    if (!affUrl) return;
    btn._affIntercepted = true;

    const origOnclick = btn.onclick;
    const origAttr    = btn.getAttribute('onclick');
    btn.onclick = null;
    btn.removeAttribute('onclick');

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      let fn = null;
      if (origOnclick) {
        fn = () => origOnclick.call(btn, e);
      } else if (origAttr) {
        fn = () => { try { (new Function(origAttr))(); } catch(ex) { try { window.eval(origAttr); } catch(ex2){} } };
      }
      showOverlay(affUrl, fn);
    }, true);
  }

  function interceptButtons() {
    document.querySelectorAll('button, input[type="button"], input[type="submit"]').forEach(interceptBtn);
  }

  function observeNewButtons() {
    new MutationObserver(() => {
      document.querySelectorAll('button, input[type="button"]').forEach(b => { if (!b._affIntercepted) interceptBtn(b); });
    }).observe(document.body, { childList:true, subtree:true });
  }

  /* ── PAGE BANNER ── */
  function showBanner(text, url) {
    if (sessionStorage.getItem('aff-ban-' + PAGE_ID)) return;
    const color = settings.btnColor || '#6366f1';
    const ban = document.createElement('div');
    ban.id = 'aff-page-banner';
    ban.innerHTML = '<span class="aff-ban-text">📢 ' + text + '</span><a class="aff-ban-btn" href="' + url + '" target="_blank" rel="noopener sponsored">Get Offer →</a><button class="aff-ban-close" onclick="sessionStorage.setItem(\'aff-ban-' + PAGE_ID + '\',\'1\');this.closest(\'#aff-page-banner\').remove()">✕</button>';
    document.body.prepend(ban);
  }

  /* ── STYLES ── */
  function injectStyles(color) {
    if (document.getElementById('aff-styles')) return;
    const s = document.createElement('style');
    s.id = 'aff-styles';
    s.textContent = `
#aff-overlay{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.8);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.3s ease;padding:20px;}
#aff-overlay.active{opacity:1;pointer-events:all;}
#aff-modal{background:#0f172a;border:1px solid ${color}55;border-radius:22px;padding:38px 32px 28px;max-width:420px;width:100%;text-align:center;position:relative;box-shadow:0 0 80px ${color}33,0 24px 60px rgba(0,0,0,0.7);transform:scale(0.9) translateY(30px);transition:transform 0.38s cubic-bezier(0.34,1.56,0.64,1);font-family:inherit;}
#aff-overlay.active #aff-modal{transform:scale(1) translateY(0);}
#aff-modal-close{position:absolute;top:14px;right:14px;background:rgba(255,255,255,0.07);border:none;color:#94a3b8;width:30px;height:30px;border-radius:50%;font-size:0.9rem;cursor:pointer;transition:background 0.2s;display:flex;align-items:center;justify-content:center;}
#aff-modal-close:hover{background:rgba(255,255,255,0.18);color:#fff;}
#aff-modal-icon{font-size:3rem;margin-bottom:6px;animation:affBounce 1.6s ease-in-out infinite;}
@keyframes affBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
#aff-modal-tag{display:inline-block;background:${color}20;color:${color};border:1px solid ${color}40;padding:3px 14px;border-radius:20px;font-size:0.68rem;font-weight:700;letter-spacing:2px;margin-bottom:12px;}
#aff-modal-title{font-size:1.4rem;font-weight:800;color:#f1f5f9;margin-bottom:8px;}
#aff-modal-sub{color:#64748b;font-size:0.85rem;margin-bottom:22px;line-height:1.55;}
#aff-modal-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,${color},${color}bb);color:#fff!important;text-decoration:none!important;padding:15px 24px;border-radius:12px;font-weight:700;font-size:0.95rem;box-shadow:0 6px 24px ${color}55;transition:all 0.2s;margin-bottom:20px;}
#aff-modal-btn:hover{transform:translateY(-2px);box-shadow:0 10px 32px ${color}66;}
.aff-arrow{background:rgba(255,255,255,0.2);width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.aff-timer-wrap{margin-bottom:16px;}
.aff-timer-bar{height:5px;background:#1e293b;border-radius:4px;overflow:hidden;margin-bottom:8px;}
#aff-timer-fill{height:100%;width:0%;background:linear-gradient(90deg,${color},#10b981);border-radius:4px;transition:width 0.05s linear;}
#aff-timer-txt{font-size:0.78rem;color:#64748b;}
#aff-timer-txt b{color:${color};}
#aff-skip-btn{width:100%;padding:13px;background:transparent;border:1px solid #334155;border-radius:10px;color:#94a3b8;font-size:0.88rem;font-weight:600;cursor:pointer;transition:all 0.2s;margin-bottom:10px;font-family:inherit;}
#aff-skip-btn:not(:disabled):hover{border-color:#10b981;color:#10b981;background:rgba(16,185,129,0.07);}
#aff-skip-btn:disabled{cursor:not-allowed;}
.aff-note{font-size:0.72rem;color:#475569;}
#aff-page-banner{position:sticky;top:0;z-index:9998;background:linear-gradient(135deg,${color}ee,${color}99);backdrop-filter:blur(10px);padding:10px 50px 10px 20px;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;text-align:center;border-bottom:1px solid ${color}55;animation:affSlideDown 0.4s ease;position:relative;}
@keyframes affSlideDown{from{transform:translateY(-100%)}to{transform:translateY(0)}}
.aff-ban-text{color:#fff;font-weight:600;font-size:0.88rem;}
.aff-ban-btn{background:#fff;color:${color};padding:7px 18px;border-radius:20px;font-weight:700;font-size:0.8rem;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,0.15);white-space:nowrap;transition:opacity 0.2s;}
.aff-ban-btn:hover{opacity:0.88;}
.aff-ban-close{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.2);border:none;color:#fff;width:26px;height:26px;border-radius:50%;font-size:0.78rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.aff-ban-close:hover{background:rgba(255,255,255,0.35);}
@media(max-width:480px){#aff-modal{padding:28px 18px 22px;}#aff-modal-title{font-size:1.1rem;}}
    `;
    document.head.appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
