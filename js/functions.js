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

const totalCost = (product) => {
    let cartAmount = localStorage.getItem('totalPrice');

    if (cartAmount != null) {
        cartAmount = parseFloat(cartAmount);
        localStorage.setItem('totalPrice', cartAmount + product.precio);
    } else {
        localStorage.setItem('totalPrice', product.precio);
    }
};

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
                    <input class="cantidadInput" type="number" value="${
                        item.inCart
                    }">
                </div>   
                <div class="total">
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

const cartUpdate = () => {
    let deleteItemButton = document.getElementsByClassName('delete');
    let quantityInput = document.getElementsByClassName('cantidadInput');

    for (let i = 0; i < deleteItemButton.length; i++) {
        let button = deleteItemButton[i];
        button.addEventListener('click', removeItem);
    }

    for (let i = 0; i < quantityInput.length; i++) {
        let input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }
};

const removeItem = (e) => {
    let buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();

    let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    delete productsInCart[buttonClicked.id];
    productsInCart = JSON.stringify(productsInCart);
    localStorage.setItem('productsInCart', productsInCart);

    // Estaba probando, no me juzgues

    // let totalCost = parseFloat(localStorage.getItem('totalPrice'));
    // totalCost -= 100;
    // console.log(totalCost);
    // localStorage.setItem('totalPrice', totalCost);

    // let cartQty = localStorage.getItem('cartQuantity');
    // cartQty -= 1;
    // console.log(cartQty);
    // localStorage.setItem('cartQuantity', cartQty);
};

const quantityChanged = (e) => {
    let input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
};
