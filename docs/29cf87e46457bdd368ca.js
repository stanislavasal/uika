var articles = [{
  title: "Кнопка",
  imageUrl: "https://gazetazamoskvoreche.moscow/wp-content/uploads/sites/4/2022/08/abk7845-scaled-e1660546966872-768x581.jpg",
  link: "",
  complexity: 1,
  popularity: 90
}, {
  title: "Ссылка",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 80
}, {
  title: "Иконки",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 60
}, {
  title: "Курсор",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 90
}, {
  title: "Тултипы",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 50
}, {
  title: "Индикатор загрузки",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 10
}, {
  title: "Поле выбора файла",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 10
}, {
  title: "Текстовое поле",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 90
}, {
  title: "Список",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 80
}, {
  title: "Выпадающий список",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 30
}, {
  title: "Поле поиска",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 90
}, {
  title: "Индикатор прогресса",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 60
}, {
  title: "Оповещение",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 50
}, {
  title: "Теги",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 70
}, {
  title: "Ползунок диапазона",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 10
}, {
  title: "Переключатель",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 20
}, {
  title: "Тогл",
  imageUrl: "",
  link: "",
  complexity: 1,
  popularity: 20
}, {
  title: "Фильтр",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 80
}, {
  title: "Хлебные крошки",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 70
}, {
  title: "Рейтинг",
  imageUrl: "",
  link: "",
  complexity: 2,
  popularity: 70
}, {
  title: "Форма входа",
  imageUrl: "",
  link: "",
  complexity: 3,
  popularity: 90
}, {
  title: "Меню-бар",
  imageUrl: "",
  link: "",
  complexity: 3,
  popularity: 90
}, {
  title: "Гамбургер-меню",
  imageUrl: "",
  link: "",
  complexity: 3,
  popularity: 60
}, {
  title: "Сайдбар",
  imageUrl: "",
  link: "",
  complexity: 3,
  popularity: 80
}, {
  title: "Степпер",
  imageUrl: "",
  link: "",
  complexity: 3,
  popularity: 20
}, {
  title: "Аккордеон",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 40
}, {
  title: "Слайдер",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 60
}, {
  title: "Табы",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 30
}, {
  title: "Модальные окна",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 30
}, {
  title: "Карточка",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 90
}, {
  title: "Таймлайн",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 40
}, {
  title: "Форма",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 70
}, {
  title: "Система рекомендаций",
  imageUrl: "",
  link: "",
  complexity: 4,
  popularity: 40
}, {
  title: "Хедер",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 80
}, {
  title: "Футер",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 80
}, {
  title: "Многошаговая форма",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 70
}, {
  title: "Корзина покупок",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 50
}, {
  title: "Система подписки",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 30
}, {
  title: "Галерея изображений",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 70
}, {
  title: "Лента контента",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 70
}, {
  title: "Комментарии",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 60
}, {
  title: "Система аутентификации",
  imageUrl: "",
  link: "",
  complexity: 5,
  popularity: 10
}, {
  title: "Панель управления",
  imageUrl: "",
  link: "",
  complexity: 6,
  popularity: 10
}];
var currentSortType = null;
var isAscending = true;
var filteredArticles = [];

function filterArticlesByFeedType() {
  var feedElement = document.getElementById('articlesContainer');

  if (feedElement.classList.contains('smallfeed')) {
    return articles.filter(function (article) {
      return article.complexity <= 2;
    });
  } else if (feedElement.classList.contains('mediumfeed')) {
    return articles.filter(function (article) {
      return article.complexity >= 3 && article.complexity <= 4;
    });
  } else if (feedElement.classList.contains('largefeed')) {
    return articles.filter(function (article) {
      return article.complexity >= 5;
    });
  }

  return articles;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

function sortArticles(type) {
  var container = document.getElementById('articlesContainer');
  var currentDisplayCount = container.children.length;
  container.innerHTML = '';
  currentIndex = 0;

  if (currentSortType === type) {
    isAscending = !isAscending;
  } else {
    currentSortType = type;
    isAscending = true;
  }

  updateSortingIcons();
  filteredArticles.sort(function (a, b) {
    var valueA = a[type];
    var valueB = b[type];
    return isAscending ? valueA - valueB : valueB - valueA;
  });
  var batchesToLoad = Math.ceil(currentDisplayCount / articlesPerPage);

  for (var i = 0; i < batchesToLoad; i++) {
    loadArticles();
  }
}

function updateSortingIcons() {
  var complexityArrow = document.querySelector('.filter:nth-child(1) .heading-xxs:last-child');
  var popularityArrow = document.querySelector('.filter:nth-child(2) .heading-xxs:last-child');
  complexityArrow.textContent = currentSortType === 'complexity' ? isAscending ? '↑' : '↓' : '↓';
  popularityArrow.textContent = currentSortType === 'popularity' ? isAscending ? '↑' : '↓' : '↓';
}

document.addEventListener('DOMContentLoaded', function () {
  var complexityFilter = document.querySelector('.filter:nth-child(1)');
  var popularityFilter = document.querySelector('.filter:nth-child(2)');
  complexityFilter.addEventListener('click', function () {
    return sortArticles('complexity');
  });
  popularityFilter.addEventListener('click', function () {
    return sortArticles('popularity');
  });
  complexityFilter.style.cursor = 'pointer';
  popularityFilter.style.cursor = 'pointer';
});
var currentIndex = 0;
var articlesPerPage = 6;

function loadArticles() {
  var articlesContainer = document.getElementById('articlesContainer');
  var articlesToLoad = filteredArticles.slice(currentIndex, currentIndex + articlesPerPage);
  articlesToLoad.forEach(function (article) {
    var cardLink = document.createElement('a');
    cardLink.href = article.link;
    cardLink.className = 'card';
    cardLink.style.textDecoration = 'none';
    var cardImage = document.createElement('img');
    cardImage.className = 'cardimage';
    cardImage.src = article.imageUrl;
    var cardTitle = document.createElement('div');
    cardTitle.className = 'heading-xs';
    cardTitle.textContent = article.title;
    cardTitle.style.color = 'black';
    cardLink.appendChild(cardImage);
    cardLink.appendChild(cardTitle);
    articlesContainer.appendChild(cardLink);
  });
  currentIndex += articlesPerPage;

  if (currentIndex >= filteredArticles.length) {
    document.getElementById('loadMoreButton').style.display = 'none';
  } else {
    document.getElementById('loadMoreButton').style.display = 'block';
  }
}

filteredArticles = filterArticlesByFeedType();
shuffleArray(filteredArticles);
document.getElementById('loadMoreButton').addEventListener('click', loadArticles);
loadArticles();