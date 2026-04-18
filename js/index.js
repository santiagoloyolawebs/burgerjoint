document.addEventListener('DOMContentLoaded', () => {
    // 1. ANIMACIONES DE REVELADO (Intersection Observer - Alto Rendimiento)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejamos de observar una vez animado
            }
        });
    }, revealOptions);

    const elementsToReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elementsToReveal.forEach(el => revealObserver.observe(el));

    // 2. BOTÓN VOLVER ARRIBA (Optimizado)
    const backToTop = document.getElementById('back-to-top');
    let isVisible = false;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 500 && !isVisible) {
            backToTop.classList.add('visible');
            isVisible = true;
        } else if (scrollY <= 500 && isVisible) {
            backToTop.classList.remove('visible');
            isVisible = false;
        }
    }, { passive: true }); // passive: true mejora el rendimiento del scroll

    // 3. CAMBIO DE IMÁGENES HERO (Opcional, si tienes slider)
    const hero = document.getElementById('hero');
    const images = ['assets/slide-1.jpg', 'assets/slide-2.jpg', 'assets/slide-3.jpg'];
    let currentImg = 0;

    if (hero) {
        setInterval(() => {
            currentImg = (currentImg + 1) % images.length;
            hero.style.backgroundImage = `url('${images[currentImg]}')`;
        }, 5000);
    }
});