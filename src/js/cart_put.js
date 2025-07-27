import { updateQuantityOnServer, postToCart } from "../js/universal/api";
import { root } from '../js/universal/root';
import { updateTotals } from "../js/cart_update";
import { debounce } from 'lodash';
import { cartProducts } from './cart_load-data';

const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (currentPath === '/cart.html') {
  root.cartContent.addEventListener('input', debounce(async (e) => {
    const cart = e.target.closest('.cart-item');
    const input = e.target.closest('.cart-item__quantity-num');
    if (!cart || !input) return;

    const quantity = Number(input.value);
    const cartItemId = Number(cart.dataset.id); 
    const path = `/carts`; 

    try {
      await updateQuantityOnServer(path, quantity, token, cartItemId);

      const index = cartProducts.findIndex(p => p.id === cartItemId);
      if (index !== -1) {
        cartProducts[index].quantity = quantity;
      }

      updateTotals(cartProducts);
      location.reload();
    } catch (err) {
      console.error(err);
    }
  }, 500));
}
