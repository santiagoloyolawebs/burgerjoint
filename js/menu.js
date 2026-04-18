document.addEventListener("DOMContentLoaded", function() {
    
    // Precarga ligera para evitar parpadeos blancos en la imagen de fondo principal.
    // FIX: La ruta en JS se calcula desde el archivo HTML que lo invoca (menu.html), 
    // por lo tanto la ruta correcta es 'assets/background-3.jpg'
    const bgImage = new Image();
    bgImage.src = 'assets/background-3.jpg';

    // No necesitamos IntersectionObserver aquí porque la tarjeta central 
    // se anima automáticamente con CSS (keyframes) apenas carga la página,
    // garantizando el mejor rendimiento posible.
    
    console.log("Menú cargado y optimizado correctamente.");
});