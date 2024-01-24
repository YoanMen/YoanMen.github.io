export { getJson };


const techColor = {
  'flutter': '#2eb2ee',
  'dart': '#00b4ab',
  'html': '#da5e3fff',
  'css': '#e34c26ff',
  'php': '#4f5d95ff',
  'js': '#f1e05aff'
}

const sectionProjects = document.getElementById('projects-section').children[0];
const sectionAbout = document.getElementById('about-section').children[0].children[1]
const sectionBlog = document.getElementById('blog-section').children[0];

async function getJson() {

  const requestJson = '../data.json';
  const request = new Request(requestJson);
  const response = await fetch(request);
  const data = await response.json();


  sectionAbout.innerHTML = data['about']['content'];

  for (const project of data['projects']) {
    createProject(project);
  }
  for (const blog of data['Blog']) {

    createBlog(blog)
  }
}



function setTechList(data) {
  let tech = '';
  if (data != null) {


    data.forEach(element => {
      let str = element;
      str = str.charAt(0).toUpperCase() + str.slice(1);
      tech += `
              <li class="tech-list__item">
                <div class="tech-list__icon" style="background-color: ${techColor[element]};"></div>
                <label>${str}</label>
              </li>
        `
    });
  }

  return tech;
}

function setImg(data) {
  let img = '';

  if (data != null) {
    data.forEach(element => {
      img += `
      <img class="more-container__content--img"
      src="${element}"
      alt="">
      `
    });
  }

  return img;
}

function setLinkList(data) {
  let links = '';

  if (data != null) {
    if (data['github'].length != 0) {
      links += `
                  <li>
                  <a class="button " href="${data['github']}" target="_blank">
                    <span class="iconify"
                      data-icon="mdi-github">
                    </span>
                    Github
                  </a>
                </li>          
          `
    }
    if (data['appStore'].length != 0) {
      links += `
                <li>
                <a class="button " href="${data['appStore']}" target="_blank">
                  <span class="iconify"
                    data-icon="mdi-apple">
                  </span>
                  AppStore
                </a>
              </li>          
`
    }
    if (data['android'].length != 0) {
      links += `
                <li>
                <a class="button " href="${data['android']}" target="_blank">
                  <span class="iconify"
                    data-icon="mdi-android">
                  </span>
                  PlayStore
                </a>
              </li>          
          `
    }
    if (data['external'].length != 0) {
      links += `
                <li>
                <a class="button " href="${data['external']}" target="_blank">
                  <span class="iconify"
                    data-icon="mdi-link-variant">
                  </span>
                  External
                </a>
              </li>          
              `
    }
  }

  return links;
}



function createProject(data) {
  const article = document.createElement('article');

  article.classList.add('tab-container');
  sectionProjects.appendChild(article);

  const content = `
                <div class="tab__information">
                <h3 class="tab__name">${data['title']}</h3>
                <div class="tab__desc">
                  <div>
                    <p>
                    ${data['description']}
                    </p>
                    <ul class="project__tech-list">
                   ${setTechList(data['tech'])}           
                    </ul>
                  </div>
                  <div class="tab__icon ">
                    <span class="iconify " data-icon="mdi-chevron-down"></span>
                  </div>
                </div>
                <div class="more-container ">
                  <ul class="more-container__links">
                   ${setLinkList(data['links'])}
                  </ul>
                  <hr>
                  <div class="more-container__content">
                    <p>                    
                    ${data['content']}
                    </p>
                    ${setImg(data['img'])}
                  </div>
                </div>
              </div>
  `
  article.innerHTML = content;

}


function createBlog(data) {
  if (data['title'] == '') {
    return;
  }
  const article = document.createElement('article');

  article.classList.add('tab-container');
  sectionBlog.appendChild(article);

  const content = `
                  <div class="tab__information">
                  <h3 class="tab__name tab__name--white">${data['title']}</h3>
                  <div class="tab__desc">
                    <p>${data['description']}
                    </p>
                    <div class="tab__icon">
                      <span class="iconify " data-icon="mdi-chevron-down"></span>
                    </div>
                  </div>
                  <div class="more-container ">
                    <hr>
                    <div class="more-container__content ">
                      <p>
                      ${data['content']}                      
                      </p>
                    </div>
                  </div>
                </div>`


  article.innerHTML = content;
}