import { root } from '../js/universal/root';

function openMenu() {
  root.sidebar.classList.add('active', 'slide-in-right');
  root.sidebar.classList.remove('slide-out-right');


  root.searchBox.classList.remove('search-animate-out');
  root.searchBox.classList.add('search-animate-in');

  if (window.innerWidth < 768) {
    document.body.classList.add('modal-open');
  }
}

function closeMenu() {
  root.sidebar.classList.remove('slide-in-right');
  root.sidebar.classList.add('slide-out-right');

  root.searchBox.classList.remove('search-animate-in');
  root.searchBox.classList.add('search-animate-out');

  setTimeout(() => {
    root.sidebar.classList.remove('active', 'slide-out-right');

    document.body.classList.remove('modal-open');
  }, 400);
}


root.burger.addEventListener('click', openMenu);
root.searchBut.addEventListener('click', openMenu);
root.closeBtn.addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root.sidebar.classList.contains('active')) {
    closeMenu();
  }
});

function toggleNavClass() {
  const nav = document.querySelector('.header__nav');

  if (!nav) return;

  if (window.innerWidth <= 768) {
    nav.classList.remove('visible-non-mobile');
  } else {
    nav.classList.add('visible-non-mobile');
  }
}

toggleNavClass();

window.addEventListener('resize', toggleNavClass);


