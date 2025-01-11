class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.isOpen = false;
        
        this.initialize();
    }

    initialize() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        
        // Fechar menu com Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.mobileMenu.contains(e.target) && !this.menuToggle.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.animateHamburger(true);
    }

    closeMenu() {
        this.isOpen = false;
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        this.animateHamburger(false);
    }

    animateHamburger(isOpen) {
        const spans = this.menuToggle.querySelectorAll('.hamburger span');
        
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
}); 