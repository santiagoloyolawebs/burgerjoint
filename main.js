document.addEventListener("DOMContentLoaded", function() {
    
    // 1. MENU MOVIL (Actualizado con Overlay y Botón X)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuOverlay = document.getElementById('menu-overlay');
    const navItems = navLinks.querySelectorAll('a');

    // Función para abrir el menú
    function openMenu() {
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquea el scroll de la pagina de fondo
    }

    // Función para cerrar el menú
    function closeMenu() {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Devuelve el scroll normal
    }

    // Eventos
    mobileBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu); // Cierra si tocan el fondo oscuro

    // Cierra el menú automáticamente si se hace click en algún enlace
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });


    // 2. NAVBAR SCROLL EFFECT & BACK TO TOP BUTTON
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    });

    // 3. HERO BACKGROUND SLIDER (CON PRELOADER PARA TRANSICIÓN SUAVE)
    const heroSection = document.getElementById('hero');
    const images = [
        'assets/slide-1.jpg',
        'assets/slide-2.jpg',
        'assets/slide-3.jpg'
    ];
    let currentIndex = 0;

    if(heroSection) {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        heroSection.style.backgroundImage = `url("${images[0]}")`;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            heroSection.style.backgroundImage = `url("${images[currentIndex]}")`;
        }, 4000); 
    }

    // 4. ANIMACIONES AL HACER SCROLL (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 5. MANEJO DEL FORMULARIO
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Enviando...";
            btn.style.opacity = "0.7";
            
            setTimeout(() => {
                contactForm.reset();
                btn.innerText = "¡Mensaje Enviado!";
                btn.style.backgroundColor = "#28a745";
                btn.style.color = "#fff";
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                    btn.style.opacity = "1";
                }, 3000);
            }, 1500);
        });
    }
});