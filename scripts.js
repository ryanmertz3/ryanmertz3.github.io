window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".header-content").classList.add("scrolled");
    document.querySelector(".skills").classList.add("scrolled");
    document.querySelector(".degrees").classList.add("scrolled");
    document.querySelector(".footer").classList.add("scrolled");
    document.querySelector(".rps").classList.add("scrolled");
    document.querySelectorAll(".dropdown-content").forEach(content => content.classList.add("scrolled"));
  } else {
    document.querySelector(".header-content").classList.remove("scrolled");
    document.querySelector(".skills").classList.remove("scrolled");
    document.querySelector(".degrees").classList.remove("scrolled");
    document.querySelector(".footer").classList.remove("scrolled");
    document.querySelector(".rps").classList.remove("scrolled");
    document.querySelectorAll(".dropdown-content").forEach(content => content.classList.remove("scrolled"));
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
      dropdown.querySelector('.dropdown-button').addEventListener('click', function () {
          const content = dropdown.querySelector('.dropdown-content');
          content.classList.toggle('show');
      });
  });

  window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropbtn')) {
          const openDropdowns = document.querySelectorAll('.dropdown-content.show');
          openDropdowns.forEach((openDropdown) => {
              openDropdown.classList.remove('show');
          });
      }
  });
});
