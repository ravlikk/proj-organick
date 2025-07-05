import axios from 'axios';
import { root } from '../js/universal/root';


window.addEventListener('DOMContentLoaded', () => {
  
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (isAuthenticated === 'true') {
    root.log.style.display = 'none'; 
    root.iconUser.classList.add('visible');
  }
});

function validateForm() {
  const email = root.emailInput.value.trim();
  const password = root.passwordInput.value.trim();



  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  root.submitBtn.disabled = !(isEmailValid && isPasswordValid);
}

root.emailInput.addEventListener('input', validateForm);
root.passwordInput.addEventListener('input', validateForm);

async function registerUser(email, password) {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://test-nest-api-iqy9.onrender.com/api/users', 
      data: { email, password},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = res.data;
    root.iconUser.display = 'block';

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');
      
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

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

   const email = root.emailInput.value.trim();
   const password = root.passwordInput.value.trim();

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
