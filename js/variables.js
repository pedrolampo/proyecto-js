// Menú de items
const menu = `Elija un producto, ingresando el número correspondiente: 
1. Remera Negra - $650
2. Remera Blanca - $650
3. Remera Azul - $800
4. Mochila Sumo - $1400
5. Taza Luca Prodan - $450
6. Salir
`;

// Constructor de los
class Productos {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

// Productos
const PRODUCTO1 = new Productos(1, 'Remera Negra', 650, 100);
const PRODUCTO2 = new Productos(2, 'Remera Blanca', 650, 90);
const PRODUCTO3 = new Productos(3, 'Remera Azul', 650, 35);
const PRODUCTO4 = new Productos(4, 'Mochila Sumo', 1400, 14);
const PRODUCTO5 = new Productos(5, 'Taza Luca Prodan', 450, 50);

const selectedQuantity = '¿Qué cantidad deseas?';

let cart = 0;

let answer = 'Si';
