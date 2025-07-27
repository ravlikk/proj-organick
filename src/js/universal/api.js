import axios from "axios";
import { createCards } from "../products/getProducts";
import { loadMore } from "../products/loadMore";
import { createCategoryList, getCategory } from "../products/categoryCards";
import { modalProduct } from "../products/addHtmlProducts";
import { closeBtn } from "../products/showModal";
import { cartDinamic } from "../cart__dinamic";


export const url = "https://api.fivecoins.top/api";

export async function registerUser(email, password, url) {
  try {
    const res = await axios.post(url, { email, password });
    const data = res.data;

    if (
      url !== "https://test-nest-api-iqy9.onrender.com/api/users" &&
      data.token
    ) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");
    }

    return data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    } else {
      console.error(err.message);
      throw err;
    }
  }
}

export async function deleteQuantityOnServer(path, token) {
  try {
    const res = await axios.delete(url + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    cartDinamic();
    return res.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return null;
  }
}

export async function loadCart(path, token) {
  try {
    const res = await axios.get(url + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return null;
  }
}

export async function loadCartDinamic(path, token) {
  try {
    const res = await axios.get(url + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return null;
  }
}

export async function updateQuantityOnServer(path, quantity, token, id) {
  try {
    const res = await axios.put(
      url + path,
      [
        {
          id,
          quantity
        }
      ], 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return null;
  }
}



export async function postToCart(id, quantity) {
  const token = localStorage.getItem("token");

  try {
    await axios.post(
      `${url}/carts`,
      {
        products: [
          {
            id,
            quantity,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      cartDinamic();
  } catch (error) {
  }
}

export async function getProducts() {
  try {
    const response = await axios.get(`${url}/products`);
    const data = response.data.data;
    createCards(data);
    loadMore(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryCards() {
  try {
    const response = await axios.get(`${url}/categories`);
    const data = response.data;
    getCategory(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getCardsByCategory() {
  try {
    const response = await axios.get(`${url}/products`);
    const data = response.data.data;
    createCategoryList(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getCardByModal(id) {
  document.querySelector(".loader").classList.remove("modal-blur__close");
  try {
    const response = await axios.get(`${url}/products/${id}`);
    const data = response.data;
    modalProduct(data);
    closeBtn(id);

    if (location.pathname !== `/product/${id}`) {
      history.pushState({}, "", `/product/${id}`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    document
      .querySelector(".loader")
      .classList.add("loader", "modal-blur__close");
  }
}

