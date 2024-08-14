document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Altura del navbar (puedes ajustar según tu CSS si es necesario)
      const navbarHeight = document.querySelector('.header').offsetHeight;

      // Calcular la posición objetivo ajustada
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight;

      // Desplazarse hasta la posición ajustada
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
