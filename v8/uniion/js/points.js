class PointsSystem {
    constructor() {
        this.level = 1;
        this.xp = 120;
        this.coursesCompleted = 3;
        this.achievements = 5;
        
        this.initialize();
    }

    initialize() {
        // Atualiza os valores iniciais
        this.updateUI();
        
        // Adiciona listeners para cliques nos itens do menu
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('click', () => this.handleAction(item));
        });
    }

    updateUI() {
        // Atualiza nível
        const levelElement = document.querySelector('.xp-level');
        if (levelElement) levelElement.textContent = this.level;

        // Atualiza XP
        const xpBadge = document.querySelector('[href="#perfil"] .points-badge');
        if (xpBadge) xpBadge.textContent = `${this.xp} XP`;

        // Atualiza cursos
        const coursesBadge = document.querySelector('[href="#cursos"] .points-badge');
        if (coursesBadge) coursesBadge.textContent = this.coursesCompleted;

        // Atualiza conquistas
        const achievementsBadge = document.querySelector('[href="#conquistas"] .points-badge');
        if (achievementsBadge) achievementsBadge.textContent = this.achievements;
    }

    handleAction(item) {
        // Simula ganho de XP ao clicar em itens
        if (item.href.includes('treine')) {
            this.addXP(10);
        }
    }

    addXP(amount) {
        this.xp += amount;
        if (this.xp >= 200) {
            this.levelUp();
        }
        this.updateUI();
    }

    levelUp() {
        this.level++;
        this.xp = 0;
        
        // Efeito visual de level up
        const xpCircle = document.querySelector('.xp-circle');
        xpCircle.style.animation = 'none';
        setTimeout(() => {
            xpCircle.style.animation = 'xpGlow 2s infinite';
        }, 10);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new PointsSystem();
}); 