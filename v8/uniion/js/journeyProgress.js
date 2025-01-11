class JourneyProgress {
    constructor() {
        this.modules = document.querySelectorAll('.journey-module');
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.checkProgress();
    }

    setupEventListeners() {
        this.modules.forEach(module => {
            if (!module.classList.contains('locked')) {
                module.addEventListener('click', () => this.handleModuleClick(module));
            }
        });
    }

    handleModuleClick(module) {
        // Remove active de todos os módulos
        this.modules.forEach(m => m.classList.remove('active'));
        
        // Adiciona active no módulo clicado
        module.classList.add('active');
        
        // Aqui eu vou adicionar lógica para abrir o conteúdo do módulo
        // ou navegar para uma nova página
    }

    checkProgress() {
        // Aqui eu vou adicionar lógica para verificar o progresso
        // e atualizar os círculos de progresso
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JourneyProgress();
}); 