// navbar scroll
const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-home');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navbar.classList.remove('navbar-colored');
      } else {
        navbar.classList.add('navbar-colored');
      }
    });
  }
}

// project filters
const filterProject = () => {
  const activeProject = document.querySelector('.project-select.active')
  document.querySelectorAll('.project').forEach((project) => {
    event.preventDefault()
    if (project.dataset.projectName === activeProject.dataset.projectName) {
      project.classList.remove ('d-none')
    } else {
      project.classList.add('d-none')
    }
  })
}

const toggleProject = () => {
  const buttons = document.querySelectorAll('.project-select')
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove('active')
      })
      button.classList.add('active')
      filterProject()
    })
  })
}

const initFilter = () => {
  document.addEventListener('DOMContentLoaded', () => {
    toggleProject();
  })
}

// scroll smooth
const scrollSmooth = () => {
  const targets = document.querySelectorAll(".scroll-smooth");
  targets.forEach((target) => {
    target.addEventListener("click", () => {
      let page = document.getElementById(target.dataset.value)
      page.scrollIntoView({behavior: "smooth", block: "start"});
    })
  })
}


scrollSmooth();
initUpdateNavbarOnScroll();
initFilter();
