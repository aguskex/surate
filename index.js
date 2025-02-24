// Obtener el botón
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