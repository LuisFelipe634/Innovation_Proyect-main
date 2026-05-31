document.addEventListener('DOMContentLoaded', () => {
    // === 1. LÓGICA DE PESTAÑAS (TABS) ===
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');

            const targetTabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // === 2. SELECCIÓN DE ESCUELAS ===
    const schoolButtons = document.querySelectorAll('.school-button');
    const programLists = document.querySelectorAll('.program-list');

    schoolButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            schoolButtons.forEach(b => b.classList.remove('active'));
            programLists.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const key = btn.getAttribute('data-school');
            const target = document.getElementById(`school-${key}`);
            if (target) target.classList.add('active');
        });
    });

    // === 3. LÓGICA DEL MAPA DE RECURSOS FILTRABLES (OPTIMIZADA) ===
    const filterButtons = document.querySelectorAll('.btn-filter');
    const serviceItems = document.querySelectorAll('.service-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            // Remover activo de los botones de filtro y asignarlo al actual
            filterButtons.forEach(b => b.classList.remove('active'));
            event.currentTarget.classList.add('active');

            const category = event.currentTarget.getAttribute('data-filter');

            // Filtrar las tarjetas de recursos con transiciones limpias
            serviceItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'todos' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// === 4. FUNCIONES GLOBALES AUXILIARES ===
function mostrarMensaje() {
    alert("¡Hola! La interactividad está funcionando correctamente. 🚀");
}

function abrirTab(tabId) {
    const button = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (button) {
        button.click();
    }
}

function abrirEscuela(key) {
    const btn = document.querySelector(`.school-button[data-school="${key}"]`);
    if (btn) btn.click();
}