let cart = document.querySelectorAll('.btnComprar');

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartQuantity();
    });
}

const cartQuantity = () => {
    let itemQuantity = localStorage.getItem('cartQuantity');
    itemQuantity = parseInt(itemQuantity);
    console.log(typeof itemQuantity);
    localStorage.setItem('cartQuantity', 1);
};
