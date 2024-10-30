document.getElementById("theme-toggle").addEventListener("click", function () {
  const body = document.body;

  // Toggle between light and dark themes
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Toggle the icon class based on the theme
  if (body.classList.contains("dark-theme")) {
    this.classList.remove("fa-moon");
    this.classList.add("fa-sun");
  } else {
    this.classList.remove("fa-sun");
    this.classList.add("fa-moon");
  }
});

AOS.init();

// to-top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// on scroll progress bar
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-line").forEach(function (element) {
    if (window.pageYOffset > 1400) {
      element.classList.add("slides");
    } else {
      element.classList.remove("slides");
    }
  });
});

// load more btn
const projects = document.querySelectorAll(".project-box");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// Function to hide all projects except
function initializeProjects() {
  projects.forEach((project, index) => {
    if (index > 0) {
      project.style.display = "none";
    }
  });
}

// Function to show hidden projects when the button is clicked
function showProjects() {
  projects.forEach((project, index) => {
    if (index > 0) {
      project.style.display = "flex";
    }
  });
  loadMoreBtn.style.display = "none";
  AOS.refresh();
}

// Initialize project visibility on page load
initializeProjects();

// Attach event listener to Load More button
loadMoreBtn.addEventListener("click", showProjects);
