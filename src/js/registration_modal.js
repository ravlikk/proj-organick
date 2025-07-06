import { root } from '../js/universal/root';





root.btn.addEventListener('click', (e) => {
  e.preventDefault(); 

  root.content.classList.add('hidden');
  root.closeModalBtn.classList.add('hidden');

  root.text.classList.add('visible');

  root.log.classList.add('log--shrink');

  setTimeout(() => {
    root.log.classList.add('hidden');
    root.modal.classList.remove('active');
  }, 1000); 
});

