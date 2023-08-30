// menu burger
const toggleMenuBtn = document.querySelector("#menu-btn");
const toggledMenu = document.querySelector("#toggled-menu");
const toggleMenuImg = document.querySelector("#menu-btn img");
const menuLinks = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav() {
  toggledMenu.classList.toggle("-translate-y-full");
  toggledMenu.classList.toggle("mt-[100px]");
  toggledMenu.classList.toggle("pb-4");

  if (toggledMenu.classList.contains("-translate-y-full")) {
    toggleMenuImg.setAttribute("src", "../../hamburger-icon.svg");
    toggleMenuBtn.setAttribute("aria-expanded", "false");
  } else {
    toggleMenuImg.setAttribute("src", "../../x-mark.svg");
    toggleMenuBtn.setAttribute("aria-expanded", "true");
  }
}
