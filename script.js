// Dark / Light mode
const toggle = document.getElementById('dark-mode')
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked)
})



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
  hamburger.classList.toggle("is-active")      // per trasformare l'icona in X
 hamburger.innerHTML= hamburger.classList.contains("is-active")
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


