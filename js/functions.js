// Función agregar al carrito y calcular costo
function addToCart(item, talle, quantity) {
  switch (item) {
    case 1:
      switch (talle) {
        case 'S':
          if (stockAmount(quantity, productos[0]['talleS'])) {
            cart += quantity * productos[0]['precio'];
            productos[0]['talleS'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'M':
          if (stockAmount(quantity, productos[0]['talleM'])) {
            cart += quantity * productos[0]['precio'];
            productos[0]['talleM'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'L':
          if (stockAmount(quantity, productos[0]['talleL'])) {
            cart += quantity * productos[0]['precio'];
            productos[0]['talleL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'XL':
          if (stockAmount(quantity, productos[0]['talleXL'])) {
            cart += quantity * productos[0]['precio'];
            productos[0]['talleXL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;
      }
      break;

    case 2:
      switch (talle) {
        case 'S':
          if (stockAmount(quantity, productos[1]['talleS'])) {
            cart += quantity * productos[1]['precio'];
            productos[1]['talleS'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'M':
          if (stockAmount(quantity, productos[1]['talleM'])) {
            cart += quantity * productos[1]['precio'];
            productos[1]['talleM'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'L':
          if (stockAmount(quantity, productos[1]['talleL'])) {
            cart += quantity * productos[1]['precio'];
            productos[1]['talleL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'XL':
          if (stockAmount(quantity, productos[1]['talleXL'])) {
            cart += quantity * productos[1]['precio'];
            productos[1]['talleXL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;
      }
      break;

    case 3:
      switch (talle) {
        case 'S':
          if (stockAmount(quantity, productos[2]['talleS'])) {
            cart += quantity * productos[2]['precio'];
            productos[2]['talleS'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'M':
          if (stockAmount(quantity, productos[2]['talleM'])) {
            cart += quantity * productos[2]['precio'];
            productos[2]['talleM'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'L':
          if (stockAmount(quantity, productos[2]['talleL'])) {
            cart += quantity * productos[2]['precio'];
            productos[2]['talleL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'XL':
          if (stockAmount(quantity, productos[2]['talleXL'])) {
            cart += quantity * productos[2]['precio'];
            productos[2]['talleXL'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;
      }
      break;

    case 4:
      if (stockAmount(quantity, productos[3]['stock'])) {
        cart += quantity * productos[3]['precio'];
        productos[3]['stock'] -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 5:
      if (stockAmount(quantity, productos[4]['stock'])) {
        cart += quantity * productos[4]['stock'];
        productos[4]['stock'] -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    default:
      alert('Por favor elija una opción válida.');
  }
}

// Verifica si hay stock suficiente
const stockAmount = (quantity, stock) => {
  if (quantity > stock) {
    alert(`Stock disponible del item seleccionado: ${stock}.`);
    return false;
  } else {
    return true;
  }
};

// const size = () => {
//   prompt(`¿Qué talle quisiera?
//     S - Small
//     M - Medium
//     L - Large
//     XL - ExtraLarge`);
// };
