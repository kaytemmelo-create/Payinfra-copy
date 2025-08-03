const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
});


