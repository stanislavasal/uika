document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('#headerlink');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      this.classList.toggle('clicked');
    });
  });
});