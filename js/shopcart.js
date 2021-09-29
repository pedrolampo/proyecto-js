class hola {
    constructor(id, nombre, precio, talleS, talleM, talleL, talleXL) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.talleS = talleS;
        this.talleM = talleM;
        this.talleL = talleL;
        this.talleXL = talleXL;
    }
}

let test1 = [];

test1.push(new hola(prompt('hola'), 'Remera Negra', 650, 20, 20, 20, 10));
test1.push(new hola(prompt('hola'), 'Remera Blanca', 650, 40, 30, 40, 20));
test1.push(new hola(prompt('hola'), 'Remera Azul', 650, 15, 33, 25, 10));

console.log(test1);

let carrito = document.getElementById('compras');

for (const producto of test1) {
    let item = document.createElement('div');
    item.innerHTML = `<p class="item">${producto.nombre}</p>`;
    carrito.appendChild(item);
}

for (const producto of test1) {
    let item = document.createElement('div');
    item.innerHTML = `<p class="cantidad">Cantidad: ${producto.id}</p>`;
    carrito.appendChild(item);
}
