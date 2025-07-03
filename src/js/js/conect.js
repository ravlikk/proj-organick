function loadHeader() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './components/header.html', false); 
  xhr.send(null);

  if (xhr.status === 200) {
    document.querySelector('header').innerHTML = xhr.responseText;
  } else {
    console.error('Помилка при завантаженні header:', xhr.status);
  }
}

loadHeader();

function loadReg() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './components/registration.html', false);
  xhr.send(null);

  if (xhr.status === 200) {
    const header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', xhr.responseText);
  } else {
    console.error('Помилка при завантаженні :', xhr.status);
  }
}

loadReg();
