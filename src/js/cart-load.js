import axios from 'axios';
import { root } from '../js/universal/root';
import {  } from "module";


root.cartButton.addEventListener('click', () => {
 
const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (isAuthenticated === 'false') {
    root.modal.classList.add('active');
    
  }

  function runCodeAfterRegistration(){
  async function cartLoad() {
    try {
      const res = await axios.get("https://test-nest-api-iqy9.onrender.com/api/carts");

      if (!res) {
        const cartRes = res.data;
        root.cartContent.innerHTML = '';

        const html = `
          
        `;
        container.insertAdjacentHTML('beforeend', html);
         window.location.href = '../../html/universal/cart.html';
      } else {
        root.cartContent.innerHTML = '';

        const html = `
          <p>Cart is empty</p>
        `;
        root.cartContent.insertAdjacentHTML('beforeend', html);
      }
    } catch(err){
     console.error('Помилка запиту:', err.message);
}
}
  }
  cartLoad();
});
