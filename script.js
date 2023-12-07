window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrollToTopButton = document.getElementById("scroll-to-top-button");

  if (window.pageYOffset > 0) {
    nav.classList.remove("hidden-nav");
    scrollToTopButton.style.display = "block";
  } else {
    nav.classList.add("hidden-nav");
    scrollToTopButton.style.display = "none";
  }
});

const menuButton = document.getElementById("menu-button");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
  navList.classList.toggle("show-menu");
});

/* Para o botão de rolagem */

const scrollToTopButton = document.getElementById("scroll-to-top-button");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Carrossel */

/* let currentIndex = 0;

function showSlide(index) {
  const slide = document.getElementById('carousel-slide');
  const totalSlides = slide.children.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  slide.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}
 */
// Automação do carrossel (opcional)
// setInterval(nextSlide, 3000); // Altere o valor (em milissegundos) para ajustar o tempo de transição automática

