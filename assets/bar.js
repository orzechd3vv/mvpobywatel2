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
