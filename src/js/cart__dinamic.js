import { loadCartDinamic } from "../js/universal/api";
import { root } from '../js/universal/root';

export async function  cartDinamic() {
const token = localStorage.getItem('token');
const path = `/carts`;
const data = await loadCartDinamic(path, token);
let length = data.products.length
root.cartNum.textContent = length;
};
cartDinamic();