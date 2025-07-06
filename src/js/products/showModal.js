import { getCardByModal } from "../universal/api";
import { rooot } from "../universal/root";

export function createModal() {
  rooot.listProducts.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".products__item"); 
    console.log(clickedItem);
    
    if (clickedItem) {
      rooot.modalBlur.classList.toggle("modal-blur__close");
      const id = clickedItem.dataset.id;
      getCardByModal(id);
    }
  });
  rooot.modalBlur.addEventListener("click", () => {
    rooot.modalBlur.classList.toggle("modal-blur__close");
    rooot.modal.innerHTML = "";
  });
}

export function closeBtn() {
  const btnClose = document.querySelector(".detail__close");
  btnClose.addEventListener("click", () => {
    rooot.modalBlur.classList.toggle("modal-blur__close");
    rooot.modal.innerHTML = "";
  });
}
