import { loadCartDinamic } from "../js/universal/api";
import { root } from '../js/universal/root';

export async function cartDinamic() {
  const token = localStorage.getItem('token');
  if (token) {
    const path = `/carts`;
    const data = await loadCartDinamic(path, token);

    if (!data) {
      root.modal.classList.add('active');
      return;
    }

    const length = data.products.length;
    root.cartNum.textContent = length;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  cartDinamic();
});



