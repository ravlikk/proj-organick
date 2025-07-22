import { root } from '../js/universal/root';
import { registerUser } from "../js/universal/api";
import { url } from "../js/universal/api";

let fullUrl = url;

// Створюємо модалку повідомлень
const feedbackBox = document.createElement('div');
feedbackBox.id = 'feedbackBox';
document.body.appendChild(feedbackBox);

function clearFeedback() {
  feedbackBox.textContent = '';
  feedbackBox.classList.remove('active');
  feedbackBox.style.display = 'none';
}

function showFeedback(message) {
  feedbackBox.textContent = message;
  feedbackBox.classList.add('active');
  feedbackBox.style.display = 'block';
}

function showError(input, message) {
  let errorSpan = input.nextElementSibling;
  if (!errorSpan || !errorSpan.classList.contains('error')) {
    errorSpan = document.createElement('span');
    errorSpan.className = 'error';
    input.insertAdjacentElement('afterend', errorSpan);
  }
  errorSpan.innerHTML = message;
}

function removeError(input) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('error')) {
    errorSpan.remove();
  }
}

function checkInputsFilled(showErrors = true) {
  const name = document.getElementById('first');
  const email = root.emailInput;
  const password = root.passwordInput;

  if (!name || !email || !password) return false;

  let valid = true;

  const fields = [
    { input: name, message: '⚠️ <strong>Name is required</strong>', validate: val => val.trim() !== '' },
    { input: email, message: '⚠️ <strong>Email is required</strong>', validate: val => val.trim() !== '' },
    { input: password, message: '⚠️ <strong>Password is required</strong>', validate: val => val.trim() !== '' }
  ];

  for (const { input, message, validate } of fields) {
    const value = input.value;
    if (!validate(value)) {
      if (showErrors) showError(input, message);
      valid = false;
    } else {
      removeError(input);
    }
  }

  if (valid && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    if (showErrors) showError(email, '⚠️ <strong>Invalid email format</strong>');
    valid = false;
  }

  if (valid && password.value.trim().length < 6) {
    if (showErrors) showError(password, '⚠️ <strong>Password must be at least 6 characters</strong>');
    valid = false;
  }

  return valid;
}

function lockModal(lock) {
  const modal = document.querySelector('.modal');
  if (!modal) return;
  modal.classList.toggle('locked', lock);
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (!modal) return;
  modal.classList.remove('active');
}

['first', root.emailInput, root.passwordInput].forEach(el => {
  const input = typeof el === 'string' ? document.getElementById(el) : el;
  input?.addEventListener('input', () => checkInputsFilled(false));
});
checkInputsFilled(false);

root.modalog.addEventListener('click', () => {
  root.content.classList.remove('hidden');
  root.closeModalBtn.classList.remove('hidden');
});

root.modareg.addEventListener('click', async (e) => {
  e.preventDefault();
  clearFeedback();

  if (!checkInputsFilled(true)) return;

  fullUrl = url + "/users";
  lockModal(true);

  try {
    await registerUser(
      root.emailInput.value.trim(),
      root.passwordInput.value.trim(),
      fullUrl
    );
    lockModal(false);
    root.overlay.style.display = 'none';
    root.modal.style.display = 'none';
    if (typeof form !== 'undefined' && typeof form.reset === 'function') {
      form.reset();
      checkInputsFilled(false);
    }
    
  } catch (error) {
    lockModal(false);
    showFeedback(error.message || '⚠️ Error during registration');
  }
});

root.modalog.addEventListener('click', async (e) => {
  e.preventDefault();
  clearFeedback();

  if (!checkInputsFilled(true)) return;

  fullUrl = url + "/auth/login";
  lockModal(true);

  try {
    await registerUser(
      root.emailInput.value.trim(),
      root.passwordInput.value.trim(),
      fullUrl
    );
    lockModal(false);
    root.overlay.style.display = 'none';
    root.modal.style.display = 'none';
    if (typeof form !== 'undefined' && typeof form.reset === 'function') {
      form.reset();
      checkInputsFilled(false);
    }
    
  } catch (error) {
    lockModal(false);
    showFeedback(error.message || '⚠️ Login failed');
  }
});
