document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbarScroll');
    const scrolled = window.scrollY > 50; /* Change the scroll threshold as needed */
  
    if (scrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });  