const burger = document.getElementById("burger");
const searchBut = document.getElementById("search-button");
const sidebar = document.getElementById("sidebar-menu");
const overlay = document.getElementById("header__overlay");
const closeBtn = document.getElementById("close-menu");
const searchBox = document.getElementById("sidebar-search");

function openMenu() {
  sidebar.classList.add('active', 'slide-in-right');
  sidebar.classList.remove('slide-out-right');

  overlay.classList.add('active', 'fade-in');
  overlay.classList.remove('fade-out');

  searchBox.classList.remove('search-animate-out');
  searchBox.classList.add('search-animate-in');

  if (window.innerWidth < 768) {
    document.body.classList.add('modal-open');
  }
}

function closeMenu() {
  sidebar.classList.remove('slide-in-right');
  sidebar.classList.add('slide-out-right');

  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');

  searchBox.classList.remove('search-animate-in');
  searchBox.classList.add('search-animate-out');

  setTimeout(() => {
    sidebar.classList.remove('active', 'slide-out-right');
    overlay.classList.remove('active', 'fade-out');
    document.body.classList.remove('modal-open');
  }, 400);
}


burger.addEventListener('click', openMenu);
searchBut.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('active')) {
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


