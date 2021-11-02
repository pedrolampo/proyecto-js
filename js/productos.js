// Constructores de objetos para los productos
class Remeras {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.inCart = 0;
    }
}

class OtrosProductos {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.inCart = 0;
    }
}

// Productos Disponibles
let productos = [];

productos.push(new Remeras(1, 'Remera Sumo Negra', 650));
productos.push(new Remeras(2, 'Remera Sumo Blanca', 650));
productos.push(new Remeras(3, 'Remera After Chabón', 800));
productos.push(new Remeras(4, 'Remera Luca Azul', 800));
productos.push(new Remeras(5, 'Remera Luca Roja', 800));
productos.push(new Remeras(6, 'Buzo Sumo Negro', 1500));
productos.push(new OtrosProductos(7, 'Mochila Sumo Negra', 1400));
productos.push(new OtrosProductos(8, 'Reloj Pared Luca Prodan', 900));
productos.push(new OtrosProductos(9, 'Poster Luca Prodan', 600));
productos.push(new OtrosProductos(10, 'Taza Sumo', 450));
productos.push(new OtrosProductos(11, 'Taza Luca Prodan', 450));
productos.push(new OtrosProductos(12, 'Poster Sumo Rolling Stone', 650));
