const burgerIcon = document.getElementById('burger-icon');
const popup = document.getElementById('popup');

const menuStructure = {
    'Маленькие элементы': [
        { title: 'Кнопка', link: '../articles/index1.html' },
        { title: 'Ссылка', link: '../articles/index2.html' },
        { title: 'Иконки', link: '../articles/index3.html' },
        { title: 'Курсор', link: '../articles/index4.html' },
        { title: 'Тултипы', link: '../articles/index5.html' },
        { title: 'Индикатор загрузки', link: '../articles/index6.html' },
        { title: 'Поле выбора файла', link: '../articles/index7.html' },
        { title: 'Текстовое поле', link: '../articles/index8.html' },
        { title: 'Список', link: '../articles/index9.html' },
        { title: 'Выпадающий список', link: '../articles/index10.html' },
        { title: 'Поле поиска', link: '../articles/index11.html' },
        { title: 'Индикатор прогресса', link: '../articles/index12.html' },
        { title: 'Оповещение', link: '../articles/index13.html' },
        { title: 'Теги', link: '../articles/index14.html' },
        { title: 'Ползунок диапазона', link: '../articles/index15.html' },
        { title: 'Переключатель', link: '../articles/index16.html' },
        { title: 'Тогл', link: '../articles/index17.html' },
        { title: 'Фильтр', link: '../articles/index18.html' },
        { title: 'Хлебные крошки', link: '../articles/index19.html' },
        { title: 'Рейтинг', link: '../articles/index20.html' }
    ],
    'Средние элементы': [
        { title: 'Форма входа', link: '../articles/index21.html' },
        { title: 'Меню-бар', link: '../articles/index22.html' },
        { title: 'Гамбургер-меню', link: '../articles/index23.html' },
        { title: 'Сайдбар', link: '../articles/index24.html' },
        { title: 'Степпер', link: '../articles/index25.html' },
        { title: 'Аккордеон', link: '../articles/index26.html' },
        { title: 'Слайдер', link: '../articles/index27.html' },
        { title: 'Табы', link: '../articles/index28.html' },
        { title: 'Модальные окна', link: '../articles/index29.html' },
        { title: 'Карточка', link: '../articles/index30.html' },
        { title: 'Таймлайн', link: '../articles/index31.html' },
        { title: 'Форма', link: '../articles/index32.html' },
        { title: 'Система рекомендаций', link: '../articles/index33.html' }
    ],
    'Большие элементы': [
        { title: 'Хедер', link: '../articles/index34.html' },
        { title: 'Футер', link: '../articles/index35.html' },
        { title: 'Многошаговая форма', link: '../articles/index36.html' },
        { title: 'Корзина покупок', link: '../articles/index37.html' },
        { title: 'Система подписки', link: '../articles/index38.html' },
        { title: 'Галерея изображений', link: '../articles/index39.html' },
        { title: 'Лента контента', link: '../articles/index40.html' },
        { title: 'Комментарии', link: '../articles/index41.html' },
        { title: 'Система аутентификации', link: '../articles/index42.html' },
        { title: 'Панель управления', link: '../articles/index43.html' }
    ]
};

function createMenuContent() {
    popup.innerHTML = '';
    
    const mainLinks = document.createElement('div');
    mainLinks.className = 'burger-main-links';
    
    const mainNavLinks = [
        { text: 'Главная', href: '../index.html' },
        { text: 'О нас', href: '../additions/index.html' },
        { text: 'Учебник', href: '../textbook/index.html' },
        { text: 'Полезные ресурсы', href: '../additions/index1.html' }
    ];
    
    mainNavLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.href;
        linkElement.textContent = link.text;
        linkElement.className = 'heading-xs';
        mainLinks.appendChild(linkElement);
    });
    
    popup.appendChild(mainLinks);
    
    const menuContainer = document.createElement('div');
    menuContainer.className = 'burger-menu-container';
    
    for (const category in menuStructure) {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'burger-category-container';
        
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'burger-category-header';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'heading-xs';
        categoryTitle.textContent = category;
        
        categoryTitle.addEventListener('click', function() {
            let url = '';
            if (category === 'Маленькие элементы') {
                url = '../elements/index-small.html';
            } else if (category === 'Средние элементы') {
                url = '../elements/index-medium.html';
            } else if (category === 'Большие элементы') {
                url = '../elements/index-large.html';
            }
            window.location.href = url;
        });
        
        const arrow = document.createElement('div');
        arrow.className = 'burger-arrow heading-xs';
        arrow.textContent = '↓';
        
        categoryHeader.appendChild(categoryTitle);
        categoryHeader.appendChild(arrow);
        categoryContainer.appendChild(categoryHeader);
        
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'burger-submenu-container';
        itemsContainer.style.display = 'none';
        
        const items = menuStructure[category];
        items.forEach(item => {
            const itemLink = document.createElement('a');
            itemLink.href = item.link;
            itemLink.textContent = item.title;
            itemLink.className = 'heading-xs';
            itemsContainer.appendChild(itemLink);
        });
        
        categoryContainer.appendChild(itemsContainer);
        menuContainer.appendChild(categoryContainer);
        
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            if (itemsContainer.style.display === 'none') {
                itemsContainer.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            } else {
                itemsContainer.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
    
    popup.appendChild(menuContainer);
}

burgerIcon.addEventListener('click', () => {
    if (popup.style.display === 'none' || popup.style.display === '') {
        createMenuContent();
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
});

popup.addEventListener('wheel', function(e) {
    e.stopPropagation();
});