function comprar() {
    let btnComprar = document.getElementsByClassName('comprar')[0];
    btnComprar.addEventListener('click', function () {
        let cart = JSON.parse(localStorage.getItem('productsInCart'));
        if (Object.keys(cart).length) {
            document.getElementsByClassName('carritoProductos')[0].remove();
            localStorage.clear();
            updateQtyDisplay();
        } else {
            Swal.fire('Parece que tu carrito está vacío', '', 'question');
        }
    });
}

comprar();
