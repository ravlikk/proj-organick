const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.modal__cancel');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
