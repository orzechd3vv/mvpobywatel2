(function() {
    var password = localStorage.getItem('user_password');
    if (!password) return;

    var checkInterval = setInterval(function() {
        if (window.supabase) {
            clearInterval(checkInterval);
            verifyAccount();
        }
    }, 500);

    async function verifyAccount() {
        var supabaseUrl = 'https://itfwhcyjqyqgnjtpvsel.supabase.co';
        var supabaseAnon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZndoY3lqcXlxZ25qdHB2c2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTg2OTMsImV4cCI6MjA5NjIzNDY5M30.cw3h2Vg0ADQ_AvSXE_5IkME0BU4-IHsJujOhdQSSAos';
        var supabase = window.supabase.createClient(supabaseUrl, supabaseAnon);

        try {
            var { data, error } = await supabase
                .from('accounts')
                .select('id')
                .eq('password', password)
                .single();

            if (error || !data) {
                localStorage.removeItem('user_password');
                window.location.href = 'gen.html';
            }
        } catch(e) {
            console.error('Weryfikacja konta nieudana:', e);
        }
    }
})();
