// Actualiza el número de items en el carrito según se agreguen
const cartQtyNumber = () => {
    let productsQuantity = localStorage.getItem('cartQuantity');

    if (productsQuantity) {
        document.querySelector('.cartQty span').textContent = productsQuantity;
    }
};

const cartQuantity = (product) => {
    let productsQuantity = localStorage.getItem('cartQuantity');
    productsQuantity = parseInt(productsQuantity);

    if (productsQuantity) {
        localStorage.setItem('cartQuantity', productsQuantity + 1);
        document.querySelector('.cartQty span').textContent =
            productsQuantity + 1;
    } else {
        localStorage.setItem('cartQuantity', 1);
        document.querySelector('.cartQty span').textContent = 1;
    }

    setItems(product);
};

// Agrega los productos del carrito al carrito
const setItems = (product) => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product,
            };
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product,
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
};

// Actualiza el costo total en el localStorage
const totalCost = (product) => {
    let cartAmount = localStorage.getItem('totalPrice');

    if (cartAmount != null) {
        cartAmount = parseFloat(cartAmount);
        localStorage.setItem('totalPrice', cartAmount + product.precio);
    } else {
        localStorage.setItem('totalPrice', product.precio);
    }
};

// Crea y muestra los divs en la página de carrito
const cartDisplay = () => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.querySelector('.carritoProductos');
    let cartAmount = localStorage.getItem('totalPrice');

    if (cartItems && productsContainer) {
        productsContainer.innerHTML = '';
        Object.values(cartItems).map((item) => {
            productsContainer.innerHTML += `
            <div class="cartRow">
                <div class="producto">
                    <img
                        src="img/delete.png"
                        alt="eliminar item"
                        class="delete"
                        id="${item.id}"
                    />
                    <img src="img/${item.id}.jpg" alt="${item.nombre}" />
                    <span>${item.nombre}</span>
                </div>
                <div class="precio">$${item.precio},00</div>
                <div class="cantidad">
                    <input id="input${
                        item.id
                    }" class="cantidadInput" type="number" value="${
                item.inCart
            }">
                </div>
                <div id="price${item.id}" class="total totalProd">
                    $${item.inCart * item.precio},00
                </div>
            </div>
            `;
        });

        productsContainer.innerHTML += `
            <div class="montoTotal">
                <h4 class="totalTitulo">
                    Total de la compra:
                </h4>
                <h4 class="totalCompra">
                    $${cartAmount},00
                </h4>
            </div>
        `;
    }
};

// Actualiza costos, productos en el carrito, y elimina del DOM el producto seleccionado
const cartUpdate = () => {
    let deleteItemButton = document.getElementsByClassName('delete');
    let quantityInput = document.getElementsByClassName('cantidadInput');

    for (let i = 0; i < deleteItemButton.length; i++) {
        let button = deleteItemButton[i];
        button.addEventListener('click', updateCartQty);
    }

    for (let i = 0; i < deleteItemButton.length; i++) {
        let button = deleteItemButton[i];
        button.addEventListener('click', updateTotalAmout);
    }

    for (let i = 0; i < deleteItemButton.length; i++) {
        let button = deleteItemButton[i];
        button.addEventListener('click', removeItem);
    }

    for (let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }

    for (let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        let inputValue = input.value;

        input.addEventListener('change', function () {
            if (input.value > inputValue) {
                let cartQty = Number(localStorage.getItem('cartQuantity'));
                cartQty++;
                localStorage.setItem('cartQuantity', cartQty);
            } else if (input.value < inputValue) {
                let cartQty = Number(localStorage.getItem('cartQuantity'));
                cartQty--;
                localStorage.setItem('cartQuantity', cartQty);
            }
            inputValue = input.value;

            document.querySelector('.cartQty span').textContent =
                localStorage.getItem('cartQuantity');
        });
    }
};

// Funciones correspondientes a los eventos de eliminar del carrito
const updateCartQty = (e) => {
    let buttonClicked = e.target;
    let cartQty = localStorage.getItem('cartQuantity');
    let itemId = `input${buttonClicked.id}`;
    let itemQty = document.getElementById(itemId).value;
    cartQty -= itemQty;
    localStorage.setItem('cartQuantity', cartQty);
};

const updateTotalAmout = (e) => {
    let buttonClicked = e.target;
    let totalAmount = parseInt(localStorage.getItem('totalPrice'));
    let priceId = `price${buttonClicked.id}`;
    let price = document.getElementById(priceId).innerHTML;
    price = parseInt(price.replace('$', '').replace(',00', ''));
    totalAmount -= price;
    localStorage.setItem('totalPrice', totalAmount);
    let total = document.getElementsByClassName('totalCompra')[0];
    total.textContent = `$${totalAmount},00`;
};

const removeItem = (e) => {
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();

    let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    delete productsInCart[buttonClicked.id];
    productsInCart = JSON.stringify(productsInCart);
    localStorage.setItem('productsInCart', productsInCart);

    totalAmountUpdated();
};

const quantityChanged = (e) => {
    let input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    let idInput = input.id;
    idInput = idInput.replace('input', '');
    for (prod of productos) {
        if (prod.id == idInput) {
            let total = document.getElementById('price' + idInput);
            let price = prod.precio;
            let newTotal = input.value * price;
            total.innerHTML = `$${newTotal},00`;
        }
    }

    totalAmountUpdated();
};

const totalAmountUpdated = () => {
    let total = document.getElementsByClassName('totalCompra')[0];
    let productsTotalPrice = document.getElementsByClassName('totalProd');
    let sum = 0;

    for (precio of productsTotalPrice) {
        let precioProd = precio.innerText;
        precioProd = parseInt(precioProd.replace('$', '').replace(',00', ''));
        sum += precioProd;
    }

    if (total) {
        total.textContent = `$${sum},00`;
    }

    localStorage.setItem('totalPrice', sum);
};
