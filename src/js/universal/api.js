import axios from "axios";
import { createCards } from "../products/getProducts";
import { loadMore } from "../products/loadMore";

const url = "https://test-nest-api-iqy9.onrender.com/api";

export async function getProducts(params) {
  const products = axios
    .get(`${url}/products`)
    .then((response) => {
      const data = response.data.data;
      createCards(data);
      loadMore(data)
    })
    .catch((error) => {
      console.log(error);
      window.location.replace("../404.html");
    });
}
