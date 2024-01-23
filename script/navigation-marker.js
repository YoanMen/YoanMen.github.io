const marker = document.getElementById('marker-menu');
const items = document.querySelectorAll('.menu-list__item');


items.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();


    const targetId = element.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = window.innerHeight / 2 - 100;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});


let currentSection;

window.addEventListener('resize', function () {
  getCurrentSection();

});

window.addEventListener('click', function () {
  getCurrentSection();
});

window.addEventListener('scroll', function () {
  getCurrentSection();
});




function getCurrentSection() {

  const sections = document.querySelectorAll('section');
  let current = null;
  for (let index = 0; index < sections.length; index++) {

    let rect = sections[index].getBoundingClientRect();


    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      current = index;

      marker.style.left = items[current].offsetLeft + 'px';
      marker.style.width = items[current].offsetWidth + 'px';
    }


  }

  if (current == null) {
    marker.style.width = 0 + 'px';

  }


}