import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 
import { updateTotals } from "../js/cart_update";


function gatherProductsFromDOM() {
  const items = root.cartContent.querySelectorAll('.cart-item');
  const products = [];

  items.forEach(item => {
    const priceOldText = item.querySelector('.cart-item__old-price')?.textContent || "$0";
    const priceOld = parseFloat(priceOldText.replace('$', '')) || 0;

    const discountText = item.querySelector('.cart-item__new-price')?.textContent || "$0";
    const priceAfterDiscount = parseFloat(discountText.replace('$', '')) || 0;
 
    let discount = 0;
    if (priceOld > 0) {
      discount = ((priceOld - priceAfterDiscount) / priceOld) * 100;
    }

    const quantityInput = item.querySelector('.cart-item__quantity-num');
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    products.push({
      price: priceOld,
      discount: discount,
      quantity: quantity
    });
  });

  return products;
}

const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (currentPath === '/cart.html' && root.cartContent) {
  root.cartContent.addEventListener('click', async (e) => {
    const deleteButton = e.target.closest('.cart-item__remove');
    if (!deleteButton) return;

    const cartId = deleteButton.dataset.cartId;
    if (!cartId) return;
    try {
      const path = `/carts/${cartId}`;
      await deleteQuantityOnServer(path, token);
      const cartItem = deleteButton.closest('.cart-item');
      cartItem.remove();

      const remainingItems = root.cartContent.querySelectorAll('.cart-item');

      if (remainingItems.length === 0) {
        root.cartContent.innerHTML = `
          <div class="cart-empty">
            <p>Your cart is empty.</p>
          </div>`;
        
      } else {
        const currentProducts = gatherProductsFromDOM();
        updateTotals(currentProducts);
      }

    } catch (err) {
      if (err.response?.status === 401) {
        alert('Session expired. Please log in again.');
        if (typeof openModal === "function") openModal();
      } else {
        console.error('Помилка при видаленні товару:', err);
      }
    }
  });
}
