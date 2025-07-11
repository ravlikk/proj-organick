import { loadCart, getProductById, deleteQuantityOnServer } from "../js/universal/api";
import { root } from '../js/universal/root';

export let products = [];

const pathToGetCart = '/carts';
const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (!token && currentPath === '/cart.html') {
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

    if ( res.data.length === 0) {
      root.cartContent.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty.</p>
        </div>`;
      return;
    }

    const cartItems = res.data;

    const productArray = await Promise.all(cartItems.map(async (item) => {
      const product = await getProductById(item.id, token);
      return {
        ...product,
        cartItemId: item.cartItemId
      };
    }));

    products = productArray;

    root.cartContent.innerHTML = productArray.map((product) => {
      const priceAfterDiscount = product.price * (1 - product.discount / 100);

      return `
        <div class="cart-item" data-cart-id="${product.cartItemId}">
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
                  data-cart-id="${product.cartItemId}" />
              </div>
              <button class="cart-item__remove" data-cart-id="${product.cartItemId}">×</button>
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

    updateTotals(products);

    root.cartContent.addEventListener('click', async (e) => {
      const deleteButton = e.target.closest('.cart-item__remove');
      if (!deleteButton) return;

      const cartId = deleteButton.dataset.cartId;
      if (!cartId) return;

      try {
        const path = `/carts/${cartId}`;
        await deleteQuantityOnServer(path, token);

        deleteButton.closest('.cart-item').remove();

        products = products.filter(p => p.cartItemId != cartId);
        updateTotals(products);

      } catch (err) {
        if (err.response?.status === 401) {
          alert('Session expired. Please log in again.');
          if (typeof openModal === "function") openModal();
        } else {
          console.error('Помилка при видаленні товару:', err);
        }
      }
    });

  } catch (error) {
    if (error.response?.status === 401) {
      alert('Session expired. Please log in again.');
      if (typeof openModal === "function") openModal();
    } else {
      console.error("Помилка завантаження корзини:", error);
    }
  }
}
