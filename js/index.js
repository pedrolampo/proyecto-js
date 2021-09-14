// Menú de items
const menu = `Elige un producto: 
1. Remera Negra
2. Remera Blanca
3. Remera Azul
4. Mochila Sumo
5. Taza Luca Prodan
6. Salir
`;

// Stock
let item1Stock = 100;
let item2Stock = 90;
let item3Stock = 35;
let item4Stock = 14;
let item5Stock = 50;

// Listado de precios
const item1Price = 650;
const item2Price = 650;
const item3Price = 800;
const item4Price = 1400;
const item5Price = 450;

const selectedQuantity = '¿Qué cantidad deseas?';

let cart = 0;

let answer = 'Si';

// Verifica si hay stock suficiente
const stockAmount = (quantity, stock) => {
  if (quantity > stock) {
    alert(`Stock disponible del item seleccionado: ${stock}.`);
    return false;
  } else {
    return true;
  }
};

// Función agregar al carrito y calcular costo
function addToCart(item, quantity) {
  switch (item) {
    case 1:
      if (stockAmount(quantity, item1Stock)) {
        cart += quantity * item1Price;
        item1Stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 2:
      if (stockAmount(quantity, item2Stock)) {
        cart += quantity * item2Price;
        item2Stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 3:
      if (stockAmount(quantity, item3Stock)) {
        cart += quantity * item3Price;
        item3Stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 4:
      if (stockAmount(quantity, item4Stock)) {
        cart += quantity * item4Price;
        item4Stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 5:
      if (stockAmount(quantity, item5Stock)) {
        cart += quantity * item5Price;
        item5Stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    default:
      alert('Por favor elija una opción válida.');
  }
}

alert('¡Bienvenido a la tienda de Sumo!');

do {
  let item = parseInt(prompt(menu));
  if (item === 6) {
    break;
  }

  let quantity = parseInt(prompt(selectedQuantity));

  addToCart(item, quantity);

  answer = prompt('¿Desea agregar algo más al carrito? Si/No');
} while (answer === 'Si');

if (cart > 0) {
  alert(`Su compra tiene un total de $${cart}.`);
}

alert('¡Gracias por su visita!');
