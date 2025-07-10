import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 

const currentPath = window.location.pathname;

if (currentPath === '/cart.html') {
  document.addEventListener('DOMContentLoaded', () => {
    root.cartContent.addEventListener('click', async (e) => {
      const token = localStorage.getItem('token');
      const deleteButton = document.querySelector('.cart-item__remove')
      console.log(deleteButton);
      const cartItemId = deleteButton.id;
      
      try {
        const path = `/carts/${cartItemId}`;
        await deleteQuantityOnServer(path, token);
        removeBtn.closest('.cart-item').remove();
      } catch (err) {
        console.error('Помилка при видаленні товару:', err);
      }
    });
  });
}
