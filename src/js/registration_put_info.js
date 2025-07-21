import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;

function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const allValid = isEmailValid && isPasswordValid;

}

root.emailInput.addEventListener('input', checkInputsFilled);
root.passwordInput.addEventListener('input', checkInputsFilled);
checkInputsFilled();

root.modalog.addEventListener('click', () => {
  if (root.content.classList.contains('hidden') || root.closeModalBtn.classList.contains('hidden')) {
    root.content.classList.remove('hidden');
    root.closeModalBtn.classList.remove('hidden');
  }
});


root.modareg.addEventListener('click', async  (e) => {
  e.preventDefault();
  fullUrl = url + "/users";

  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();

  try {
    const result = await registerUser(email, password, fullUrl);
    console.log('Результат реєстрації:', result);

    root.modal.classList.remove('active');
  } catch (error) {
    console.error(error.message);
  }

  form.reset();
});

root.modalog.addEventListener('click', async  (e) => {
  e.preventDefault();
  fullUrl = url + "/auth/login";

  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();

  try {
    const result = await registerUser(email, password, fullUrl);
    console.log('Результат реєстрації:', result);

    root.modal.classList.remove('active');
  } catch (error) {
    console.error(error.message);
  }

  form.reset();
});
