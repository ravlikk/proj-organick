import { root } from "../universal/root.js";
import { defaultProduct, discountProduct } from "./addHtmlProducts.js";
import { createCards } from "./getProducts.js";

export function loadMore(data) {
  root.btnLoadMore.addEventListener("click", () => {
    if (root.btnLoadMore.textContent.trim() === "Load More") {
      root.btnLoadMore.querySelector("span").textContent = "Hide All";
      for (let i = 8; i < data.length; i++) {
        if (data[i].discount !== 0) {
          discountProduct(data, i);
        } else {
          defaultProduct(data, i);
        }
      }
    } else {
      root.btnLoadMore.querySelector("span").textContent = "Load More";
      root.listProducts.innerHTML = "";
      createCards(data);
    }
  });
}
