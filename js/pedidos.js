document.addEventListener("DOMContentLoaded", () => {
    // PRO FIX: Detectamos si el usuario recargó la página (F5 o botón de refrescar)
    const isReload = (performance.getEntriesByType("navigation")[0]?.type === "reload") || 
                     (performance.navigation && performance.navigation.type === 1);
    
    if (isReload) {
        sessionStorage.removeItem('burgerCart');
    }

    const burgerData = [
        { id: "clasica", title: "CLÁSICA", img: "assets/clasica.png", price: 8500, desc: "Queso fundido, lechuga, tomate, cebolla morada crocante y mayonesa." },
        { id: "mexican", title: "MEXICAN", img: "assets/mexican.png", price: 9800, desc: "Jalapeños, guacamole cremoso, cebolla morada, tomate, queso dambo y salsa picante." },
        { id: "machete", title: "MACHETE", img: "assets/machete.png", price: 11500, desc: "Doble carne, doble queso cheddar, cebolla crujiente, jalapeños y salsa especial." },
        { id: "american", title: "AMERICAN", img: "assets/american.png", price: 9200, desc: "Panceta crocante, queso cheddar fundido y un toque intenso de salsa barbacoa." },
        { id: "double", title: "DOUBLE CHEESE", img: "assets/double-cheese.png", price: 10500, desc: "Doble medallón, doble queso cheddar fundido y un toque justo de ketchup." },
        { id: "veggie", title: "VEGGIE", img: "assets/veggie.png", price: 8000, desc: "Medallón de porotos negros, garbanzos y quinoa con vegetales." },
        { id: "420", title: "4:20", img: "assets/420-2.png", price: 10200, desc: "Queso brie, panceta caramelizada, puerros, lechuga morada y salsa jalapeño & mango." },
        { id: "ginobili", title: "GINOBILI", img: "assets/ginobili.png", price: 12500, desc: "Triple carne, huevo, panceta, triple cheddar, pepinos y salsa barbacoa artesanal." },
        { id: "bleu", title: "LA BLEU", img: "assets/bleu-1.png", price: 9500, desc: "Hongos portobello, rúcula, tomates secos, cebolla caramelizada y queso roquefort." },
        { id: "jamaican", title: "JAMAICAN", img: "assets/jamaican.png", price: 9800, desc: "Ananá grillado, panceta, cheddar, pepino, tomate y salsa honey-mustard." }
    ];

    // Usamos sessionStorage en lugar de localStorage
    let cart = JSON.parse(sessionStorage.getItem('burgerCart')) || [];
    
    const menuSection = document.getElementById("menu-section");
    const toastContainer = document.getElementById("toast-container");
    const floatingCartLink = document.getElementById("floating-cart-link");
    const floatingCartBadge = document.getElementById("floating-cart-badge");

    const renderMenu = () => {
        const fragment = document.createDocumentFragment();

        burgerData.forEach(burger => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${burger.img}" alt="${burger.title}" class="product-img" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${burger.title}</h3>
                    <p class="product-desc">${burger.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">$${burger.price.toLocaleString("es-AR")}</span>
                        <button class="btn-add" data-id="${burger.id}">
                            <i class="fas fa-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
        });

        menuSection.appendChild(fragment);

        document.querySelectorAll(".btn-add").forEach(btn => {
            btn.addEventListener("click", (e) => addToCart(e.currentTarget.getAttribute("data-id")));
        });
    };

    const addToCart = (id) => {
        const burger = burgerData.find(b => b.id === id);
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) existingItem.quantity += 1;
        else cart.push({ ...burger, quantity: 1 });
        
        sessionStorage.setItem('burgerCart', JSON.stringify(cart));
        updateFloatingButton();
        showToast(`¡${burger.title} agregada!`);
    };

    const updateFloatingButton = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            floatingCartLink.style.display = "flex";
            floatingCartBadge.textContent = totalItems;
        } else {
            floatingCartLink.style.display = "none";
        }
    };

    const showToast = (message) => {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        toastContainer.appendChild(toast);
        
        toast.offsetHeight; 
        toast.classList.add("show");
        
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400); 
        }, 2000);
    };

    renderMenu();
    updateFloatingButton();
});