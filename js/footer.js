document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // Obtenemos el año actual dinámicamente
        const currentYear = new Date().getFullYear();

        footerPlaceholder.innerHTML = `
            <footer class="site-footer">
                <div class="container footer-grid">
                    <div class="footer-column footer-brand">
                        <img src="assets/logo-1.png" alt="Burger Joint Logo" class="footer-logo">
                        <p class="brand-description">
                            Desde 2013, servimos las mejores hamburguesas de Buenos Aires con un toque neoyorquino y espíritu rebelde.
                        </p>
                    </div>

                    <div class="footer-column footer-location">
                        <h4>Nos encontramos en</h4>
                        <ul class="footer-list">
                            <li>
                                <i class="fas fa-map-marker-alt"></i> 
                                <span>Jorge Luis Borges 1766, CABA</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-column footer-hours">
                        <h4>Horarios</h4>
                        <ul class="footer-list">
                            <li>
                                <i class="far fa-clock"></i> 
                                <span>Domingo a Jueves:<br>12:00 – 00:00 hs</span>
                            </li>
                            <li>
                                <i class="far fa-clock"></i> 
                                <span>Viernes y Sábados:<br>12:00 – 01:00 hs</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-column footer-contact">
                        <h4>Contacto</h4>
                        <ul class="footer-list">
                            <li>
                                <i class="fas fa-phone-alt"></i> 
                                <span>+54 9 11 5931-5097</span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i> 
                                <span>hola@burgerjoint.com</span>
                            </li>
                        </ul>
                        
                        <div class="footer-social-wrapper">
                            <span class="social-label">Seguinos</span>
                            <div class="footer-social">
                                <a href="https://www.instagram.com/burgerjointpalermo/" target="_blank" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <p>&copy; ${currentYear} Burger Joint – Hecho con pasión en Argentina.</p>
                    </div>
                </div>
            </footer>
        `;
    }
});