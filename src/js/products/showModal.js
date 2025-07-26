import { getCardByModal, postToCart } from "../../js/universal/api.js";
import { root } from "../universal/root";

export function createModal() {
  root.listProducts.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".products__item");
    const id = clickedItem.dataset.id;

    if (clickedItem) {
      getCardByModal(id);
    }
  });
}
function closeModal() {
  root.modalBlur.classList.add("modal-blur__close");
  root.Productmodal.innerHTML = "";
  history.back();
}
export function closeBtn(productId) {
  const btnAddToCart = document.querySelector(".detail__btn");
  const btnClose = document.querySelector(".detail__close");
  btnClose.addEventListener("click", () => {
    closeModal();
  });
  root.modalBlur.addEventListener("click", () => {
    closeModal();
  });
  btnAddToCart.addEventListener("click", () => {
    const quantity = Number(
      document.querySelector(".detail-quantity__count").value
    );
    const id = Number(
      document.querySelector(".detail__container").dataset.id
    );
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
