// Usuwa stare service workery i cache (np. fobywatel), zeby telefon
// nie serwowal nieaktualnych plikow aplikacji. Uruchamia sie tylko raz na dana wersje.
(function() {
    var CURRENT_CLEANUP_VER = "v2.0";
    if (localStorage.getItem('cache_clean_ver') === CURRENT_CLEANUP_VER) {
        return;
    }
    if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(function(regs) {
            regs.forEach(function(reg) { reg.unregister(); });
        }).catch(function() {});
    }
    if (window.caches && caches.keys) {
        caches.keys().then(function(names) {
            names.forEach(function(name) { caches.delete(name); });
        }).catch(function() {});
    }
    localStorage.setItem('cache_clean_ver', CURRENT_CLEANUP_VER);
})();
