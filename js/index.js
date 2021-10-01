let cart = document.querySelectorAll('.btnComprar');

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartQuantity(productos[i]);
        totalCost(productos[i]);
    });
}

cartQtyNumber();
cartDisplay();
removeItem();
