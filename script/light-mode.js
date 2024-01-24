const body = document.getElementById('body');
const btn = document.querySelector('.theme__btn');



if (window.matchMedia("(prefers-color-scheme: light)").matches)
  body.classList.add('light-mode')


btn.addEventListener('click', () => {
  body.classList.contains('light-mode') ? body.classList.remove('light-mode') : body.classList.add('light-mode');
})




