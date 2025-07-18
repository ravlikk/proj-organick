import { loadCartDinamic } from "../js/universal/api";
import { root } from '../js/universal/root';
import { openMenu } from '../js/modal_header';

export async function  cartDinamic() {
const token = localStorage.getItem('token');
if(token){
    const path = `/carts`;
const data = await loadCartDinamic(path, token);
if(!data){
    root.modal.classList.add('active');
}
let length = data.products.length
root.cartNum.textContent = length;
};
}

cartDinamic();