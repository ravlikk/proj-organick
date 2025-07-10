import { root } from '../js/universal/root';


  root.cartContent.addEventListener('click', async (e) => {
    const orderButton = e.target.closest('.cart-item__order');
    if (!orderButton) return;

    root.cartContent.insertAdjacentHTML('beforeend', `
        <div class="cart__registr-conteiner">
        <div class="cart__registr-cont">
      <div class="cart__registr">
        <p>*Full name*</p>
        <input class="cart__registr-item" required>
      </div>

      <div class="cart__registr">
        <p>*Your Email*</p>
        <input  class="cart__registr-item" required>
      </div>

      <div class="cart__registr">
        <p>*Address*</p>
        <input  class="cart__registr-item" required>
      </div>

      <div class="cart__registr">
        <p>*Phone number*</p>
        <input  class="cart__registr-item" required>
      </div>

     
      </div>
       <div class="cart__messege">
        <p>*Message*</p>
        <input  id="massege" required>
      </div>
        <button class="cart-item__order-but" >
      <p>Order</p>
      </button>
      </div>
    `);
     orderButton.style.display = 'none';
    });
