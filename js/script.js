const bodyMode = document.querySelector("body");
const headerMode = document.querySelector("header");
const headerTag = document.querySelectorAll("a");
const buttonSign = document.querySelector(".article-text-brand a");
const profileBg = document.querySelectorAll(".profile, .about-cards");
const footerMode = document.querySelector("footer");

function enableDarkMode() {
  // body 
  bodyMode.style.background = "#1d1919";
  bodyMode.style.color = "white";
  // header section
  headerMode.style.background = "#26547C";
  mode = document.querySelector(".logo a img").src = "assets/sun.png";
  for (let i = 0; i < headerTag.length; i++) {
    headerTag[i].style.color = "white";
  }
  // content section
  buttonSign.style.background = "#26547C";
  for (let i = 0; i < profileBg.length; i++) {
    profileBg[i].style.background = "#404E7C";
  }
  // footer section
  footerMode.style.background = "#26547C";
}

function disableDarkMode() {
  // body section
  bodyMode.style.background = "unset";
  bodyMode.style.color = "unset";
  // header section
  headerMode.style.background = "#97db4f";
  mode = document.querySelector(".logo a img").src = "assets/moon.png";
  for (let i = 0; i < headerTag.length; i++) {
    headerTag[i].style.color = "black";
  }
  // content section
  buttonSign.style.background = "#97db4f";
  buttonSign.style.color = "unset";
  for (let i = 0; i < profileBg.length; i++) {
    profileBg[i].style.background = "#dbd054";
  }
  // footer section
  footerMode.style.background = "#97db4f";
}

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  const darkModeStatus = localStorage.getItem("dark-mode");

  if (darkModeStatus === "enabled") {
    disableDarkMode();
    localStorage.setItem("dark-mode", "disabled");
  } else {
    enableDarkMode();
    localStorage.setItem("dark-mode", "enabled");
  }
});

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  }
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);

}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

showSlide(currentSlide);