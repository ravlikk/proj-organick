import { loadCart, deleteQuantityOnServer } from "../js/universal/api";
import { root } from '../js/universal/root';
import { updateTotals } from "../js/cart_update";
import { createCartItemHTML } from "../js/cart_html";

export let cartProducts = [];

export async function loadCartData(pathToGetCart, token) {
  try {
    const response = await loadCart(pathToGetCart, token);

    if (!response || !Array.isArray(response.products) || response.products.length === 0) {
      root.cartContent.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      `;
      return;
    }

    const cartItems = response.products;

    cartProducts = [];
    let allItemsHTML = '';

    for (let index = 0; index < cartItems.length; index++) {
      const item = cartItems[index];
      const product = item.product;
      const quantity = item.quantity;
      const cartItemId = item.id;

      cartProducts.push({
        price: product.price,
        discount: product.discount,
        quantity
      });

      allItemsHTML += createCartItemHTML(product, quantity, cartItemId);
      console.log(cartItemId);
    }

    allItemsHTML += `
      <div class="cart-item__summary">
        <p>Total Cost <span class="cart-item__summary-price"></span></p>
        <p>Discount <span class="cart-item__summary-dis"></span></p>
      </div>
      <div class="cart-item__order-cont">
        <button class="cart-item__order">
          <p>To order</p>
          <svg class="cart-item__order-icon">
            <use xlink:href="../image/symbol-defs.svg#icon-Aerrow"></use>
          </svg>
        </button>
      </div>
    `;

    root.cartContent.innerHTML = allItemsHTML;
    
    updateTotals(cartProducts);

  } catch (error) {
    if (error.response?.status === 401) {
      alert('Session expired. Please log in again.');
      if (typeof openModal === "function") openModal();
    } else {
      console.error("Помилка завантаження корзини:", error);
    }
  }
}
