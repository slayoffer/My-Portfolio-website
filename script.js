// toggle button

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linkContainer.classList.toggle('show');
})

// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(ele => ele.classList.remove('active'));
    link.classList.add('active');
  })
})

// creating dynamic project card

const projectContainter = document.querySelector('.project-container');

projects.forEach(project => {
  projectContainter.innerHTML += `
  <div class="project-card" data-tags="#all, ${project.tags}">
        <img class="project-image" src="${project.image}" alt="project">
        <div class="content">
          <a href="${project.link}" target="_blank"><h2 class="project-name">${project.name}</h2></a>
          <span class="tags">${project.tags}</span>
        </div>
      </div>
  `;
})

// filters

const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
    let id = filterBtn.getAttribute('id');
    let projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      if(card.getAttribute('data-tags').includes(id)){
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    })
    filters.forEach(btn => btn.classList.remove('active'));
    filterBtn.classList.add('active');
  })
})

window.addEventListener('scroll', () => {
  if(scrollY > 0 && scrollY < 910) {
    links.forEach(ele => ele.classList.remove('active'));
    links[0].classList.add('active');
  }
  if(scrollY > 910 && scrollY < 2620) {
    links.forEach(ele => ele.classList.remove('active'));
    links[1].classList.add('active');
  }
  if(scrollY > 2620 && scrollY < 3429) {
    links.forEach(ele => ele.classList.remove('active'));
    links[2].classList.add('active');
  }
  if(scrollY >= 3429) {
    links.forEach(ele => ele.classList.remove('active'));
    links[3].classList.add('active');
  }
})