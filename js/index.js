let cart = document.querySelectorAll('.btnComprar');

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartQuantity(productos[i]);
        totalCost(productos[i]);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
        });
    });
}

cartQtyNumber();
cartDisplay();
cartUpdate();
totalAmountUpdated();
