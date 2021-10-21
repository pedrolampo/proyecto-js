// Variables llamando a los botones e inputs de los form de pago
let btnComprar = document.getElementsByClassName('comprar')[0];
let btnContinuarCompra = document.getElementById('continuarCompra');
let btnValidate = document.getElementById('validarDatos');
let btnFinalizarCompra = document.getElementById('finalizarCompra');
let buyer = document.getElementsByClassName('comprador');
let cardInfo = document.getElementsByClassName('tarjeta');

btnFinalizarCompra.disabled = true;

const notNull = (element) => element == '';

// Desabilita el botón de comprar si no hay nada en el carrito
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

// Guarda la info del comprador en el session storage, si deja un campo vacío no se genera
function storeUserInfo() {
    btnContinuarCompra.addEventListener('click', function () {
        buyersInfo = [].map.call(buyer, function (input) {
            return input.value;
        });
        if (buyersInfo.some(notNull)) {
            return false;
        } else {
            sessionStorage.setItem('buyerInfo', JSON.stringify(buyersInfo));
        }
    });
}

// Guarda la info de la tarjeta en el session storage, si deja un campo vacío no se genera
function storePaymentInfo() {
    btnValidate.addEventListener('click', function () {
        paymentInfo = [].map.call(cardInfo, function (input) {
            return input.value;
        });
        if (paymentInfo.some(notNull)) {
            return;
        } else {
            sessionStorage.setItem('cardInfo', JSON.stringify(paymentInfo));
            btnFinalizarCompra.disabled = false;
        }
    });
}

// Verifica si se rellenaron bien todos los datos, de ser positivo efectúa la 'compra'
function purchase() {
    btnFinalizarCompra.addEventListener('click', function () {
        let buyerInfo = sessionStorage.getItem('buyerInfo');
        let cardInfo = sessionStorage.getItem('cardInfo');
        if (buyerInfo && cardInfo) {
            let buyerInfo = JSON.parse(sessionStorage.getItem('buyerInfo'));
            let cardInfo = JSON.parse(sessionStorage.getItem('cardInfo'));
            let fullInfo = [buyerInfo, cardInfo];
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: fullInfo,
            }).then(function (response) {
                if (response.ok) {
                    document
                        .getElementsByClassName('carritoProductos')[0]
                        .remove();
                    localStorage.clear();
                    Swal.fire({
                        title: '¡Muchas gracias por tu compra!',
                        text: 'Para más información sobre el envío y la factura, revisá tú email!',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#3085d6',
                        allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                } else {
                    Swal.fire(
                        'Al parecer estamos teniendo problemas con el servidor, por favor vuelve a intentarlo más tarde.'
                    );
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Al parecer te has dejado un campo sin rellenar en la sección de información personal.',
                footer: 'Por favor, vuelve a intentarlo',
            });
        }
    });
}

disableButton();
storeUserInfo();
storePaymentInfo();
purchase();
