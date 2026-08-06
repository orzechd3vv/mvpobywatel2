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

// Set theme
function setTheme(theme) {
    localStorage.setItem('app-theme', theme);
    applyTheme(theme);
    
    // Broadcast to other tabs
    if (window.BroadcastChannel) {
        try {
            const channel = new BroadcastChannel('app-theme');
            channel.postMessage({ type: 'theme-changed', theme: theme });
        } catch (e) {
            // BroadcastChannel not available
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
