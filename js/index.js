alert('¡Bienvenido a la tienda de Sumo!');

do {
  let item = parseInt(prompt(menu));
  if (item === 6) {
    break;
  }

  let talle = prompt(talles);

  let quantity = parseInt(prompt(selectedQuantity));

  addToCart(item, quantity);

  answer = prompt('¿Desea agregar algo más al carrito? Si/No');
} while (answer === 'Si' || answer === 'si' || answer === 'SI');

if (cart > 0) {
  alert(`Su compra tiene un total de $${cart}.`);
}

alert('¡Gracias por su visita!');
