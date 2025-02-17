const elements = [
    {
        title: "Кнопка",
        imageUrl: "https://gazetazamoskvoreche.moscow/wp-content/uploads/sites/4/2022/08/abk7845-scaled-e1660546966872-768x581.jpg",
        link: "https://github.com/stanislavasal/diploma"
    },
    {
        title: "Ссылка",
        imageUrl: "",
        link: ""
    },
    {
        title: "Иконки",
        imageUrl: "",
        link: ""
    },
    {
        title: "Курсор",
        imageUrl: "",
        link: ""
    },
    {
        title: "Тултипы",
        imageUrl: "",
        link: ""
    },
    {
        title: "Индикатор загрузки",
        imageUrl: "",
        link: ""
    },
    {
        title: "Поле выбора файла",
        imageUrl: "",
        link: ""
    },
    {
        title: "Текстовое поле",
        imageUrl: "",
        link: ""
    },
    {
        title: "Список",
        imageUrl: "",
        link: ""
    },
    {
        title: "Выпадающий список",
        imageUrl: "",
        link: ""
    },
    {
        title: "Поле поиска",
        imageUrl: "",
        link: ""
    },
    {
        title: "Индикатор прогресса",
        imageUrl: "",
        link: ""
    },
    {
        title: "Оповещение",
        imageUrl: "",
        link: ""
    },
    {
        title: "Теги",
        imageUrl: "",
        link: ""
    },
    {
        title: "Ползунок диапазона",
        imageUrl: "",
        link: ""
    },
    {
        title: "Переключатель",
        imageUrl: "",
        link: ""
    },
    {
        title: "Тогл",
        imageUrl: "",
        link: ""
    },
    {
        title: "Фильтр",
        imageUrl: "",
        link: ""
    },
    {
        title: "Хлебные крошки",
        imageUrl: "",
        link: ""
    },
    {
        title: "Рейтинг",
        imageUrl: "",
        link: ""
    },
    {
        title: "Форма входа",
        imageUrl: "",
        link: ""
    },
    {
        title: "Меню-бар",
        imageUrl: "",
        link: ""
    },
    {
        title: "Гамбургер-меню",
        imageUrl: "",
        link: ""
    },
    {
        title: "Сайдбар",
        imageUrl: "",
        link: ""
    },
    {
        title: "Степпер",
        imageUrl: "",
        link: ""
    },
    {
        title: "Аккордеон",
        imageUrl: "",
        link: ""
    },
    {
        title: "Слайдер",
        imageUrl: "",
        link: ""
    },
    {
        title: "Табы",
        imageUrl: "",
        link: ""
    },
    {
        title: "Модальные окна",
        imageUrl: "",
        link: ""
    },
    {
        title: "Карточка",
        imageUrl: "",
        link: ""
    },
    {
        title: "Таймлайн",
        imageUrl: "",
        link: ""
    },
    {
        title: "Форма",
        imageUrl: "",
        link: ""
    },
    {
        title: "Система рекомендаций",
        imageUrl: "",
        link: ""
    },
    {
        title: "Хедер",
        imageUrl: "",
        link: ""
    },
    {
        title: "Футер",
        imageUrl: "",
        link: ""
    },
    {
        title: "Многошаговая форма",
        imageUrl: "",
        link: ""
    },
    {
        title: "Корзина покупок",
        imageUrl: "",
        link: ""
    },
    {
        title: "Система подписки",
        imageUrl: "",
        link: ""
    },
    {
        title: "Галерея изображений",
        imageUrl: "",
        link: ""
    },
    {
        title: "Лента контента",
        imageUrl: "",
        link: ""
    },
    {
        title: "Комментарии",
        imageUrl: "",
        link: ""
    },
    {
        title: "Система аутентификации",
        imageUrl: "",
        link: ""
    },
    {
        title: "Панель управления",
        imageUrl: "",
        link: ""
    }
];

const searchInput = document.querySelector('.search-input');
const mainContent = document.getElementById('mainContent');
const searchResults = document.getElementById('searchResults');
const searchCardsContainer = document.getElementById('searchCardsContainer');
const cover = document.querySelector('.cover');

searchInput.addEventListener('input', function (event) {
    const searchQuery = event.target.value.toLowerCase();

    if (searchQuery.length > 0) {
        mainContent.style.display = 'none';
        searchResults.style.display = 'flex';
        cover.style.display = 'none';

        const filteredElements = elements.filter(element =>
            element.title.toLowerCase().includes(searchQuery)
        );

        searchCardsContainer.innerHTML = '';
        filteredElements.forEach(element => {
            const cardLink = document.createElement('a');
            cardLink.href = element.link;
            cardLink.className = 'card';
            cardLink.style.textDecoration = 'none';

            cardLink.addEventListener('click', function(event) {
                if (!element.link) {
                    event.preventDefault();
                }
            });

            const cardImage = document.createElement('img');
            cardImage.className = 'cardimage';
            cardImage.src = element.imageUrl;

            const cardTitle = document.createElement('div');
            cardTitle.className = 'heading-xs';
            cardTitle.textContent = element.title;
            cardTitle.style.color = 'black';

            cardLink.appendChild(cardImage);
            cardLink.appendChild(cardTitle);
            searchCardsContainer.appendChild(cardLink);
        });
    } else {
        mainContent.style.display = 'flex';
        searchResults.style.display = 'none';
        cover.style.display = 'block';
    }
});