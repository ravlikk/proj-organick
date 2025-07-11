import { loadCart } from "../js/universal/api";
import { root } from '../js/universal/root';

const pathToGetCart = '/products/';
const currentPath = window.location.pathname;
const token = localStorage.getItem('token')
if (currentPath === '/cart.html') {
  const token = localStorage.getItem('token');

if (!token) {
 
}

  if (!token) {
    window.location.href = '/';
    const mainPath = window.location.pathname;
    if(mainPath === "/"){
      event.pri
      root.modal.classList.add('active');
    }
  } else {
    loadCartData();
  }
}

async function loadTotal(){
  const products = await loadCart(pathToGetCart, token);
    const productArray = products.data;

  const totalDiscount = productArray.reduce((sum, product) =>
      sum + product.price * (product.discount / 100), 0);

    const totalPrice = productArray.reduce((sum, product) =>
      sum + product.price, 0);

    document.querySelector('.cart-item__summary-price').textContent = totalPrice;
  document.querySelector('.cart-item__summary-dis').textContent = totalDiscount;

     
}


async function loadCartData() {
  try {
    const products = await loadCart(pathToGetCart, token);
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
              <button class="cart-item__remove" id="${index}">×</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    root.cartContent.innerHTML += `
      <div class="cart-item__summary">
        <p>Total Cost <span class="cart-item__summary-price">${totalPrice}$</span></p>
        <p>Discount <span class="cart-item__summary-dis">${totalDiscount}$</span></p>
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

root.cartContent.addEventListener('click', () => {
        loadTotal(productArray);
      });
  } catch (error) {
    console.error("Помилка завантаження корзини:", error);
  }
}
