import { loadCartData } from "../js/cart_load-data";
import { updateTotals } from "../js/cart_update";
import { createCartItemHTML } from "../js/cart_html";
import { root } from '../js/universal/root';

export let products = [];

const pathToGetCart = '/carts';
const currentPath = window.location.pathname;
const token = localStorage.getItem('token');


if (!token) {
    root.cartButton.addEventListener("click", function(e) {
    e.preventDefault();
    
  root.modal.classList.remove('modal-hide');
  
  root.modal.style.display = 'block';
  root.overlay.style.display = 'block';
  document.body.classList.add('no-scroll');

  root.modal.classList.add('modal-show');

  });

}

if (currentPath === '/cart.html') {

  loadCartData(pathToGetCart, token);
}

