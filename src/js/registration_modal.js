import { root } from '../js/universal/root';

function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const name = root.nameInput.value.trim();
  const address = root.addressInput.value.trim();
  const phone = root.phoneInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNameValid = name.length >= 2;
  const isAddressValid = address.length > 0;
  const isPhoneValid = /^\+380\d{9}$/.test(phone); // UA формат: +380XXXXXXXXX

  const allValid = isEmailValid && isNameValid && isAddressValid && isPhoneValid;

  root.btn.disabled = !allValid;
}

// Вішай слухачі на окремі поля
root.emailInput.addEventListener('input', checkInputsFilled);
root.nameInput.addEventListener('input', checkInputsFilled);
root.addressInput.addEventListener('input', checkInputsFilled);
root.phoneInput.addEventListener('input', checkInputsFilled);

// Запуск при завантаженні
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

