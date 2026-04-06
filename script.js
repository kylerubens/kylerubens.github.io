const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('navbar-id');
const projectsButton = document.getElementById('projects-button');
// const resumePreview = document.getElementById('resume-preview-id');

hamburger.addEventListener('click', () => {
  // resumePreview.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

projectsButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});