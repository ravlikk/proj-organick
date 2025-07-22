import { updateQuantityOnServer, postToCart } from "../js/universal/api";
import { root } from '../js/universal/root';
import { updateTotals } from "../js/cart_update";
import { debounce } from 'lodash';

const currentPath = window.location.pathname;
const token = localStorage.getItem('token')
if (currentPath === '/cart.html') {
  root.cartContent.addEventListener('input', debounce(async (e) => {
    const input = e.target.closest('.cart-item__quantity-num');
    if (!input) return;
    
    const quantity = input.value;
    const path = `/carts`;

    try {
      await updateQuantityOnServer(path, quantity, token);
      updateTotals();
    } catch (err) {
      console.error(err);
    }
  }, 500));
}
