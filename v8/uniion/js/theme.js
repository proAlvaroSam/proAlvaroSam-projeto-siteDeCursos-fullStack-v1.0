class ThemeManager {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.theme = localStorage.getItem('theme') || 'light';
        
        this.initialize();
        this.setupEventListeners();
    }

    initialize() {
        // Aplica o tema salvo no localStorage
        if (this.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        
        // Verifica preferência do sistema
        if (!localStorage.getItem('theme')) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                this.theme = 'dark';
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
    }

    setupEventListeners() {
        // Remove event listeners antigos se existirem
        if (this.themeToggle) {
            this.themeToggle.removeEventListener('click', this.toggleTheme.bind(this));
        }
        
        // Atualiza a referência do botão e adiciona novo listener
        this.themeToggle = document.querySelector('.theme-toggle');
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Observa mudanças na preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => this.handleSystemThemeChange(e));
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        
        if (this.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        // Adiciona animação ao trocar o tema
        this.animateThemeChange();
    }

    handleSystemThemeChange(e) {
        if (!localStorage.getItem('theme')) {
            this.theme = e.matches ? 'dark' : 'light';
            if (this.theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }
    }

    animateThemeChange() {
        const ripple = document.createElement('div');
        ripple.className = 'theme-ripple';
        document.body.appendChild(ripple);

        requestAnimationFrame(() => {
            ripple.style.transform = 'scale(1)';
            ripple.style.opacity = '0';
        });

        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 1000);
    }
}

// Inicializa o gerenciador de tema quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
}); 