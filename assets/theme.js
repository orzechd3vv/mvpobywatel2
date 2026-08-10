// ========================================
// THEME SWITCHING SYSTEM
// ========================================

// Detect system preference for dark mode
function getSystemThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Get current theme
function getCurrentTheme() {
    const savedTheme = localStorage.getItem('app-theme');
    
    if (savedTheme === 'auto') {
        return getSystemThemePreference();
    }
    
    return savedTheme || 'dark'; // Default to dark
}

// Apply theme to document
function applyTheme(theme) {
    const actualTheme = theme === 'auto' ? getSystemThemePreference() : theme;
    
    document.body.classList.remove('light-mode', 'dark-mode');
    document.documentElement.classList.remove('light-mode', 'dark-mode');
    
    if (actualTheme === 'light') {
        document.body.classList.add('light-mode');
        document.documentElement.classList.add('light-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    }
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    applyTheme(savedTheme);
    
    // Update radio buttons if on appearance page
    const radios = document.querySelectorAll('input[type="radio"][name="theme"]');
    if (radios.length > 0) {
        radios.forEach(radio => {
            radio.checked = radio.value === savedTheme;
        });
    }
}

// Inject theme-transition overlay (only once, into whatever page loads theme.js)
(function() {
    if (document.getElementById('theme-transition-overlay')) return;
    var style = document.createElement('style');
    style.textContent = [
        '#theme-transition-overlay {',
        '  position: fixed; inset: 0; z-index: 99999;',
        '  display: flex; flex-direction: column;',
        '  align-items: center; justify-content: center; gap: 18px;',
        '  backdrop-filter: blur(18px) saturate(1.4);',
        '  -webkit-backdrop-filter: blur(18px) saturate(1.4);',
        '  background: rgba(0,0,0,0.45);',
        '  opacity: 0; pointer-events: none;',
        '  transition: opacity 0.25s ease;',
        '}',
        'body.light-mode #theme-transition-overlay { background: rgba(255,255,255,0.45); }',
        '#theme-transition-overlay.visible { opacity: 1; pointer-events: all; }',
        '#theme-transition-overlay .tto-spinner {',
        '  width: 48px; height: 48px;',
        '  border: 4px solid rgba(255,255,255,0.25);',
        '  border-top-color: #4aa2fc;',
        '  border-radius: 50%;',
        '  animation: tto-spin 0.75s linear infinite;',
        '}',
        'body.light-mode #theme-transition-overlay .tto-spinner {',
        '  border-color: rgba(0,0,0,0.15); border-top-color: #0b58cc;',
        '}',
        '#theme-transition-overlay .tto-label {',
        '  font-family: "Poppins", sans-serif;',
        '  font-size: 16px; font-weight: 600;',
        '  color: #fff; letter-spacing: 0.2px;',
        '}',
        'body.light-mode #theme-transition-overlay .tto-label { color: #111; }',
        '@keyframes tto-spin { to { transform: rotate(360deg); } }'
    ].join('\n');
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.id = 'theme-transition-overlay';
    overlay.innerHTML = '<div class="tto-spinner"></div><p class="tto-label">Zmienianie Wyglądu</p>';
    document.body.appendChild(overlay);
})();

// Set theme — with 3-second animated transition on appearance page
function setTheme(theme) {
    var onAppearancePage = document.querySelector('input[type="radio"][name="theme"]') !== null;

    if (onAppearancePage) {
        var overlay = document.getElementById('theme-transition-overlay');
        if (overlay) overlay.classList.add('visible');
        setTimeout(function() {
            localStorage.setItem('app-theme', theme);
            applyTheme(theme);
            if (overlay) {
                setTimeout(function() { overlay.classList.remove('visible'); }, 250);
            }
            // Broadcast to other tabs
            if (window.BroadcastChannel) {
                try {
                    var channel = new BroadcastChannel('app-theme');
                    channel.postMessage({ type: 'theme-changed', theme: theme });
                } catch (e) {}
            }
        }, 3000);
    } else {
        localStorage.setItem('app-theme', theme);
        applyTheme(theme);
        if (window.BroadcastChannel) {
            try {
                var channel = new BroadcastChannel('app-theme');
                channel.postMessage({ type: 'theme-changed', theme: theme });
            } catch (e) {}
        }
    }
}

// Listen for theme changes from other tabs
if (window.BroadcastChannel) {
    try {
        const channel = new BroadcastChannel('app-theme');
        channel.addEventListener('message', (event) => {
            if (event.data.type === 'theme-changed') {
                applyTheme(event.data.theme);
            }
        });
    } catch (e) {
        // BroadcastChannel not available
    }
}

// Listen for system theme changes (for auto mode)
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme === 'auto' || !savedTheme) {
            applyTheme('auto');
        }
    });
}

// Listen for storage changes from other tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'app-theme' && e.newValue) {
        applyTheme(e.newValue);
        
        // Update radio buttons if on appearance page
        const radios = document.querySelectorAll('input[type="radio"][name="theme"]');
        if (radios.length > 0) {
            radios.forEach(radio => {
                radio.checked = radio.value === e.newValue;
            });
        }
    }
});

// Attach event listeners to radio buttons and labels
function initializeThemeControls() {
    const radios = document.querySelectorAll('input[type="radio"][name="theme"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                setTheme(e.target.value);
            }
        });
    });

    // Mobile fallback: explicit click on label
    const labels = document.querySelectorAll('.appearance-option');
    labels.forEach(label => {
        label.addEventListener('click', () => {
            const radio = label.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                setTheme(radio.value);
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeTheme();
        initializeThemeControls();
    });
} else {
    initializeTheme();
    initializeThemeControls();
}
