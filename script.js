document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad del menú de hamburguesa para dispositivos móviles
    const navBar = document.querySelector('.nav-bar');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Creamos el botón de hamburguesa dinámicamente
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;
    navBar.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (útil en móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // 2. Animaciones al hacer scroll (Intersection Observer API)
    const observerOptions = {
        root: null, // El viewport
        threshold: 0.1, // El 10% del elemento debe ser visible para activarse
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento una vez que ha aparecido
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que queremos animar
    const animatedElements = document.querySelectorAll('.card, .impact-item, .solution-card, .mission-section p, .mission-section h2');

    animatedElements.forEach(element => {
        element.classList.add('hidden'); // Añadimos una clase para ocultarlos al principio
        observer.observe(element);
    });
});