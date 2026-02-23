const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.onclick = () => {
  nav.classList.toggle("active");
};

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});
