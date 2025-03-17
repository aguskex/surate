// Botón para volver arriba
const btnVolverArriba = document.getElementById('btn-volver-arriba');

// Mostrar u ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostrar el botón después de 300px de scroll
        btnVolverArriba.style.display = 'block';
    } else {
        btnVolverArriba.style.display = 'none';
    }
});

// Volver al inicio de la página al hacer clic en el botón
btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Función para cambiar entre temas claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle-btn i');

    if (body.classList.contains('dark-theme')) {
        // Cambiar a tema claro
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon-stars');
        localStorage.setItem('theme', 'light');
    } else {
        // Cambiar a tema oscuro
        body.classList.add('dark-theme');
        themeIcon.classList.remove('bi-moon-stars');
        themeIcon.classList.add('bi-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Aplicar el tema guardado en localStorage (si existe)
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle-btn i');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('bi-moon-stars');
        themeIcon.classList.add('bi-sun');
    } else {
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon-stars');
    }
}

// Asignar el evento al botón del tema
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-toggle-btn');
    themeButton.addEventListener('click', toggleTheme);

    // Aplicar el tema guardado al cargar la página
    applySavedTheme();
});

// Control del carrusel de videos
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselMates');
    const videos = carousel.querySelectorAll('video');

    // Reproducir el video activo cuando cambia el slide
    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeVideo = event.relatedTarget.querySelector('video');
        videos.forEach(video => video.pause()); // Pausar todos los videos
        activeVideo.play(); // Reproducir el video activo
    });

    // Avanzar al siguiente slide cuando el video termina
    videos.forEach(video => {
        video.addEventListener('ended', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            carouselInstance.next();
        });
    });
});

// Inicializar el carrusel
const carousel = new bootstrap.Carousel('#carouselMates', {
    interval: false, // Desactiva el intervalo automático de Bootstrap
    wrap: true // Permite que el carrusel vuelva al principio después del último slide
});
