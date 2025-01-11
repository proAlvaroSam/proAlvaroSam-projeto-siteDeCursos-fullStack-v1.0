document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar o menu
    async function loadMenu() {
        try {
            const response = await fetch('../html/menu.html');
            const menuHtml = await response.text();
            
            // Insere o menu no placeholder
            const menuPlaceholder = document.getElementById('menu-placeholder');
            if (menuPlaceholder) {
                menuPlaceholder.innerHTML = menuHtml;
            }

            // Marca o item atual do menu como ativo
            const currentPage = window.location.pathname;
            const menuItems = document.querySelectorAll('.nav-menu a');
            
            menuItems.forEach(item => {
                if (currentPage.includes(item.getAttribute('href'))) {
                    item.classList.add('active');
                }
            });

            // Reinicializa o ThemeManager após carregar o menu
            if (window.themeManager) {
                window.themeManager.setupEventListeners();
            } else {
                window.themeManager = new ThemeManager();
            }

        } catch (error) {
            console.error('Erro ao carregar o menu:', error);
        }
    }

    // Carrega o menu
    loadMenu();
}); 