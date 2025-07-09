import { loadCart } from "../js/universal/api";
import { root } from '../js/universal/root';

root.cartButton.addEventListener('click', async (e) => {
  
  e.preventDefault();
  
  const pathToGetCart = '/products/';
  const token = localStorage.getItem('token');
  console.log("ready");
  
  if (!token) {
    root.modal.classList.add('active');
    return;
  }

  try {
    
    const products = await loadCart(pathToGetCart);
    const productArray = products.data;

    const totalDiscount = productArray.reduce((sum, product) =>
      sum + product.price * (product.discount / 100), 0);

    const totalPrice = productArray.reduce((sum, product) =>
      sum + product.price, 0);

    root.cartContent.innerHTML = productArray.map((product, index) => {
      const priceAfterDiscount = product.price * (1 - product.discount / 100);
      const cartItemId = product.cartItemId;

      return `
        <div class="cart-item" id="cartItem-${index}">
          <img src="${product.img}" class="cart-item__image">

          <div class="cart-item__info">
            <div class="cart-item__text">
              <h2 class="cart-item__name">${product.name}</h2>
              <div class="cart-item__price">
                <span class="cart-item__old-price">$${product.price}.00</span>
                <span class="cart-item__new-price">$${priceAfterDiscount}.00</span>
              </div>
            </div>
            <div class="cart-item__quantity">
              <div class="cart-item__quantity-info">
                <p>Quantity:</p>
                <input 
                  class="cart-item__quantity-num" 
                  value="1" 
                  type="number"
                  data-product-id="${product.id}"
                  data-cart-id="${cartItemId}" />
              </div>
              <button class="cart-item__remove" data-cart-id="${cartItemId}">×</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    root.cartContent.innerHTML += `
      <div class="cart-item__summary">
        <p>Total Cost <span>${totalPrice}$</span></p>
        <p>Discount <span>${totalDiscount}$</span></p>
      </div>
    `;
    
    console.log("ready");

  } catch (error) {
    console.error("Помилка завантаження корзини:", error);
  }
});
