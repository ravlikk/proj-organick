import { root } from '../js/universal/root';

function openModal() {
  root.sidebar.classList.remove('close');
  root.sidebar.classList.add('open');
  
}

function closeModal() {
  root.sidebar.classList.remove('open');
  root.sidebar.classList.add('close');
}

root.burger.addEventListener('click', () => {
  root.sidebar.style.display = 'block';
openModal();
});

root.closeBtn.addEventListener('click', () => {
closeModal();
});