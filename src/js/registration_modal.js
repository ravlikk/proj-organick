import { root } from '../js/universal/root';

function checkInputsFilled() {
  let allValid = true;

  root.inputs.forEach(input => {
    if (!input.validity.valid) {
      allValid = false;
    }
  });

  root.btn.disabled = !allValid;
}

root.inputs.forEach(input => {
  input.addEventListener('input', checkInputsFilled);
});

checkInputsFilled();


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

