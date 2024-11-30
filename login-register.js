// Toggle password visibility
document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirm-password');
  const toggleButton = document.querySelector('.show-password');
  const toggleButtonConfirm = document.querySelector('.show-confirm-password');

  toggleButton.addEventListener('click', () => {
    // Check the current type of the password field
    const type = passwordField.getAttribute('type');
    if (type === 'password') {
      passwordField.setAttribute('type', 'text');
      toggleButton.textContent = 'Hide';
    } else {
      passwordField.setAttribute('type', 'password');
      toggleButton.textContent = 'Show';
    }
  });

  toggleButtonConfirm.addEventListener('click', () => {
    const type = confirmPasswordField.getAttribute('type');
    if (type === 'password') {
      confirmPasswordField.setAttribute('type', 'text');
      toggleButtonConfirm.textContent = 'Hide';
    } else {
      confirmPasswordField.setAttribute('type', 'password');
      toggleButtonConfirm.textContent = 'Show';
    }
  });

});

// Close button functionality
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
});
