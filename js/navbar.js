document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.getElementById('menu-overlay');

    // 1. Efecto Scroll (Se pone oscura al bajar)
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Lógica del Menú Móvil
    if (mobileBtn && closeBtn && navLinks) {
        const openMenu = () => {
            navLinks.classList.add('active');
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scrollear la web de fondo
        };

        const closeMenu = () => {
            navLinks.classList.remove('active');
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

        // Si se toca un enlace, el menú se cierra automáticamente
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});