const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
});

// Close the menu when clicking outside of it

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  // Open/Close menu on hamburger click
  toggle.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event from bubbling
    navList.classList.toggle('active');
    toggle.setAttribute('aria-expanded', navList.classList.contains('active'));
  });

  // Hide menu when clicking outside
  window.addEventListener('click', function() {
    navList.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Prevent closing when clicking inside nav menu
  navList.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Also close menu when a nav link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

