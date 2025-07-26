import { getProducts } from "../universal/api.js";
import { defaultProduct, discountProduct } from "./addHtmlProducts.js";

export function createCards(data) {
  for (let i = 0; i < 8; i++) {
    if (data[i].discount !== 0) {
      discountProduct(data, i);
    } else {
      defaultProduct(data, i);
    }
  }
}

