import axios from "axios";
import { createCards } from "../products/getProducts";
import { loadMore } from "../products/loadMore";
import { createCategoryList, getCategory } from "../products/categoryCards";
import { modalProduct } from "../products/addHtmlProducts";
import { closeBtn } from "../products/showModal";

const url = "https://test-nest-api-iqy9.onrender.com/api";

export async function getProducts(params) {
  axios
    .get(`${url}/products`)
    .then((response) => {
      const data = response.data.data;
      createCards(data);
      loadMore(data);
    })
    .catch((error) => {
      console.log(error);
      window.location.replace("../404.html");
    });
}
export async function getCategoryCards(params) {
  axios
    .get(`${url}/categories`)
    .then((response) => {
      const data = response.data;
      getCategory(data);
    })
    .catch((error) => {
      console.log(error);
      window.location.replace("../404.html");
    });
}
export async function getCardsByCategory(params) {
  axios.get(`${url}/products`).then((response) => {
    const data = response.data.data;
    createCategoryList(data);
  });
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
    window.location.replace("../404.html");
  } finally {
    document
      .querySelector(".loader")
      .classList.add("loader", "modal-blur__close");
  }
}
async function postToCart(productId, quantity) {
  const token = localStorage.getItem('token');

  try {
    await axios.post(
      `${url}/carts`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    // later add modal
  }
}

