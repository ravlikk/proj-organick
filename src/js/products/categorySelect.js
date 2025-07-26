import { getCardsByCategory } from "../universal/api";
import { root } from "../universal/root";

export function categoryList() {
  root.categoryName.addEventListener("click", () => {
    root.categoryList.classList.toggle("open");
  });

  root.categoryList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      root.categoryName.textContent = item.textContent;
      root.categoryList.classList.remove("open");
      getCardsByCategory();
    });
  });

  document.addEventListener("click", (e) => {
    if (!root.select.contains(e.target)) {
      root.categoryList.classList.remove("open");
    }
  });
}
