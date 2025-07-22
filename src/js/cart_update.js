

export function updateTotals(productArray) {
  const totalDiscount = productArray.reduce((sum, product) =>
    sum + (product.price * (product.discount / 100) * product.quantity), 0);

  const rawTotalPrice = productArray.reduce((sum, product) =>
    sum + (product.price * product.quantity), 0);

  const totalPrice = rawTotalPrice - totalDiscount;

  document.querySelector('.cart-item__summary-price').textContent = `${totalPrice.toFixed(2)}$`;
  document.querySelector('.cart-item__summary-dis').textContent = `${totalDiscount.toFixed(2)}$`;
}


