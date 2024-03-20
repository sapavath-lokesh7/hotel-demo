let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.onscroll = () => {
  nav.classList.remove("active");
};
