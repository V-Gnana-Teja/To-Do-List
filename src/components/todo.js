document.addEventListener('DOMContentLoaded', function() {

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling;
      if (this.checked) {
        label.classList.add('checked');
      } else {
        label.classList.remove('checked');
      }
    });
  });

  const deleteButtons = document.querySelectorAll('.todo-card button[type="submit"]');

  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const listItem = this.parentElement;
      const checkbox = listItem.querySelector('input[type="checkbox"]');
      const label = listItem.querySelector('label');

      // Remove the strikethrough and uncheck the checkbox
      label.classList.remove('checked');
      checkbox.checked = false;
    });
  });

  const clearCompletedButton = document.querySelector('.clear-completed button[type="submit"]');
  clearCompletedButton.addEventListener('click', function() {
    // Uncheck all checkboxes
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
      const label = checkbox.nextElementSibling;
      label.classList.remove('checked');
    });
  });
});
