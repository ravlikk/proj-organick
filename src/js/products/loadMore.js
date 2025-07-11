import { rooot } from "../universal/root.js";
import { defaultProduct, discountProduct } from "./addHtmlProducts.js";
import { createCards } from "./getProducts.js";

export function loadMore(data) {
  rooot.btnLoadMore.addEventListener("click", () => {
    if (rooot.btnLoadMore.textContent.trim() === "Load More") {
      rooot.btnLoadMore.querySelector("span").textContent = "Hide All";
      for (let i = 8; i < data.length; i++) {
        if (data[i].discount !== 0) {
          discountProduct(data, i);
        } else {
          defaultProduct(data, i);
        }
      }
    } else {
      rooot.btnLoadMore.querySelector("span").textContent = "Load More";
      rooot.listProducts.innerHTML = "";
      createCards(data);
    }
  });
}
