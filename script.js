// Dark / Light mode
const toggle = document.getElementById('dark-mode')
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked)
})


// video play
const video = document.querySelector('.hero-video')

video.addEventListener('click', () => {
  if (video.classList.contains('active')) {
    video.classList.add('active')
    video.play()
  } else {

    video.pause()
    video.currentTime = 0
    video.classList.remove('active')
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
const track = document.querySelector('.carousel-wrapper');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');

let current = 0;

function updateCarousel() {
  slides.forEach((slide, i) => slide.classList.remove('active'));
  
  slides[current].classList.add('active');

  // calcola l'offset per centrare la slide attiva
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // + gap
  const viewportWidth = track.parentElement.offsetWidth;
  const offset = -current * slideWidth + (viewportWidth / 2 - slideWidth / 2);

  track.style.transform = `translateX(${offset}px)`;
}

// loop infinito
prevBtn.addEventListener('click', () => {
  current = (current === 0) ? slides.length - 1 : current - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  updateCarousel();
});

// inizializza
updateCarousel();



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