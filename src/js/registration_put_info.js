
import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;


function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();


  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const allValid = isEmailValid && isPasswordValid ;

  root.btn.disabled = !allValid;
}

root.emailInput.addEventListener('input', checkInputsFilled);
root.passwordInput.addEventListener('input', checkInputsFilled);

checkInputsFilled();
root.iconUser.addEventListener('click', async (e) => {
if (root.content.classList.contains('hidden') || root.closeModalBtn.classList.contains('hidden')) {
  root.content.classList.remove('hidden');
  root.closeModalBtn.classList.remove('hidden');
}

  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});

root.log.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/users";
});

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

   const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();
  form.reset();
  if (!email || !password ) {
    console.warn('Не всі поля заповнені');
    return;
  }

  try {
    const result = await registerUser(email, password, fullUrl);
    console.log('Результат реєстрації:', result);
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }
});





