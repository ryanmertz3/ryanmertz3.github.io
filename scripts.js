
  function toggleDropdown(id) {
    const dropdownContent = document.getElementById(id);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  }

  function initDropdowns() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach((button) => {
      button.addEventListener('click', () => {
        toggleDropdown(button.dataset.target);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initDropdowns);
