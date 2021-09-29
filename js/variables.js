// Menú de items
const menu = `Elija un producto, ingresando el número correspondiente: 
1. Remera Negra - $650
2. Remera Blanca - $650
3. Remera Azul - $800
4. Mochila Sumo - $1400
5. Taza Luca Prodan - $450
6. Salir
`;

const talles = `¿Qué talle quisiera?
S - Small
M - Medium
L - Large
XL - ExtraLarge`;

const selectedQuantity = '¿Qué cantidad deseas?';

let cart = 0;

let answer = 'Si';

// Carrito
let carrito = [];

// Constructores de objetos para los productos
class Remeras {
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

class OtrosProductos {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// Productos Disponibles
let productos = [];

productos.push(new Remeras(1, 'Remera Sumo Negra', 650, 20, 20, 20, 10));
productos.push(new Remeras(2, 'Remera Sumo Blanca', 650, 40, 30, 40, 20));
productos.push(new Remeras(3, 'Remera After Chabón', 800, 30, 35, 50, 10, 9));
productos.push(new Remeras(4, 'Remera Luca Azul', 800, 15, 33, 25, 10));
productos.push(new Remeras(5, 'Remera Luca Roja', 800, 30, 30, 15, 12));
productos.push(new Remeras(6, 'Buzo Sumo Negro', 1500, 30, 40, 45, 18));
productos.push(new OtrosProductos(7, 'Mochila Sumo Negra', 1400, 14));
productos.push(new OtrosProductos(8, 'Reloj Pared Luca Prodan', 900, 35));
productos.push(new OtrosProductos(9, 'Poster Luca Prodan', 600, 90));
productos.push(new OtrosProductos(10, 'Taza Sumo', 450, 55));
productos.push(new OtrosProductos(11, 'Taza Luca Prodan', 450, 50));
productos.push(new OtrosProductos(12, 'Poster Sumo Rolling Stone', 650, 33));
