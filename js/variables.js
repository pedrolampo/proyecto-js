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

// Productos
let productos = [];

productos.push(new Remeras(1, 'Remera Negra', 650, 20, 20, 20, 10));
productos.push(new Remeras(2, 'Remera Blanca', 650, 40, 30, 40, 20));
productos.push(new Remeras(3, 'Remera Azul', 650, 15, 33, 25, 10));
productos.push(new OtrosProductos(4, 'Mochila Sumo', 1400, 14));
productos.push(new OtrosProductos(5, 'Taza Luca Prodan', 450, 50));
