import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;

// ==== Додаємо збереження з часом життя (TTL) ====
function setWithExpiry(key, value, ttl) {
  const now = Date.now();
  const item = {
    value: value,
    expiry: now + ttl, // зникне через ttl мс
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// ==== Перевірка заповнення полів ====
function checkInputsFilled() {
  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const allValid = isEmailValid && isPasswordValid;

  root.btn.disabled = !allValid;
}

root.emailInput.addEventListener('input', checkInputsFilled);
root.passwordInput.addEventListener('input', checkInputsFilled);
checkInputsFilled();

// ==== Відкриття модального вікна ====
root.iconUser.addEventListener('click', () => {
  if (root.content.classList.contains('hidden') || root.closeModalBtn.classList.contains('hidden')) {
    root.content.classList.remove('hidden');
    root.closeModalBtn.classList.remove('hidden');
  }
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});

root.log.addEventListener('click', () => {
  root.modal.classList.add('active');
  fullUrl = url + "/users";
});

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();

  if (!email || !password) {
    console.warn('Не всі поля заповнені');
    return;
  }

  try {
    const result = await registerUser(email, password, fullUrl);
    console.log('Результат реєстрації:', result);

    setWithExpiry("userEmail", email, 30 * 60 * 1000);


    root.modal.classList.remove('active');
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }

  form.reset();
});
