document.addEventListener("DOMContentLoaded", () => {
    // PRO FIX: Vaciamos si recargan la página
    const isReload = (performance.getEntriesByType("navigation")[0]?.type === "reload") || 
                     (performance.navigation && performance.navigation.type === 1);
    
    if (isReload) {
        sessionStorage.removeItem('burgerCart');
    }

    // Código de la fecha eliminado para mantener el script limpio

    // Usamos sessionStorage en lugar de localStorage
    let cart = JSON.parse(sessionStorage.getItem('burgerCart')) || [];
    const WHATSAPP_NUMBER = "541122454518"; 

    const cartItemsContainer = document.getElementById("cart-items-container");
    const checkoutSidebar = document.getElementById("checkout-sidebar");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const btnCheckout = document.getElementById("btn-checkout");

    const renderCart = () => {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <h2>Tu orden está vacía</h2>
                    <p>Parece que aún no elegiste nada rico.</p>
                    <a href="pedidos.html" class="btn-return">Ir al Menú</a>
                </div>
            `;
            if(checkoutSidebar) checkoutSidebar.style.display = "none";
            cartItemsContainer.parentElement.style.display = "block";
            return;
        }

        if(checkoutSidebar) checkoutSidebar.style.display = "flex";
        cartItemsContainer.parentElement.style.display = "";

        const fragment = document.createDocumentFragment();

        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;

            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <span class="cart-item-price">$${item.price.toLocaleString("es-AR")} c/u</span>
                </div>
                <div class="cart-controls">
                    <button class="btn-qty minus" data-id="${item.id}">-</button>
                    <span class="item-qty">${item.quantity}</span>
                    <button class="btn-qty plus" data-id="${item.id}">+</button>
                    <button class="btn-remove" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            fragment.appendChild(itemEl);
        });

        cartItemsContainer.appendChild(fragment);
        cartTotalPrice.textContent = `$${totalPrice.toLocaleString("es-AR")}`;

        document.querySelectorAll(".btn-qty.minus").forEach(btn => btn.addEventListener("click", (e) => changeQty(e.target.dataset.id, -1)));
        document.querySelectorAll(".btn-qty.plus").forEach(btn => btn.addEventListener("click", (e) => changeQty(e.target.dataset.id, 1)));
        document.querySelectorAll(".btn-remove").forEach(btn => btn.addEventListener("click", (e) => removeProduct(e.currentTarget.dataset.id)));
    };

    const changeQty = (id, amount) => {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity += amount;
            if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
            updateStorageAndRender();
        }
    };

    const removeProduct = (id) => {
        cart = cart.filter(i => i.id !== id);
        updateStorageAndRender();
    };

    const updateStorageAndRender = () => {
        sessionStorage.setItem('burgerCart', JSON.stringify(cart));
        renderCart();
    };

    btnCheckout.addEventListener("click", () => {
        if (cart.length === 0) return;
        let total = 0;
        let mensaje = `¡Hola Burger Joint! 🍔%0A%0AQuiero hacer el siguiente pedido:%0A%0A`;
        
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            mensaje += `🔸 ${item.quantity}x *${item.title}* ($${subtotal.toLocaleString("es-AR")})%0A`;
        });

        mensaje += `%0A*TOTAL: $${total.toLocaleString("es-AR")}*%0A%0A¡Muchas gracias!`;
        
        // PRO FIX: Vaciamos el carrito una vez que el cliente avanza a WhatsApp
        sessionStorage.removeItem('burgerCart');
        cart = [];
        renderCart();

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`, "_blank");
    });

    renderCart();
});