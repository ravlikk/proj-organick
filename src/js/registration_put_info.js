
import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;


function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();
  const name = root.userInput.value.trim();


  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isNameValid = /^[А-Яа-яA-Za-z\s'-]{2,30}$/.test(name);

  root.submitBtn.disabled = !(isEmailValid && isPasswordValid && isNameValid);
}

root.emailInput.addEventListener('input', checkInputsFilled);
root.userInput.addEventListener('input', checkInputsFilled);
root.addressInput.addEventListener('input', checkInputsFilled);
root.phoneInput.addEventListener('input', checkInputsFilled);

root.iconUser.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});

root.btn.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

   const email = root.emailInput.value.trim();
   const password = root.passwordInput.value.trim();
   const name = root.userInput.value.trim();

  if (!email || !name || !address || !phone) {
    console.warn('Не всі поля заповнені');
    return;
  }

  try {
    const result = await registerUser(email, password, name, fullUrl);
    console.log('Результат реєстрації:', result);
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }
});





