document.addEventListener("DOMContentLoaded", () => {
    
    // --- BASE DE DATOS DE HAMBURGUESAS ---
    const burgerData = {
        clasica: {
            title: "CLÁSICA",
            img: "assets/clasica.png",
            spicyLevel: 0, 
            desc: "Una hamburguesa atemporal con todo lo que tiene que tener: queso suave y fundido, lechuga fresca, tomate en rodajas, cebolla morada crocante y mayonesa en su punto justo.",
            ingredients: ["Queso", "Lechuga", "Tomate", "Cebolla Morada", "Mayonesa"],
            sauce: "Salsa Mayonesa casera en un toque justo."
        },
        mexican: {
            title: "MEXICAN",
            img: "assets/mexican.png",
            spicyLevel: 5, 
            desc: "Carne de bife de chorizo a la parrilla, servida en pan casero, con jalapeños al natural, guacamole cremoso, cebolla morada fresca, rodajas de tomate, queso dambo derretido y un toque de nuestra salsa picante artesanal.",
            ingredients: ["Jalapeños", "Guacamole", "Cebolla", "Salsa Picante", "Tomate", "Queso Dambo"],
            sauce: "Salsa picante exclusiva de la casa."
        },
        machete: {
            title: "MACHETE",
            img: "assets/machete.png",
            spicyLevel: 4, 
            desc: "Prepárate para un golpe de sabor con doble carne, doble queso cheddar derretido, cebolla morada crujiente, jalapeños picantes y nuestra salsa especial con el toque justo de fuego.",
            ingredients: ["Doble Burger", "Queso Cheddar", "Cebolla Morada", "Jalapeño", "Salsa Picante"],
            sauce: "Salsa picante exclusiva de la casa."
        },
        american: {
            title: "AMERICAN",
            img: "assets/american.png",
            spicyLevel: 0, 
            desc: "Medallón de bife de chorizo en pan casero, acompañado de panceta crocante, queso cheddar fundido y un toque intenso de salsa barbacoa.",
            ingredients: ["Panceta", "Cheddar", "Barbacoa"],
            sauce: "Salsa Barbacoa"
        },
        double: {
            title: "DOUBLE CHEESE",
            img: "assets/double-cheese.png",
            spicyLevel: 0, 
            desc: "Doble medallón de carne en pan casero de la casa, con doble queso cheddar fundido y un toque justo de salsa ketchup clásica.",
            ingredients: ["Doble Burger", "Doble Queso Cheddar", "Ketchup"],
            sauce: "Salsa Ketchup"
        },
        veggie: {
            title: "VEGGIE",
            img: "assets/veggie.png",
            spicyLevel: 0, 
            desc: "Medallón casero a base de porotos negros, garbanzos y quinoa, aderezado con zanahoria rallada, cebolla, morrón, ajo, pimienta y sal.",
            ingredients: ["Porotos negros", "Garbanzos", "Quinoa", "Zanahoria", "Cebolla", "Ajo", "Morrón", "Sal y Pimienta"],
            sauce: "Salsa de Berenjena"
        },
        "420": {
            title: "4:20",
            img: "assets/420-2.png",
            spicyLevel: 2, 
            desc: "Carne de bife de chorizo en nuestro pan casero, acompañada de queso brie cremoso, panceta caramelizada, puerros crocantes, lechuga morada fresca y una explosiva salsa de jalapeño & mango que despierta todos los sentidos.",
            ingredients: ["Queso Brie", "Panceta Caramelizada", "Puerros Crocantes", "Lechuga morada", "Salsa Jalapeño & Mango"],
            sauce: "Salsa de Jalapeño y Mango."
        },
        ginobili: {
            title: "GINOBILI",
            img: "assets/ginobili.png",
            spicyLevel: 1, 
            desc: "Triple carne, acompañado de huevo a la plancha, crujiente panceta ahumada, triple queso cheddar fundido, pepinos frescos y un toque audaz de salsa barbacoa artesanal.",
            ingredients: ["Triple Burger", "Huevo", "Bacon", "Queso cheddar", "Salsa Barbacoa", "Pickles"],
            sauce: "Salsa barbacoa artesanal."
        },
        bleu: {
            title: "LA BLEU",
            img: "assets/bleu-1.png",
            spicyLevel: 0, 
            desc: "Carne de bife de chorizo en pan casero de la casa, acompañada de hongos portobello salteados, rúcula fresca, tomates deshidratados, cebolla caramelizada y el inconfundible carácter del queso roquefort.",
            ingredients: ["Portobello", "Rúcula", "Tomates Secos", "Cebolla Caramelizada", "Roquefort"],
            sauce: "" 
        },
        jamaican: {
            title: "JAMAICAN",
            img: "assets/jamaican.png",
            spicyLevel: 2, 
            desc: "Carne de bife de chorizo servida en pan casero, combinada con rodajas de ananá grillado, panceta crujiente, queso cheddar fundido, pepino fresco, tomate, un toque de ají y nuestra exclusiva salsa honey-mustard.",
            ingredients: ["Ananá", "Panceta", "Cheddar", "Pepino", "Tomate", "Ají", "Honey Mustard"],
            sauce: "Salsa Honey mustard."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const burgerId = params.get('id');

    if (burgerId && burgerData[burgerId]) {
        const data = burgerData[burgerId];

        document.title = `${data.title} - Burger Joint`;
        document.getElementById('burger-title').textContent = data.title;
        document.getElementById('burger-img').src = data.img;
        document.getElementById('burger-desc').textContent = data.desc;

        // --- PICANTE ---
        const spicyWrapper = document.getElementById('spicy-wrapper');
        const chilisContainer = document.getElementById('burger-chilis');
        
        if (chilisContainer && spicyWrapper) {
            chilisContainer.innerHTML = ''; 
            spicyWrapper.style.display = 'block'; 
            
            for (let i = 0; i < 5; i++) {
                const chiliSpan = document.createElement('span');
                chiliSpan.textContent = '🌶️';
                if (i >= data.spicyLevel) {
                    chiliSpan.classList.add('dimmed'); 
                }
                chilisContainer.appendChild(chiliSpan);
            }
        }

        // --- INGREDIENTES ---
        const ingredientsContainer = document.getElementById('burger-ingredients');
        if (ingredientsContainer) {
            ingredientsContainer.innerHTML = ''; 
            data.ingredients.forEach(ing => {
                const tagDiv = document.createElement('div');
                tagDiv.className = 'ingredient-tag';
                tagDiv.textContent = ing;
                ingredientsContainer.appendChild(tagDiv);
            });
        }

        // --- SALSA ---
        const sauceWrapper = document.getElementById('sauce-wrapper');
        const sauceEl = document.getElementById('burger-sauce');
        
        if (data.sauce && data.sauce.trim() !== "" && sauceWrapper && sauceEl) {
            sauceWrapper.style.display = 'block'; 
            sauceEl.textContent = data.sauce;     
        } else if (sauceWrapper) {
            sauceWrapper.style.display = 'none';  
        }

    } else {
        const titleEl = document.getElementById('burger-title');
        if (titleEl) titleEl.textContent = "ERROR 404";
    }
});