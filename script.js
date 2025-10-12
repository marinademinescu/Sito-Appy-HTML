// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// DARK/LIGHT THEME
const themeSwitch = document.getElementById('dark-mode');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
