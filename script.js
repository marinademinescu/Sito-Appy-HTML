// Dark / Light mode
const toggle = document.getElementById('dark-mode')
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked)
})


// video play
const video = document.querySelector('.hero-video')
const playBtn = document.querySelector('.video-play-btn')


playBtn.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();
  playBtn.style.display = 'none';
})

document.addEventListener('click', (e) => {

  if (!video.contains(e.target) && !playBtn.contains(e.target)) {
    if (video.style.display === 'block') {
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';
      playBtn.style.display = 'block';
    }
  }
})


// Hamburger toggle
const hamburger = document.getElementById("hamburger")
const mobileNav = document.getElementById("mobile-menu-wrapper")

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open")
  hamburger.classList.toggle("is-active")
  hamburger.innerHTML = hamburger.classList.contains("is-active")
    ? "<i class='bx bx-x'></i>"
    : "<i class='bx bx-menu'></i>"
})

// Mobile dropdown toggle
const mobileDropdownLinks = document.querySelectorAll(".mobile-menu-wrapper .submenu-mobile > a")

mobileDropdownLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const parent = link.parentElement
    if (parent.querySelector("ul")) {
      e.preventDefault()
      parent.classList.toggle("open")
    }
  })
})

// Carousel slide

const carousel = document.querySelector('.carousel-wrapper');
const slides = Array.from(carousel.children);
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');

let current = 0;

function updateCarousel() {
  slides.forEach((slide, i) => slide.classList.remove('active'))
  slides[current].classList.add('active')

  const slideWidth = slides[0].getBoundingClientRect().width + 20; 
  const viewportWidth = carousel.parentElement.offsetWidth;
  const offset = -current * slideWidth + (viewportWidth /4 - slideWidth / 2)

  carousel.style.transform = `translateX(${offset}px)`
}

prevBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
    updateCarousel();
})

nextBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length
    updateCarousel();
})

window.addEventListener('load', updateCarousel)
window.addEventListener('resize', updateCarousel)








// Video section
const buttons = document.querySelectorAll('.btn-video');
const sections = document.querySelectorAll('.video-body');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Rimuovi classe active da tutti i bottoni
    buttons.forEach(btn => btn.classList.remove('active'))
    // Aggiungi active al bottone cliccato
    button.classList.add('active')

  })
})


