import { rooot } from "../universal/root";

export function getQuantiy(id) {
  quantity = document.querySelector(".detail-quantity__count").value;
}
export function clickAdd() {
  rooot.btnAddToCart.addEventListener("click", () => {
    const id = clickedItem.dataset.id;
  });
}
export function AddToBasket(data, quantity) {}
