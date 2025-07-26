import { root } from "../js/universal/root";

function openModal() {
  root.sidebar.classList.remove("close");
  root.sidebar.classList.add("open");
}

function closeModal() {
  root.sidebar.classList.remove("open");
  root.sidebar.classList.add("close");
}

let isSidebarOpen = false;

root.burger.addEventListener("click", () => {
  if (isSidebarOpen) {
    closeModal();
  } else {
    root.sidebar.style.display = "block";
    openModal();
  }
  isSidebarOpen = !isSidebarOpen;
});

root.closeBtn.addEventListener("click", () => {
  closeModal();
  isSidebarOpen = false;
});

let isOpen = false;

root.pages.addEventListener("click", () => {
  if (isOpen) {
    root.list.style.display = "none";
  } else {
    root.list.style.display = "flex";
  }
  isOpen = !isOpen;
});

let isOpenMod = false;

root.pageModal.addEventListener("click", () => {
  if (isOpenMod) {
    root.listModal.style.display = "none";
  } else {
    root.listModal.style.display = "flex";
  }
  isOpenMod = !isOpenMod;
});
