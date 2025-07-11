import { loadCart } from "../js/universal/api";
import { root } from '../js/universal/root';

export let products;
localStorage.clear();
const pathToGetCart = '/carts';
const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (!token) {
      root.modal.classList.add('active');
  }

if (currentPath === '/cart.html') {
    loadCartData();
  }

function updateTotals(productArray) {
  const totalDiscount = productArray.reduce((sum, product) =>
    sum + product.price * (product.discount / 100), 0);

  const totalPrice = productArray.reduce((sum, product) =>
    sum + product.price, 0);

  document.querySelector('.cart-item__summary-price').textContent = `${totalPrice}$`;
  document.querySelector('.cart-item__summary-dis').textContent = `${totalDiscount}$`;
}

async function loadCartData() {
  try {
    const res = await loadCart(pathToGetCart, token);

    if (!res?.data || !Array.isArray(res.data) || res.data.length === 0) {
      root.cartContent.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty.</p>
        </div>`;
      return;
    }

    const productArray = res.data;
    products = productArray;

    root.cartContent.innerHTML = productArray.map((product, index) => {
      const priceAfterDiscount = product.price * (1 - product.discount / 100);
      const cartItemId = product.cartItemId;

      return `
        <div class="cart-item" data-cart-id="${cartItemId}">
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

    updateTotals(productArray);

    root.cartContent.addEventListener('click', async (e) => {
      const deleteButton = e.target.closest('.cart-item__remove');
      if (!deleteButton) return;

      const cartId = deleteButton.dataset.cartId;
      if (!cartId) return;

      try {
        const path = `/carts/${cartId}`;
        await deleteQuantityOnServer(path, token);

        const cartItem = deleteButton.closest('.cart-item');
        cartItem.remove();

        const updatedProducts = products.filter(p => p.cartItemId != cartId);
        products = updatedProducts;
        updateTotals(products);
      } catch (err) {
        if (err.response?.status === 401) {
          alert('Session end. Relogin please.');
          openModal(); 
        } else {
          console.error(err);
        }
      }
    });

  } catch (error) {
    if (error.response?.status === 401) {
      alert('Session end. Relogin please.');
      openModal();
    } else {
      console.error(error);
    }
  }
}
