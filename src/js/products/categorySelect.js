import { getCardsByCategory } from "../universal/api";
import { rooot } from "../universal/root";

export function categoryList() {
  rooot.categoryName.addEventListener("click", () => {
    rooot.categoryList.classList.toggle("open");
  });

  rooot.categoryList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      rooot.categoryName.textContent = item.textContent;
      rooot.categoryList.classList.remove("open");
      getCardsByCategory();
    });
  });

  document.addEventListener("click", (e) => {
    if (!rooot.select.contains(e.target)) {
      rooot.categoryList.classList.remove("open");
    }
  });
}
