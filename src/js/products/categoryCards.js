import { root } from "../universal/root";
import { defaultProductOffer, discountProductOffer } from "./addHtmlProducts";
import { categoryList } from "./categorySelect";

export function getCategory(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 1) {
      root.categoryName.textContent = `${data[i].name}`;
    } else {
      root.categoryList.insertAdjacentHTML(
        "beforeend",
        `<li data-value="cat2">${data[i].name}</li>`
      );
    }
  }
  categoryList();
}
export function createCategoryList(data) {
  root.categoryCardsList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].category.name === root.categoryName.textContent) {
      if (data[i].discount !== 0) {
        discountProductOffer(data, i);
      } else {
        defaultProductOffer(data, i);
      }
    }
  }
}
