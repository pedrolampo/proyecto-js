// Función agregar al carrito y calcular costo
function addToCart(item, quantity) {
  switch (item) {
    case 1:
      if (stockAmount(quantity, PRODUCTO1.stock)) {
        cart += quantity * PRODUCTO1.precio;
        PRODUCTO1.stock -= quantity;
        size();
        alert('Item agregado al carrito.');
      }
      break;

    case 2:
      if (stockAmount(quantity, PRODUCTO2.stock)) {
        cart += quantity * PRODUCTO2.precio;
        PRODUCTO2.stock -= quantity;
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

const size = () => {
  prompt(`¿Qué talle quisiera?
  Small
  Medium
  Large
  ExtraLarge`);
};
