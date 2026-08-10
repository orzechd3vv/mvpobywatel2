// Usuwa stare service workery i cache (np. fobywatel), zeby telefon
// nie serwowal nieaktualnych plikow aplikacji.
(function() {
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
})();
