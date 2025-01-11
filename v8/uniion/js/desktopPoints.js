class DesktopPointsSystem {
    constructor() {
        this.level = 1;
        this.currentXP = 120;
        this.maxXP = 200;
        this.coursesCompleted = 3;
        this.achievements = 5;
        
        this.initialize();
    }

    initialize() {
        this.updateUI();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Listener para o botão de treino
        const treineButton = document.querySelector('[href="#treine"]');
        if (treineButton) {
            treineButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.addXP(10);
            });
        }
    }

    updateUI() {
        // Atualiza nível
        const levelBadge = document.querySelector('.current-level');
        if (levelBadge) levelBadge.textContent = this.level;

        // Atualiza barra de progresso
        const progressBar = document.querySelector('.xp-progress');
        if (progressBar) {
            const progress = (this.currentXP / this.maxXP) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Atualiza contador de XP
        const xpCount = document.querySelector('.xp-count');
        if (xpCount) {
            xpCount.textContent = `${this.currentXP}/${this.maxXP} XP`;
        }

        // Atualiza badges
        const coursesBadge = document.querySelector('[href="#cursos"] .desktop-badge');
        if (coursesBadge) coursesBadge.textContent = this.coursesCompleted;

        const achievementsBadge = document.querySelector('[href="#conquistas"] .desktop-badge');
        if (achievementsBadge) achievementsBadge.textContent = this.achievements;
    }

    addXP(amount) {
        this.currentXP += amount;
        
        if (this.currentXP >= this.maxXP) {
            this.levelUp();
        }
        
        this.updateUI();
        this.showXPGain(amount);
    }

    levelUp() {
        this.level++;
        this.currentXP = this.currentXP - this.maxXP;
        this.maxXP = Math.floor(this.maxXP * 1.5);
        
        this.showLevelUpAnimation();
    }

    showXPGain(amount) {
        // Cria elemento flutuante de XP
        const xpGain = document.createElement('div');
        xpGain.className = 'xp-gain-popup';
        xpGain.textContent = `+${amount} XP`;
        
        document.body.appendChild(xpGain);
        
        // Anima e remove
        setTimeout(() => {
            xpGain.remove();
        }, 1500);
    }

    showLevelUpAnimation() {
        const levelBadge = document.querySelector('.xp-level-badge');
        levelBadge.classList.add('level-up');
        
        setTimeout(() => {
            levelBadge.classList.remove('level-up');
        }, 1000);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new DesktopPointsSystem();
}); 