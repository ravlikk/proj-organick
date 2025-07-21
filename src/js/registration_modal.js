import { root } from '../js/universal/root';

root.log.addEventListener('click', () => {

  root.modal.classList.remove('modal-hide');
  
  root.modal.style.display = 'block';
  root.overlay.style.display = 'block';

  root.modal.classList.add('modal-show');
});

root.closeModalBtn.addEventListener('click', () => {

  root.modal.classList.remove('modal-show');

  root.modal.classList.add('modal-hide');

  setTimeout(() => {
    root.modal.style.display = 'none';
    root.overlay.classList.remove('modal-overlay-hide');
    root.overlay.style.display = 'none';
    root.modal.classList.remove('modal-hide');
    
  }, 400); 
});

root.overlay.addEventListener('click', () => {
 
    root.overlay.style.display = 'none';
    root.modal.style.display = 'none';
});
