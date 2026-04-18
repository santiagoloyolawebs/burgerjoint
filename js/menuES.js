document.addEventListener("DOMContentLoaded", () => {
    
    // Animaciones fluidas al scrollear (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(r => observer.observe(r));
    }

    console.log("Catálogo en Español optimizado.");
});