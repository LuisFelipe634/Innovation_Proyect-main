document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remover la clase activa de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Ocultar todos los contenidos de las pestañas
            tabContents.forEach(content => content.classList.remove('active'));

            // 3. Añadir la clase activa al botón que recibió el clic
            button.classList.add('active');

            // 4. Mostrar el contenido correspondiente usando el atributo data-tab
            const targetTabId = button.getAttribute('data-tab'); // Ej: "tab1"
            const targetContent = document.getElementById(targetTabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Función opcional para el botón de la pestaña 1
function mostrarMensaje() {
    alert("¡Hola! La interactividad está funcionando correctamente. 🚀");
}

function abrirTab(tabId) {
    const button = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (button) {
        button.click();
    }
}

// Selección de escuelas y visualización de programas
document.addEventListener('DOMContentLoaded', () => {
    const schoolButtons = document.querySelectorAll('.school-button');
    const programLists = document.querySelectorAll('.program-list');

    schoolButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            schoolButtons.forEach(b => b.classList.remove('active'));
            programLists.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const key = btn.getAttribute('data-school'); // e.g., 'digital'
            const target = document.getElementById(`school-${key}`);
            if (target) target.classList.add('active');
        });
    });
});

function abrirEscuela(key) {
    const btn = document.querySelector(`.school-button[data-school="${key}"]`);
    if (btn) btn.click();
}
