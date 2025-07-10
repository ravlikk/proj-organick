import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 

const currentPath = window.location.pathname;

if (currentPath === '/cart.html') {
  document.addEventListener('DOMContentLoaded', () => {
    root.cartContent.addEventListener('click', async (e) => {
      const removeBtn = e.target.closest('.cart-item__remove');
      if (!removeBtn) return;

      const cartItemId = removeBtn.dataset.cartId;

      try {
        const path = `/carts/${cartItemId}`;
        await deleteQuantityOnServer(path);
        removeBtn.closest('.cart-item').remove();
      } catch (err) {
        console.error('Помилка при видаленні товару:', err);
      }
    });
  });
}
