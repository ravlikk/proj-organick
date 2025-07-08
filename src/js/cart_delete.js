import { root } from '../js/universal/root';
import { deleteQuantityOnServer } from "../js/universal/api"; 


root.cartButton.addEventListener('click', () => {

    setTimeout(() => {
    root.deleteButton.addEventListener('click', async (e) => {

  if (e.target.classList.contains('cart-item')) {
    const cartItemId = e.target.dataset.cartId;

    if (!cartItemId) {
      console.warn('Відсутній cartItemId');
      return;
    }

    try {
      const path = `/carts/${cartItemId}`;
      await deleteQuantityOnServer(path);

      e.target.closest('.cart-item').remove();

    } catch (err) {
      console.error('Помилка при видаленні товару:', err);
    }
  }
});
  }, 2000);

});