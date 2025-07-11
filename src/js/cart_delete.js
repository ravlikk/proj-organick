import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 
import { cartDinamic } from "../js/cart__dinamic"; 
import { products } from "../js/cart_load"; 

const currentPath = window.location.pathname;

if (currentPath === '/cart.html') {
  document.addEventListener('DOMContentLoaded', () => {
    root.cartContent.addEventListener('click', async (e) => {
      const token = localStorage.getItem('token');

      const deleteButton = e.target.closest('.cart-item__remove');
      if (!deleteButton) return;

      cartDinamic();

      let cartItemId = deleteButton.id;
      const product = products[cartItemId].id;
      

      console.log(`Видалення товару: cartItemId = ${cartItemId}, id = ${product}`);

      try {
        const path = `/carts/${product}`;
        await deleteQuantityOnServer(path, token);
        deleteButton.closest('.cart-item').remove();
      } catch (err) {
        console.error('Помилка при видаленні товару:', err);
      }
    });
  });
}
