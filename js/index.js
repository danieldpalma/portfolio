// const instagram = '<a class="link_instagram" href="https://www.instagram.com/daniel.dpalma/" target="_blank" >Daniel Dario Palma</a>'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// let textH3 = document.getElementById('text_h3')
// console.log(document.body.clientWidth)

// if(document.body.clientWidth > 390) {
//   textH3.innerHTML =  `${instagram} | 22 anos<br>Campinas, SP`
// } else {
//   textH3.innerHTML =  `${instagram} | 22 anos<br>Campinas, SP`
// }


