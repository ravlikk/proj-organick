import { root } from '../js/universal/root';
import axios from 'axios';

root.iconUser.addEventListener('click', () => {
  root.modal.classList.add('active');
  root.form.style.display = 'none';

function parseJwt(token) {
  try {

    const base64Url = token.split('.')[1];

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Помилка декодування токена:', e.message);
    return null;
  }
}


async function loginFromToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    console.warn('Токен не знайдено в localStorage');
    return;
  }

  const decoded = parseJwt(token);
  
  if (!decoded) {
    console.warn('Не вдалося декодувати токен');
    return;
  }

  const email = decoded.email;
console.log(email);
  if (!email) {
    console.warn('У токені відсутні email або password');
    return;
  }

  try {
    const res = await axios({
      method: 'POST',
      url: 'https://test-nest-api-iqy9.onrender.com/api/auth/login', 
      data: { email},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log('Успішний повторний логін:', res.data);
    return res.data;

  } catch (err) {
    if (err.response) {
      console.error('Помилка авторизації:', err.response.data.message);
    } else {
      console.error('Помилка мережі:', err.message);
    }
  }
}


loginFromToken();

function insertHtml(user) {
  const container = document.getElementById('user-container');

  container.innerHTML = `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
    </div>
  `;
}
});

