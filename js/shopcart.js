let carrito = document.getElementById('compras');

for (const producto of productos) {
    let item = document.createElement('div');
    item.innerHTML = `<p class="item">${producto.nombre}</p>`;
    carrito.appendChild(item);
}
