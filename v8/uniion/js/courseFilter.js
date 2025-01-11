//CÓDIGO SEM USO
//esse código é para filtrar os cursos,
//ainda não tem uso, mas criei para usar no futuro.

class CourseFilter {
    constructor() {
        this.searchInput = document.querySelector('.search-bar input');
        this.filterTags = document.querySelectorAll('.filter-tag');
        this.courses = document.querySelectorAll('.course-card');
        
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Filtro por tags
        this.filterTags.forEach(tag => {
            tag.addEventListener('click', () => this.handleTagFilter(tag));
        });

        // Busca por texto
        this.searchInput.addEventListener('input', () => this.handleSearch());
    }

    handleTagFilter(selectedTag) {
        // Remove active de todas as tags
        this.filterTags.forEach(tag => tag.classList.remove('active'));
        
        // Adiciona active na tag selecionada
        selectedTag.classList.add('active');
        
        const filter = selectedTag.dataset.filter;
        
        this.courses.forEach(course => {
            if (filter === 'all' || course.dataset.level === filter) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }

    handleSearch() {
        const searchTerm = this.searchInput.value.toLowerCase();
        
        this.courses.forEach(course => {
            const title = course.querySelector('h3').textContent.toLowerCase();
            const description = course.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CourseFilter();
}); 