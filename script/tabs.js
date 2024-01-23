const projects = document.querySelectorAll('.tab-container');


projects.forEach(element => {
  element.addEventListener('click', () => {

    const project = element.querySelector('.more-container');
    const arrowIcon = element.querySelector('.tab__icon');
    if (project.classList.contains('more-container--animation')) {
      project.classList.remove('more-container--animation');
      arrowIcon.classList.remove('tab__icon--animation')
    }
    else {

      project.classList.add('more-container--animation');
      arrowIcon.classList.add('tab__icon--animation')
    }


  });
});