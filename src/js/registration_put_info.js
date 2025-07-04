import axios from 'axios';

const log = document.querySelector('.header__registration');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit');

window.addEventListener('DOMContentLoaded', () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (isAuthenticated === 'true') {
    log.style.display = 'none'; 
    console.log('Користувач вже авторизований, кнопка прихована');
  }
});

function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  submitBtn.disabled = !(isEmailValid && isPasswordValid);
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);


async function registerUser(email, password) {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://test-nest-api-iqy9.onrender.com/api/users', 
      data: { email, password },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = res.data;
    console.log('Реєстрація успішна:', data);

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');
      submitBtn.style.display = 'none';
    } else {
      console.warn('Токен не отримано від сервера');
    }

    return data;
  } catch (err) {
    if (err.response) {
      console.error('Реєстрація неуспішна:', err.response.data.message || 'Невідома помилка');
      throw new Error(err.response.data.message || 'Невідома помилка');
    } else {
      console.error('Помилка запиту:', err.message);
      throw err;
    }
  }
}

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    console.warn('Email або пароль не заповнені');
    return;
  }

  try {
    const result = await registerUser(email, password);
    console.log('Результат реєстрації:', result);
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }
});

validateForm();
