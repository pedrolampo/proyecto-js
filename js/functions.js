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

const removeItem = () => {
    let deleteItemButton = document.getElementsByClassName('delete');
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < deleteItemButton.length; i++) {
        let button = deleteItemButton[i];
        button.addEventListener('click', function (e) {
            let buttonClicked = e.target;
            buttonClicked.parentElement.parentElement.remove();

            console.log(cartItems); // Acá quiero eliminar el item y volver a pushear al localStorage
        });
    }
};
