import { rooot } from "../universal/root";
import { defaultProductOffer, discountProductOffer } from "./addHtmlProducts";
import { categoryList } from "./categorySelect";

export function getCategory(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 1) {
      rooot.categoryName.textContent = `${data[i].name}`;
    } else {
      rooot.categoryList.insertAdjacentHTML(
        "beforeend",
        `<li data-value="cat2">${data[i].name}</li>`
      );
    }
  }
  categoryList();
}
export function createCategoryList(data) {
  rooot.categoryCardsList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].category.name === rooot.categoryName.textContent) {
      if (data[i].discount !== 0) {
        discountProductOffer(data, i);
      } else {
        defaultProductOffer(data, i);
      }
    }
  }
}
