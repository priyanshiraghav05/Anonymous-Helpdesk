


// Toggle between sign in and sign up
function toggleForm() {
  const container = document.querySelector('.container');
  if (container) {
    container.classList.toggle('active');
  }
}

// Attach listeners once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Toggle links
  document.querySelectorAll('.toggle-link').forEach(function (el) {
  el.addEventListener('click', function (e) {
      e.preventDefault();
      toggleForm();
    });
  });

  // Sign In form -> redirect to anonymous.html
  const signinForm = document.querySelector('.signinBx form');
  if (signinForm) {
    signinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // In a real app, validate/authenticate here.
      window.location.href = 'anonymous.html';
    });
  }

  // Sign Up form -> simple client-side check then switch to sign in
  const signupForm = document.querySelector('.signupBx form');
  if (signupForm) {
   signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = signupForm.querySelectorAll('input[type="password"], input[type="text"]');
      const username = inputs[0] && inputs[0].value.trim();
      const pass1 = inputs[1] && inputs[1].value;
     const pass2 = inputs[2] && inputs[2].value;
      if (!username || !pass1 || pass1 !== pass2) {
        alert('Please enter a username and matching passwords.');
        return;
      }
      alert('Account created! Please sign in.');
      toggleForm();
    });
 }
});

