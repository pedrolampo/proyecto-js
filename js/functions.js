// Función agregar al carrito y calcular costo
function addToCart(item, quantity) {
  switch (item) {
    case 1: // Remera Negra
      switch (talle) {
        case 'S': // Talle Small
          if (stockAmount(quantity, productos[0]['talleS'])) {
            cart += quantity * productos[0]['precio'];
            productos[0]['talleS'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;

        case 'M': // Talle Small
          if (stockAmount(quantity, productos[1]['talleM'])) {
            cart += quantity * productos[1]['precio'];
            productos[1]['talleM'] -= quantity;
            alert('Item agregado al carrito.');
          }
          break;
      }
      break;

    case 2:
      if (stockAmount(quantity, productos[1]['stock'])) {
        cart += quantity * productos[1]['precio'];
        productos[1]['stock'] -= quantity;
        size();
        alert('Item agregado al carrito.');
      }
      break;

    case 3:
      if (stockAmount(quantity, PRODUCTO3.stock)) {
        cart += quantity * PRODUCTO3.precio;
        PRODUCTO3.stock -= quantity;
        size();
        alert('Item agregado al carrito.');
      }
      break;

    case 4:
      if (stockAmount(quantity, PRODUCTO4.stock)) {
        cart += quantity * PRODUCTO4.precio;
        PRODUCTO4.stock -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 5:
      if (stockAmount(quantity, PRODUCTO5.stock)) {
        cart += quantity * PRODUCTO5.precio;
        PRODUCTO5.stock -= quantity;
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
