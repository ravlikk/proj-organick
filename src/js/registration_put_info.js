
import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;


function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const name = root.userInput.value.trim();
  const address = root.addressInput.value.trim();
  const phone = root.phoneInput.value.trim();
  const last = root.nameInput.value.trim();
  const password = root.passwordInput.value.trim();


  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNameValid = name.length >= 2;
  const isLastValid = last.length >= 2;
  const isAddressValid = address.length > 0;
  const isPasswordValid = password.length >= 6;
  const isPhoneValid = /^\+380\d{9}$/.test(phone); 

  const allValid = isEmailValid && isNameValid && isAddressValid && isPhoneValid && isPasswordValid && isLastValid;

  root.btn.disabled = !allValid;
}

root.emailInput.addEventListener('input', checkInputsFilled);
root.userInput.addEventListener('input', checkInputsFilled);
root.addressInput.addEventListener('input', checkInputsFilled);
root.phoneInput.addEventListener('input', checkInputsFilled);
root.nameInput.addEventListener('input', checkInputsFilled);
root.passwordInput.addEventListener('input', checkInputsFilled);

checkInputsFilled();
root.iconUser.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
  console.log(fullUrl);
});

root.log.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/users";
  console.log(fullUrl);
});

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

   const email = root.emailInput.value.trim();
  const first_name = root.userInput.value.trim();
  const address = root.addressInput.value.trim();
  const phone = root.phoneInput.value.trim();
  const last_name = root.nameInput.value.trim();
  const password = root.passwordInput.value.trim();

  if (!email || !first_name || !address || !phone || !last_name || !password ) {
    console.warn('Не всі поля заповнені');
    return;
  }

  try {
    const result = await registerUser(email, password, first_name, last_name, phone, address, fullUrl);
    console.log('Результат реєстрації:', result);
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }
});





