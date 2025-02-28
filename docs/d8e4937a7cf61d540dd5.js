document.addEventListener('DOMContentLoaded', function () {
  function updateBreadcrumbsArrows() {
    if (window.innerWidth <= 743) {
      var arrows = document.querySelectorAll('.breadcrumbs .heading-xxs');
      arrows.forEach(function (arrow) {
        if (arrow.textContent === '→') {
          arrow.textContent = '↓';
        }
      });
    } else {
      var _arrows = document.querySelectorAll('.breadcrumbs .heading-xxs');

      _arrows.forEach(function (arrow) {
        if (arrow.textContent === '↓') {
          arrow.textContent = '→';
        }
      });
    }
  }

  updateBreadcrumbsArrows();
  window.addEventListener('resize', updateBreadcrumbsArrows);
});