document.addEventListener('DOMContentLoaded', function() {

    // --- Menú de Navegación Móvil ---
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible");

            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "cerrar navegación");
            } else {
                navToggle.setAttribute("aria-label", "abrir navegación");
            }
        });
    }

    // --- Validación del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                formMessage.textContent = 'Por favor, completa todos los campos.';
                formMessage.className = 'error';
            } else {
                // Aquí es donde normalmente enviarías los datos a un servidor.
                // Como esto es un ejemplo de front-end, solo mostraremos un mensaje de éxito.
                formMessage.textContent = '¡Gracias por tu mensaje! Te contactaremos pronto.';
                formMessage.className = 'success';
                contactForm.reset(); // Limpia el formulario
            }
        });
    }

});