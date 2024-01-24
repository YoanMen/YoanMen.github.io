const body = document.getElementById('body');
const btn = document.querySelector('.theme__btn');


btn.addEventListener('click', () => {
  body.classList.contains('light-mode') ? body.classList.remove('light-mode') : body.classList.add('light-mode');


})


