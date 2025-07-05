
import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;


function checkInputsFilled() {
  const email = root.emailInput.value.trim();
<<<<<<< Updated upstream
  const password = root.passwordInput.value.trim();
  const name = root.userInput.value.trim();


  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isNameValid = /^[А-Яа-яA-Za-z\s'-]{2,30}$/.test(name);

  root.submitBtn.disabled = !(isEmailValid && isPasswordValid && isNameValid);
=======
  const name = root.nameInput.value.trim();
  const address = root.addressInput.value.trim();
  const phone = root.phoneInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isNameValid = name.length >= 2;
  const isAddressValid = address.length > 0;
  const isPhoneValid = /^\+380\d{9}$/.test(phone); 

  const allValid = isEmailValid && isNameValid && isAddressValid && isPhoneValid;

  root.btn.disabled = !allValid;
>>>>>>> Stashed changes
}

root.emailInput.addEventListener('input', checkInputsFilled);
root.nameInput.addEventListener('input', checkInputsFilled);
root.addressInput.addEventListener('input', checkInputsFilled);
root.phoneInput.addEventListener('input', checkInputsFilled);

<<<<<<< Updated upstream
root.iconUser.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});

root.btn.addEventListener('click', async (e) => {
  root.modal.classList.add('active');
  fullUrl = url + "/auth/login";
});
=======
checkInputsFilled();

async function registerUser(email, name, address, phone) {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://test-nest-api-iqy9.onrender.com/api/users',
      data: { email, name, address, phone },
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
>>>>>>> Stashed changes

root.submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();

<<<<<<< Updated upstream
   const email = root.emailInput.value.trim();
   const password = root.passwordInput.value.trim();
   const name = root.userInput.value.trim();
=======
  const email = root.emailInput.value.trim();
  const name = root.nameInput.value.trim();
  const address = root.addressInput.value.trim();
  const phone = root.phoneInput.value.trim();
>>>>>>> Stashed changes

  if (!email || !name || !address || !phone) {
    console.warn('Не всі поля заповнені');
    return;
  }

  try {
<<<<<<< Updated upstream
    const result = await registerUser(email, password, name, fullUrl);
=======
    const result = await registerUser(email, name, address, phone);
>>>>>>> Stashed changes
    console.log('Результат реєстрації:', result);
  } catch (error) {
    console.error('Помилка при реєстрації:', error.message);
  }
});


<<<<<<< Updated upstream


validateForm();
=======
>>>>>>> Stashed changes
