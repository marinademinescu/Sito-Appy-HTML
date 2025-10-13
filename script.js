// Dark / Light mode
const toggle = document.getElementById('dark-mode');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});



const videoTrigger = document.getElementById('video-trigger');
const video = document.querySelector('.hero-video');

videoTrigger.addEventListener('click', () => {
  if (video.classList.contains('active')) {
  video.classList.add('active');
    video.play();
  } else {

     video.pause();
    video.currentTime = 0;
    video.classList.remove('active');
  }
});
