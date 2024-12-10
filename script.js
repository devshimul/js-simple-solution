/**
 * First100Price = 100
 * Second100Price = 90
 * Above200Price = 70
 */

function layeredQuantityPrice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const totalPrice = quantity * first100Price;
    return totalPrice;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingQuantityTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingQuantityTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingQuantityTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingQuantityTotal;
    return total;
  }
}

const totalPrice = layeredQuantityPrice(201);
console.log(totalPrice);
