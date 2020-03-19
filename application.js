// navbar scroll
const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-home');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navbar.classList.remove('navbar-colored');
      } else {
        navbar.classList.add('navbar-colored');
      }
    });
  }
}

initUpdateNavbarOnScroll();
