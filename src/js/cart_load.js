import { loadCartData } from "../js/cart_load-data";
import { updateTotals } from "../js/cart_update";
import { createCartItemHTML } from "../js/cart_html";
import { root } from '../js/universal/root';

export let products = [];

const pathToGetCart = '/carts';
const currentPath = window.location.pathname;
const token = localStorage.getItem('token');

if (!token && currentPath === '/cart.html') {
  root.modal.classList.add('active');
}

if (currentPath === '/cart.html') {
  loadCartData(pathToGetCart, token);
}



