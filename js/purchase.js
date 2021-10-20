let btnComprar = document.getElementsByClassName('comprar')[0];

function comprar() {
    btnComprar.addEventListener('click', function () {
        if (
            localStorage.getItem('productsInCart') &&
            Object.keys(JSON.parse(localStorage.getItem('productsInCart'))) !=
                'undefined'
        ) {
            document.getElementsByClassName('carritoProductos')[0].remove();
            localStorage.clear();
            updateQtyDisplay();
        } else {
            return;
        }
    });
}
function disableButton() {
    if (
        localStorage.getItem('productsInCart') &&
        Object.keys(JSON.parse(localStorage.getItem('productsInCart'))) !=
            'undefined'
    ) {
        return;
    } else {
        btnComprar.disabled = true;
    }
}

comprar();
disableButton();
