const agregarCarrito = () => {
    carrito.push(productos[0]);
    console.log(carrito);
};

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');
let item10 = document.getElementById('item10');
let item11 = document.getElementById('item11');
let item12 = document.getElementById('item12');

item1.addEventListener('click', agregarCarrito);
item2.addEventListener('click', agregarCarrito);
item3.addEventListener('click', agregarCarrito);
item4.addEventListener('click', agregarCarrito);
item5.addEventListener('click', agregarCarrito);
item6.addEventListener('click', agregarCarrito);
item7.addEventListener('click', agregarCarrito);
item8.addEventListener('click', agregarCarrito);
item9.addEventListener('click', agregarCarrito);
item10.addEventListener('click', agregarCarrito);
item11.addEventListener('click', agregarCarrito);
item12.addEventListener('click', agregarCarrito);
