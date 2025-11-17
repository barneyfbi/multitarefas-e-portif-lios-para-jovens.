const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

btn.onclick = () => {
  btn.classList.toggle("active");
  nav.classList.toggle("open");
};