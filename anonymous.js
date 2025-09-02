function loginPage() {
    var destinationURL = "signin.html";
    window.location.href = destinationURL;
}

// Enhance navbar interactions
document.addEventListener('DOMContentLoaded', function(){
  var loginBtn = document.querySelector('.loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function(){
      window.location.href = 'signin.html';
    });
  }

  var toggle = document.querySelector('.nav .toggle');
  var links = document.querySelector('.nav .links');
  if (toggle && links) {
    toggle.addEventListener('click', function(){
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        links.classList.remove('open');
      });
    });
  }
});