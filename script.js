// Menu toggle functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section functionality
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
};
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const loadingDots = document.getElementById("loading-dots");
    const progress = document.getElementById("progress");
    const progressPercentage = document.getElementById("progress-percentage");
  
    let dots = 0;
    let progressWidth = 0;
  
    // Animate dots
    const dotsInterval = setInterval(() => {
      dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3 dots
      loadingDots.textContent = '.'.repeat(dots);
    }, 500);
  
    // Simulate progress bar
    const progressInterval = setInterval(() => {
      progressWidth += 21; // Increment progress by 21%
      progress.style.width = `${progressWidth}%`;
      progressPercentage.textContent = `${progressWidth}%`;
  
      if (progressWidth >= 100) {
        clearInterval(progressInterval); // Stop progress bar
        clearInterval(dotsInterval); // Stop dots animation
  
        // Fade out the preloader
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }, 250); // Adjust timing to synchronize with the experience
  });
  