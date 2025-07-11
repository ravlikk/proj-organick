import { updateQuantityOnServer, postToCart } from "../js/universal/api";
import { root } from '../js/universal/root';
import axios from "axios";
import { debounce } from 'lodash';
export const url = "https://test-nest-api-iqy9.onrender.com/api";
export async function post() {
  const token = localStorage.getItem("token");


  try {
    await axios.post(
      `${url}/carts`,
      {
        products: [
          {
            id: 45,
            quantity: 3,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error.response) {
      console.error("Статус:", error.response.status);
      console.error("Дані помилки:", error.response.data);
    } else {
      console.error("Помилка:", error.message);
    }
  }
}
post();
export async function pos() {
  const token = localStorage.getItem("token");

  try {
    await axios.post(
      `${url}/carts`,
      {
        products: [
          {
            id: 49,
            quantity: 3,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error.response) {
      console.error("Статус:", error.response.status);
      console.error("Дані помилки:", error.response.data);
    } else {
      console.error("Помилка:", error.message);
    }
  }
}
pos();
const currentPath = window.location.pathname;
const token = localStorage.getItem('token')
if (currentPath === '/cart.html') {
  root.cartContent.addEventListener('input', debounce(async (e) => {
    const input = e.target.closest('.cart-item__quantity-num');
    if (!input) return;
    
    const quantity = input.value;
    const path = `/carts`;

    try {
      await updateQuantityOnServer(path, quantity, token);
    } catch (err) {
      console.error(err);
    }
  }, 500));
}
