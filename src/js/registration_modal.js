import { root } from '../js/universal/root';


root.btn.addEventListener('click', (e) => {
  e.preventDefault(); 

  root.content.classList.add('hidden');
  root.closeModalBtn.classList.add('hidden');


  root.log.classList.add('log--shrink');

  setTimeout(() => {
    root.log.classList.add('hidden');
    root.modal.classList.remove('active');
  }, 500); 
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      root.modal.classList.remove('active');
    }
});