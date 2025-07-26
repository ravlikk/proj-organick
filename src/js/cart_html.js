import { loadCart, deleteQuantityOnServer } from "../js/universal/api";
import { root } from '../js/universal/root';


export function createCartItemHTML(product, quantity, cartItemId) {
  const priceAfterDiscount = product.price * (1 - product.discount / 100);

  console.log(cartItemId);

  return `
    <div class="cart-item" data-id="${product.id}" >
      <img src="${product.img}" class="cart-item__image" alt="${product.name}">
      <div class="cart-item__info">
        <div class="cart-item__text">
          <h2 class="cart-item__name">${product.name}</h2>
          <div class="cart-item__price">
            <span class="cart-item__old-price">$${product.price}.00</span>
            <span class="cart-item__new-price">$${priceAfterDiscount.toFixed(2)}</span>
          </div>
        </div>
        <div class="cart-item__quantity">
          <div class="cart-item__quantity-info">
            <p>Quantity:</p>
            <input 
              class="cart-item__quantity-num" 
              value="${quantity}" 
              type="number"
              min="1"
              " />
          </div>
          <button class="cart-item__remove" data-cart-id="${cartItemId}">×</button>
        </div>
      </div>
    </div>
  `;
}