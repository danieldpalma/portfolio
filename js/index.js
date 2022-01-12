document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

let textH3 = document.getElementById('text_h3')
console.log(document.body.clientWidth)

if(document.body.clientWidth >= 414) {
  textH3.innerHTML = '<a class="link_instagram" href="https://www.instagram.com/daniel.dpalma/" target="_blank" >Daniel Dario Palma</a> | 22 anos | Campinas, SP'
} else {
  textH3.innerHTML = '<a class="link_instagram" href="https://www.instagram.com/daniel.dpalma/" target="_blank" >Daniel Dario Palma</a> | 22 anos Campinas, SP'
}


