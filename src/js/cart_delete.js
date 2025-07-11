import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 
import { cartDinamic } from "../js/cart__dinamic"; 
import { products } from "../js/cart_load"; 

const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (currentPath === '/cart.html') {
  root.cartContent.addEventListener('click', async (e) => {
      const deleteButton = e.target.closest('.cart-item__remove');
      if (!deleteButton) return;

      const cartId = deleteButton.dataset.cartId;
      if (!cartId) return;

      try {
        const path = `/carts/${cartId}`;
        await deleteQuantityOnServer(path, token);

        deleteButton.closest('.cart-item').remove();

        await loadCartData();

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
