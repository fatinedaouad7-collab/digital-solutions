// effet header au scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "#020617";
  } else {
    header.style.background = "rgba(0,0,0,0.7)";
  }
});