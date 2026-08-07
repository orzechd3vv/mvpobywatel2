(function() {
    var password = localStorage.getItem('user_password');
    if (!password) return;

    var checkInterval = setInterval(function() {
        if (window.supabase) {
            clearInterval(checkInterval);
            checkSuspension();
        }
    }, 500);

    async function checkSuspension() {
        var supabaseUrl = 'https://itfwhcyjqyqgnjtpvsel.supabase.co';
        var supabaseAnon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZndoY3lqcXlxZ25qdHB2c2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTg2OTMsImV4cCI6MjA5NjIzNDY5M30.cw3h2Vg0ADQ_AvSXE_5IkME0BU4-IHsJujOhdQSSAos';
        var supabase = window.supabase.createClient(supabaseUrl, supabaseAnon);

        var { data, error } = await supabase
            .from('accounts')
            .select('suspended, suspend_reason')
            .eq('password', password)
            .single();

        if (!error && data && data.suspended) {
            showSuspensionOverlay(data.suspend_reason);
        }
    }

    function showSuspensionOverlay(reason) {
        var overlay = document.createElement('div');
        overlay.id = 'suspensionOverlay';
        overlay.innerHTML = '<div class="suspension-box">' +
            '<h2>Twoje konto zostało zawieszone przez administratora</h2>' +
            '<p>Powód: ' + (reason || 'Brak') + '</p>' +
            '</div>';
        
        var style = document.createElement('style');
        style.innerHTML = '#suspensionOverlay { position: fixed; top:0; left:0; width: 100%; height: 100%; background: #050508; z-index: 99999; display: flex; align-items: center; justify-content: center; color: white; text-align: center; padding: 20px; }' +
                          '.suspension-box { background: #121218; padding: 30px; border-radius: 20px; }';
        document.head.appendChild(style);
        document.body.appendChild(overlay);
    }
})();
