
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cartIcon');
    const productsContainer = document.getElementById('products');
    const searchInput = document.getElementById('searchInput');
    const localStorageKey = 'cartItems';
    const cartTotalIcon = document.getElementById('cartTotalIcon');
    let previousPage = null;

    // Масив з товарами
    const coffeeProducts = [
        { id: 1, name: 'Arabica', price: 20, image:'img/coffee-1.png' },
        { id: 2, name: 'Robusta', price: 17, image: 'img/coffee-2.png' },
        { id: 3, name: 'Liberica', price: 15, image: 'img/coffee-1.png' },
        { id: 4, name: 'Excelsa', price: 19, image: 'img/coffee-2.png' },
        { id: 5, name: 'Kona', price: 30, image: 'img/coffee-1.png' },
        { id: 6, name: 'Blue Mountain', price: 14, image: 'img/coffee-2.png' },
        { id: 7, name: 'Sumatra', price: 34, image: 'img/coffee-1.png' },
        { id: 8, name: 'Hawaiian Peaberry', price: 28, image: 'img/coffee-1.png' },
        { id: 9, name: 'Colombian Supremo', price: 18, image: 'img/coffee-2.png' },
        { id: 10, name: 'Ethiopian Yirgacheffe', price: 40, image: 'img/coffee-1.png' }
    ];

    // відображення товарів в кошику
    function displayCartItems() {
        const cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        const cartTotalElement = document.createElement('div');
        cartTotalElement.classList.add('cart-total');

        if (cartItems.length === 0) {
            productsContainer.innerHTML = '<p>Ваш кошик пустий.</p>';
        } else {
            let totalPrice = 0;
            productsContainer.innerHTML = '';
            cartItems.forEach(item => {
                const product = coffeeProducts.find(prod => prod.id === item.id);
                if (product) {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="product__image">
                        <div class="product__info">
                            <h3 class="product__name">${product.name}</h3>
                            <p class="product__price">$${product.price}</p>
                            <p class="product__quantity">Quantity: ${item.quantity}</p>
                            <button class="btn btn-remove" data-id="${product.id}">Видалити</button>
                            <button class="btn btn-add-more" data-id="${product.id}">Додати ще</button>
                        </div>
                    `;
                    productsContainer.appendChild(productElement);

                    // Calculate total price
                    totalPrice += product.price * item.quantity;

                    // Встановлення обробників подій для кнопок
                    const btnRemove = productElement.querySelector('.btn-remove');
                    btnRemove.addEventListener('click', () => {
                        removeFromCart(product.id);
                    });

                    const btnAddMore = productElement.querySelector('.btn-add-more');
                    btnAddMore.addEventListener('click', () => {
                        addToCart(product.id);
                    });
                }
            });

            // Display total price and number of items
            cartTotalElement.innerHTML = `
                <p>Загальна сума: $${totalPrice.toFixed(2)}</p>
                <p>Кількість товарів: ${calculateTotalItems(cartItems)}</p>
            `;
            productsContainer.appendChild(cartTotalElement);
        }

        // Додати кнопку "Видалити все"
        const removeAllButton = document.createElement('button');
        removeAllButton.textContent = 'Видалити все';
        removeAllButton.addEventListener('click', () => {
            localStorage.removeItem(localStorageKey);
            displayCartItems();
        });
        productsContainer.appendChild(removeAllButton);

        // Додати кнопку "Back to Products"
        const backToProductsButton = document.createElement('button');
        backToProductsButton.textContent = 'Назад до товарів';
        backToProductsButton.addEventListener('click', () => {
            if (previousPage) {
                displayProducts(previousPage);
            }
        });
        productsContainer.appendChild(backToProductsButton);
    }

    // Функція додавання товару до кошика
    function addToCart(productId) {
        let cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        
        // Пошук товару за його id в кошику
        const existingItem = cartItems.find(item => item.id === productId);
        
        if (existingItem) {
            // Якщо товар вже є у кошику, збільшуємо його кількість
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            // Якщо товару немає у кошику, додаємо новий об'єкт
            cartItems.push({ id: productId, quantity: 1 });
        }

        // Оновлення localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(cartItems));
        
        // Оновлення відображення кошика
        displayCartItems();
    }

    // Функція видалення товару з кошика
    function removeFromCart(productId) {
        let cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        
        // Пошук індексу товару за його id в кошику
        const index = cartItems.findIndex(item => item.id === productId);
        
        if (index !== -1) {
            // Видалення товару з масиву
            cartItems.splice(index, 1);
        }
        
        // Оновлення localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(cartItems));
        
        // Оновлення відображення кошика
        displayCartItems();
    }

    // Функція підрахунку загальної кількості товарів у кошику
    function calculateTotalItems(cartItems) {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // Встановлення обробника подій для іконки кошика
    cartIcon.addEventListener('click', () => {
        displayCartItems();
    });

    // Встановлення обробника подій для пошуку товарів
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredProducts = coffeeProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    // Функція відображення всіх товарів або фільтрованих товарів
    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product__image">
                <div class="product__info">
                    <h3 class="product__name">${product.name}</h3>
                    <p class="product__price">$${product.price}</p>
                    <button class="btn btn-add" data-id="${product.id}">Додати в кошик</button>
                </div>
            `;
            productsContainer.appendChild(productElement);

            // Встановлення обробника подій для кнопки додавання в кошик
            const btnAdd = productElement.querySelector('.btn-add');
            btnAdd.addEventListener('click', () => {
                addToCart(product.id);
            });
        });

        // Запам'ятати поточну сторінку
        previousPage = products;
    }

    // Початкове відображення всіх товарів
    displayProducts(coffeeProducts);
});
