document.addEventListener("DOMContentLoaded", () => {
  const buttonMenuToggle = document.querySelector("[data-js-menu-toggle]");

  buttonMenuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("is-open");
    buttonMenuToggle.setAttribute("aria-expanded", isOpen);
    buttonMenuToggle.querySelector("img").src = isOpen ? "./assets/images/icon-menu-close.svg" : "./assets/images/icon-menu.svg";
  })
})