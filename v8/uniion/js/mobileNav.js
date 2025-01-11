class MobileNav {
    constructor() {
        this.navItems = document.querySelectorAll('.mobile-nav-item');
        this.initialize();
    }

    initialize() {
        // Marca o item ativo baseado na URL atual
        this.setActiveItem();

        // Adiciona listeners para os cliques
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.handleItemClick(e, item);
            });
        });
    }

    setActiveItem() {
        const currentPath = window.location.hash || '#treine';
        this.navItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    handleItemClick(e, item) {
        // Remove active de todos os items
        this.navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        // Adiciona active no item clicado
        item.classList.add('active');
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new MobileNav();
}); 