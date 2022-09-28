const btnMobile = document.getElementById('btn-mobile');
const links = document.getElementById('menu');

const toggleMenu = (event) => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  links.addEventListener('click', toggleMenu);
};

btnMobile.addEventListener('click', toggleMenu);
