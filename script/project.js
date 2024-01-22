const projects = document.querySelectorAll('.project-container');

let currentOpen;

projects.forEach(element => {
  element.addEventListener('click', () => {

    const project = element.querySelector('.more-container');

    if (project.classList.contains('more-container--animation')) {
      project.classList.remove('more-container--animation');
    }
    else {

      if (currentOpen != null) {
        currentOpen.classList.remove('more-container--animation');
      }

      currentOpen = project;
      project.classList.add('more-container--animation');
    }


  });
});