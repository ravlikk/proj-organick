import axios from "axios";

export const url = "https://test-nest-api-iqy9.onrender.com/api";

export async function registerUser(email, password, url) {
  try {
   const res = await axios.post(url, {
        email, 
        password
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

export async function deleteQuantityOnServer(path, id) {
  try {
    const res = await axios.delete(url + path, {
      data: { id }
    });
    console.log('Response from server:', res.data);

    return res.data;
  } catch (err) {
    console.error('Помилка запиту:', err.response?.data || err.message);
    return null;
  }
}

export async function loadCart(path) {
  try {
    const res = await axios.get(url + path);
    console.log('Response from server:', res.data);

    return res.data; 
  } catch (err) {
    console.error('Помилка запиту:', err.response?.data || err.message);
    return null; 
  }
}
