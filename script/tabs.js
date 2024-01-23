const projects = document.querySelectorAll('.tab-container');


projects.forEach(element => {
  element.addEventListener('click', () => {

    const project = element.querySelector('.more-container');

    if (project.classList.contains('more-container--animation')) {
      project.classList.remove('more-container--animation');

    }
    else {

      project.classList.add('more-container--animation');
    }


  });
});