import { updateQuantityOnServer } from "../js/universal/api";
import { root } from '../js/universal/root';
import { debounce } from 'lodash';

const currentPath = window.location.pathname;

if (currentPath === '/cart.html') {
  root.cartContent.addEventListener('input', debounce(async (e) => {
    const input = e.target.closest('.cart-item__quantity-num');
    if (!input) return;

    const quantity = input.value;
    const path = `/carts`;
    const cartItemId = input.dataset.cartId;

    try {
      await updateQuantityOnServer(path, quantity, cartItemId);
    } catch (err) {
      console.error('Помилка оновлення кількості:', err);
    }
  }, 500));
}
