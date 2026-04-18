document.addEventListener("DOMContentLoaded", function() {
    
    // 1. BOTÓN VOLVER ARRIBA (Optimizado)
    const backToTop = document.getElementById('back-to-top');
    let isBtnVisible = false;

    window.addEventListener('scroll', () => {
        if (backToTop) {
            const scrollY = window.scrollY;
            if (scrollY > 50 && !isBtnVisible) {
                backToTop.classList.add('visible');
                isBtnVisible = true;
            } else if (scrollY <= 50 && isBtnVisible) {
                backToTop.classList.remove('visible');
                isBtnVisible = false;
            }
        }
    }, { passive: true });

    // 2. HERO BACKGROUND SLIDER
    const heroSection = document.getElementById('hero');
    if(heroSection) {
        const images = [
            'assets/slide-1.jpg',
            'assets/slide-2.jpg',
            'assets/slide-3.jpg'
        ];
        let currentIndex = 0;

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

    // 3. ANIMACIONES AL HACER SCROLL (Intersection Observer - Alto Rendimiento)
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (reveals.length > 0) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, revealOptions);

        reveals.forEach(reveal => {
            revealOnScroll.observe(reveal);
        });
    }

    // 4. MANEJO DEL FORMULARIO
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