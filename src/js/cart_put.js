import { updateQuantityOnServer } from "../js/universal/api";
import { root } from '../js/universal/root';
import { debounce } from 'lodash';

root.cartContent.addEventListener('input', debounce(async (e) => {
  const input = e.target.closest('.cart-item__quantity-num');
  if (!input) return;

  const quantity = input.value;
  const path = `/carts`;


  try {
    await updateQuantityOnServer(path, quantity);
    
  } catch (err) {
    console.error(err);
  }
}, 500));