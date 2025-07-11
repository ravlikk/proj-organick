import { root } from "./universal/root";

root.openModalBtn.addEventListener('click', () => {
  root.modal.classList.add('active');
});

root.closeModalBtn.addEventListener('click', () => {
  root.modal.classList.remove('active');
});
