const hamburger = document.querySelector("header.header nav.navigation .hamburger");
hamburger.addEventListener("click", function() {
  const ulElement = hamburger.nextElementSibling;
  ulElement.classList.toggle("show");
});
