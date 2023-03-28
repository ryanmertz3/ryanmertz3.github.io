document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
      dropdown.querySelector('.dropbtn').addEventListener('click', function () {
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
