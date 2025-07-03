const btn = document.getElementById('submit');
const text = document.querySelector('.modal__message');
const content = document.querySelector('.modal__content');
const closeModalBtn = document.querySelector('.modal__cancel');
const log = document.querySelector('.header__registration');
const modal = document.querySelector('.modal');
const form = document.getElementById('form');
const inputs = form.querySelectorAll('input');

function checkInputsFilled() {
  let allValid = true;

  inputs.forEach(input => {
    if (!input.validity.valid) {
      allValid = false;
    }
  });

  btn.disabled = !allValid;
}

inputs.forEach(input => {
  input.addEventListener('input', checkInputsFilled);
});

checkInputsFilled();


btn.addEventListener('click', (e) => {
  e.preventDefault(); 

  content.classList.add('hidden');
  closeModalBtn.classList.add('hidden');

  text.classList.add('visible');

  log.classList.add('log--shrink');

  setTimeout(() => {
    log.classList.add('hidden');
    modal.classList.remove('active');
  }, 1000); 
});
