var currentSortType = null;
var isAscending = true;

function getCards() {
  return Array.from(document.querySelectorAll('.card'));
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }

  return array;
}

function sortArticles(type) {
  var container = document.getElementById('articlesContainer');
  var cards = getCards();
  cards.forEach(function (card) {
    return card.style.display = '';
  });

  if (currentSortType === type) {
    isAscending = !isAscending;
  } else {
    currentSortType = type;
    isAscending = true;
  }

  updateSortingIcons();
  cards.sort(function (a, b) {
    var valueA = parseInt(a.dataset[type]);
    var valueB = parseInt(b.dataset[type]);
    return isAscending ? valueA - valueB : valueB - valueA;
  });
  container.innerHTML = '';
  cards.forEach(function (card) {
    return container.appendChild(card);
  });
  applyVisibilityLimit();
}

function updateSortingIcons() {
  var complexityArrow = document.querySelector('.filter:nth-child(1) .heading-xxs:last-child');
  var popularityArrow = document.querySelector('.filter:nth-child(2) .heading-xxs:last-child');
  complexityArrow.textContent = currentSortType === 'complexity' ? isAscending ? '↑' : '↓' : '↓';
  popularityArrow.textContent = currentSortType === 'popularity' ? isAscending ? '↑' : '↓' : '↓';
}

function applyVisibilityLimit() {
  var cards = getCards();
  cards.forEach(function (card, index) {
    if (index >= visibleCards) {
      card.style.display = 'none';
    } else {
      card.style.display = '';
    }
  });
  var loadMoreButton = document.getElementById('loadMoreButton');
  loadMoreButton.style.display = visibleCards >= cards.length ? 'none' : '';
}

var visibleCards = 6;
document.addEventListener('DOMContentLoaded', function () {
  var complexityFilter = document.querySelector('.filter:nth-child(1)');
  var popularityFilter = document.querySelector('.filter:nth-child(2)');
  var container = document.getElementById('articlesContainer');
  var loadMoreButton = document.getElementById('loadMoreButton');
  var cards = getCards();
  shuffleArray(cards);
  container.innerHTML = '';
  cards.forEach(function (card) {
    return container.appendChild(card);
  });
  applyVisibilityLimit();
  complexityFilter.addEventListener('click', function () {
    return sortArticles('complexity');
  });
  popularityFilter.addEventListener('click', function () {
    return sortArticles('popularity');
  });
  complexityFilter.style.cursor = 'pointer';
  popularityFilter.style.cursor = 'pointer';
  loadMoreButton.addEventListener('click', function () {
    visibleCards += 6;
    applyVisibilityLimit();
  });
});