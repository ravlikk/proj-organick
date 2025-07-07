import { getCardByModal, postToCart } from "../universal/api";
import { rooot } from "../universal/root";

export function createModal() {
  rooot.listProducts.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".products__item");
    console.log(clickedItem);
    const id = clickedItem.dataset.id;

    if (clickedItem) {
      getCardByModal(id);
    }
  });
}
function closeModal() {
  rooot.modalBlur.classList.add("modal-blur__close");
  rooot.modal.innerHTML = "";
  history.back();
}
export function closeBtn(id) {
  const btnAddToCart = document.querySelector(".detail__btn");
  const btnClose = document.querySelector(".detail__close");
  btnClose.addEventListener("click", () => {
    closeModal();
  });
  rooot.modalBlur.addEventListener("click", () => {
    closeModal();
  });
  btnAddToCart.addEventListener("click", () => {
    const quantity = document.querySelector(".detail-quantity__count").value;
    postToCart(id, quantity);
    closeModal();
  });
}

export function chekUrlByModal() {
  document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname;
    const match = path.match(/^\/product\/(\d+)$/);

    if (match) {
      const id = match[1];
      getCardByModal(id);
    }
  });
}
