(function () {
    function run() {
        var rows = document.querySelectorAll('.service');
        rows.forEach(function (el, i) {
            el.style.setProperty('--d', (i * 35) + 'ms');
        });
        document.body.classList.add('anim-rows');
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
