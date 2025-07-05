import { root } from '../js/universal/root';
import axios from 'axios';

root.iconUser.addEventListener('click', () => {
  root.modal.classList.add('active');
  root.form.style.display = 'none';

  async function loginUser(email, password) {
    try {
      const res = await axios.post('https://test-nest-api-iqy9.onrender.com/api/auth/login', {
        email,
        password
      });

      const data = res.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Успішний вхід:', data);

      insertHtml(data.user); 
      return data;
    } catch (err) {
      if (err.response) {
        console.error('Помилка авторизації:', err.response.data.message);
      } else {
        console.error('Помилка мережі:', err.message);
      }
    }
  }

  loginUser('user@example.com', 'password123');
});

function insertHtml(user) {
  const container = document.getElementById('user-container');

  container.innerHTML = `
    <div class="user-card">
      <h2>${user.first_name || 'Без імені'}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone || 'Невідомо'}</p>
    </div>
  `;
}
