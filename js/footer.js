document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="site-footer">
                <div class="container footer-grid">
                    <div class="footer-brand">
                        <img src="assets/logo-1.png" alt="Burger Joint Logo" class="footer-logo">
                    </div>
                    <div class="footer-links">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="index.html#hero">Home</a></li>
                            <li><a href="menu.html">Menú</a></li>
                            <li><a href="index.html#contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact">
                        <h4>Información de contacto</h4>
                        <p><i class="fas fa-phone-alt"></i> +54 9 11 5931-5097</p>
                        <p><i class="fas fa-envelope"></i> hola@burgerjoint.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <p>© 2024 Burger Joint. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
    }
});