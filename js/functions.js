// Función agregar al carrito y calcular costo
function addToCart(item, quantity) {
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
      if (stockAmount(quantity, productos[4]['stock'])) {
        cart += quantity * productos[4]['precio'];
        productos[4]['stock'] -= quantity;
        alert('Item agregado al carrito.');
      }
      break;

    case 5:
      if (stockAmount(quantity, productos[5]['stock'])) {
        cart += quantity * productos[5]['stock'];
        productos[5]['stock'] -= quantity;
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
