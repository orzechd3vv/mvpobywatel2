// -------------------------
// ROUTER (TWÓJ KOD — ZOSTAWIAM)
// -------------------------
var currentQs = window.location.search;
var isGenOrLogin = window.location.pathname.endsWith('gen.html') || 
                   window.location.pathname.endsWith('id.html') || 
                   window.location.pathname.endsWith('index.html') || 
                   window.location.pathname === '/' || 
                   window.location.pathname === '';

if (currentQs) {
    localStorage.setItem('mobywatel_session', currentQs);
} else if (!isGenOrLogin) {
    var savedSession = localStorage.getItem('mobywatel_session');
    if (savedSession) {
        window.location.replace(window.location.pathname + savedSession);
    }
}

var params = new URLSearchParams(window.location.search || localStorage.getItem('mobywatel_session') || '');
var ROUTES = {
    home: 'home.html',
    services: 'services.html',
    qr: 'qr.html',
    more: 'more.html',
    appearance: 'appearance.html',
    moreid: 'moreid.html',
    id: 'id.html',
    shortcuts: 'shortcuts.html',
    pesel: 'pesel.html',
    scanqr: 'scanqr.html',
    showqr: 'showqr.html',
    gen: 'gen.html',
    card: 'card.html',
    safe_in_web: 'safe_in_web.html',
    flood: 'flood.html',
    pesel_status: 'pesel_status.html',
    check_id: 'check_id.html',
    check_pesel: 'check_pesel.html',
    penalties: 'penalties.html',
    business: 'business.html',
    tickets: 'tickets.html',
    recepty: 'recepty.html',
    request_service: 'finish_case.html',
    my_cases: 'my_cases.html',
    collect_id: 'collect_id.html',
    elections: 'elections.html',
    driver_license: 'driver_license.html',
    finish_case: 'finish_case.html',
    residence_data: 'residence_data.html',
    change_password: 'change_password.html',
    app_language: 'app_language.html',
    activity_history: 'activity_history.html',
};

function sendTo(key){
    var qs = params.toString();
    var file = ROUTES[String(key)] || (String(key).endsWith('.html') ? String(key) : String(key) + '.html');
    var href = file + (qs ? `?${qs}` : '');
    location.href = href;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
});


// -------------------------
//  SYSTEM OPERACYJNY (TWÓJ KOD — ZOSTAWIAM)
// -------------------------
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) return 1;
    if (/android/i.test(userAgent)) return 2;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 3;
    return 4;
}

if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px";
}


// -------------------------
//  🔥 TOP BAR BLUR JAK W MOBYWATEL
// -------------------------

function initTopBarEffects() {
    const bar = document.querySelector(".top_grid, .top_slide_bar");
    const body = document.body;

    if (!bar || body.classList.contains("login-screen")) return;

    body.classList.add("has-blur-topbar");

    const SHOW_OFFSET = 10;
    const BODY_PADDING_CLASS = "body-with-top-bar";
    const ALWAYS_SOLID_CLASS = "topbar-always--solid";
    const alwaysVisible = bar.classList.contains("topbar-always");

    const hero = document.querySelector("[data-hero]");
    const rootStyles = getComputedStyle(document.documentElement);
    const topBarHeight = parseFloat(rootStyles.getPropertyValue("--top-bar-height")) || 52;
    let showThreshold = SHOW_OFFSET;

    function recalcThreshold() {
        if (hero) {
            const rect = hero.getBoundingClientRect();
            const heroTop = rect.top + window.scrollY;
            showThreshold = Math.max(SHOW_OFFSET, heroTop + rect.height - topBarHeight);
        } else {
            showThreshold = SHOW_OFFSET;
        }
    }

    recalcThreshold();
    window.addEventListener("resize", recalcThreshold, { passive: true });

    function updateTopBar() {
        const shouldShow = alwaysVisible || window.scrollY > showThreshold;

        if (shouldShow) {
            bar.classList.add("top-bar--active");
            body.classList.add(BODY_PADDING_CLASS);
        } else {
            bar.classList.remove("top-bar--active");
            body.classList.remove(BODY_PADDING_CLASS);
        }

        if (alwaysVisible) {
            bar.classList.toggle(ALWAYS_SOLID_CLASS, window.scrollY > SHOW_OFFSET);
        }
    }

    window.addEventListener("scroll", updateTopBar, { passive: true });
    updateTopBar();
}

document.addEventListener("DOMContentLoaded", initTopBarEffects);

// -------------------------
//  🔥 AUTO-HIGHLIGHT BOTTOM BAR TABS & PREFETCHING
// -------------------------
(function() {
    // 1. Highlight active bottom tab based on current page
    var path = window.location.pathname.toLowerCase();
    var activeTab = 'home'; // default
    if (path.includes('services.html') || path.includes('safe_in_web.html') || path.includes('flood.html') || path.includes('pesel_status.html') || path.includes('business.html') || path.includes('penalties.html') || path.includes('tickets.html') || path.includes('check_id.html') || path.includes('check_pesel.html') || path.includes('recepty.html') || path.includes('finish_case.html') || path.includes('my_cases.html') || path.includes('collect_id.html') || path.includes('elections.html') || path.includes('driver_license.html')) {
        activeTab = 'services';
    } else if (path.includes('qr.html') || path.includes('scanqr.html') || path.includes('showqr.html')) {
        activeTab = 'qr';
    } else if (path.includes('more.html') || path.includes('moreid.html') || path.includes('appearance.html')) {
        activeTab = 'more';
    } else if (path.includes('search.html')) {
        activeTab = 'search';
    } else if (path.includes('home.html') || path.includes('card.html')) {
        activeTab = 'home';
    }

    var imgs = document.querySelectorAll('.bottom_element_image');
    var texts = document.querySelectorAll('.bottom_element_text');
    var openClasses = ['home_open', 'services_open', 'qr_open', 'more_open', 'search_open'];
    
    imgs.forEach(function(img) { 
        openClasses.forEach(function(c) { img.classList.remove(c); }); 
    });
    texts.forEach(function(t) { t.classList.remove('open'); });

    document.querySelectorAll('.bottom_element_grid').forEach(function(el) {
        var send = el.getAttribute('send');
        var img = el.querySelector('.bottom_element_image');
        var txt = el.querySelector('.bottom_element_text');
        if (send === activeTab) { 
            if (img) img.classList.add(activeTab + '_open'); 
            if (txt) txt.classList.add('open'); 
        }
    });

    // 2. Prefetch all other routes to make navigation instant
    function prefetchRoutes() {
        var filesToPrefetch = Object.values(ROUTES);
        filesToPrefetch.forEach(function(file) {
            // Don't prefetch current page
            if (path.indexOf(file) !== -1) return;
            var link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = file + (window.location.search || localStorage.getItem('mobywatel_session') || '');
            document.head.appendChild(link);
        });
    }

    if (window.requestIdleCallback) {
        window.requestIdleCallback(prefetchRoutes);
    } else {
        window.addEventListener('load', prefetchRoutes);
    }
})();
// -------------------------
//  🔁 REORDER BOTTOM BAR: Szukaj before Więcej
// -------------------------
document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.bottom_bar_grid');
    if (!grid) return;
    var searchEl = grid.querySelector('[send="search"]');
    var moreEl   = grid.querySelector('[send="more"]');
    if (searchEl && moreEl && moreEl.compareDocumentPosition(searchEl) & Node.DOCUMENT_POSITION_FOLLOWING) {
        // search is currently AFTER more — move it before
        grid.insertBefore(searchEl, moreEl);
    }
});

// -------------------------
//  🔒 LOGOUT CONFIRMATION MODAL
// -------------------------
(function() {
    function initLogoutModal() {
        if (document.getElementById('logout-modal-overlay')) return;

        var style = document.createElement('style');
        style.textContent = [
            '#logout-modal-overlay {',
            '  position: fixed; inset: 0; z-index: 99999;',
            '  display: flex; align-items: center; justify-content: center;',
            '  background: rgba(0, 0, 0, 0.65);',
            '  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);',
            '  opacity: 0; pointer-events: none;',
            '  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);',
            '  padding: 20px;',
            '}',
            '#logout-modal-overlay.visible { opacity: 1; pointer-events: all; }',
            '#logout-modal-card {',
            '  background: #1f2326; border: 1px solid rgba(255, 255, 255, 0.1);',
            '  border-radius: 24px; padding: 28px 24px 24px;',
            '  width: 100%; max-width: 360px; text-align: center;',
            '  box-shadow: 0 20px 40px rgba(0,0,0,0.5);',
            '  transform: scale(0.92); transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);',
            '}',
            'body.light-mode #logout-modal-card {',
            '  background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.08);',
            '  box-shadow: 0 20px 40px rgba(0,0,0,0.12);',
            '}',
            '#logout-modal-overlay.visible #logout-modal-card { transform: scale(1); }',
            '.logout-modal-title {',
            '  font-family: "Poppins", sans-serif; font-size: 20px; font-weight: 700;',
            '  color: #ffffff; margin: 0 0 10px 0; line-height: 1.3;',
            '}',
            'body.light-mode .logout-modal-title { color: #111111; }',
            '.logout-modal-desc {',
            '  font-family: "Poppins", sans-serif; font-size: 14px; font-weight: 400;',
            '  color: #98a2ad; margin: 0 0 24px 0; line-height: 1.4;',
            '}',
            'body.light-mode .logout-modal-desc { color: #666666; }',
            '.logout-modal-actions { display: flex; flex-direction: column; gap: 10px; }',
            '.logout-btn-confirm {',
            '  width: 100%; padding: 14px; border: none; border-radius: 16px;',
            '  background: #4ba4fe; color: #ffffff;',
            '  font-family: "Poppins", sans-serif; font-size: 16px; font-weight: 600;',
            '  cursor: pointer; transition: background 0.15s ease, transform 0.1s ease;',
            '}',
            '.logout-btn-confirm:active { transform: scale(0.98); background: #dc2626; }',
            '.logout-btn-cancel {',
            '  width: 100%; padding: 14px; border: none; border-radius: 16px;',
            '  background: rgba(255, 255, 255, 0.08); color: #ffffff;',
            '  font-family: "Poppins", sans-serif; font-size: 16px; font-weight: 600;',
            '  cursor: pointer; transition: background 0.15s ease, transform 0.1s ease;',
            '}',
            'body.light-mode .logout-btn-cancel {',
            '  background: #f0f2f5; color: #111111;',
            '}',
            '.logout-btn-cancel:active { transform: scale(0.98); }'
        ].join('\n');
        document.head.appendChild(style);

        var lang = localStorage.getItem('app_language') || 'pl';
        var LOGOUT_TEXTS = {
            pl: { question: 'Czy na pewno chcesz si\u0119 wylogowa\u0107?', desc: 'B\u0119dziesz musia\u0142 ponownie wpisa\u0107 has\u0142o, aby uzyska\u0107 dost\u0119p do aplikacji.', confirm: 'Tak, chc\u0119', cancel: 'Nie, anuluj' },
            en: { question: 'Are you sure you want to log out?', desc: 'You will need to enter your password again to access the app.', confirm: 'Yes, log out', cancel: 'No, cancel' },
            ua: { question: '\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0439\u0442\u0438?', desc: '\u0412\u0430\u043c \u0437\u043d\u043e\u0432\u0443 \u0437\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0434\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443.', confirm: '\u0422\u0430\u043a, \u0432\u0438\u0439\u0442\u0438', cancel: '\u041d\u0456, \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438' }
        };
        var lt = LOGOUT_TEXTS[lang] || LOGOUT_TEXTS.pl;
        var modalHTML = [
            '<div id="logout-modal-overlay">',
            '  <div id="logout-modal-card">',
            '    <p class="logout-modal-title">' + lt.question + '</p>',
            '    <p class="logout-modal-desc">' + lt.desc + '</p>',
            '    <div class="logout-modal-actions">',
            '      <button class="logout-btn-confirm" id="logoutConfirmBtn">' + lt.confirm + '</button>',
            '      <button class="logout-btn-cancel" id="logoutCancelBtn">' + lt.cancel + '</button>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join('');
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        var overlay = document.getElementById('logout-modal-overlay');
        var confirmBtn = document.getElementById('logoutConfirmBtn');
        var cancelBtn = document.getElementById('logoutCancelBtn');

        function hideModal() {
            overlay.classList.remove('visible');
        }

        cancelBtn.addEventListener('click', hideModal);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) hideModal();
        });

        confirmBtn.addEventListener('click', function() {
            localStorage.removeItem('user_password');
            window.location.href = 'id.html';
        });

        window.showLogoutModal = function() {
            overlay.classList.add('visible');
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLogoutModal);
    } else {
        initLogoutModal();
    }
})();
