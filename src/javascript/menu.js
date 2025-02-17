const menuStructure = {
    'Маленькие элементы': [
        { title: 'Кнопка', link: '#' },
        { title: 'Ссылка', link: '#' },
        { title: 'Иконки', link: '#' },
        { title: 'Курсор', link: '#' },
        { title: 'Тултипы', link: '#' },
        { title: 'Индикатор загрузки', link: '#' },
        { title: 'Поле выбора файла', link: '#' },
        { title: 'Текстовое поле', link: '#' },
        { title: 'Список', link: '#' },
        { title: 'Выпадающий список', link: '#' },
        { title: 'Поле поиска', link: '#' },
        { title: 'Индикатор прогресса', link: '#' },
        { title: 'Оповещение', link: '#' },
        { title: 'Теги', link: '#' },
        { title: 'Ползунок диапазона', link: '#' },
        { title: 'Переключатель', link: '#' },
        { title: 'Тогл', link: '#' },
        { title: 'Фильтр', link: '#' },
        { title: 'Хлебные крошки', link: '#' },
        { title: 'Рейтинг', link: '#' }
    ],
    'Средние элементы': [
        { title: 'Форма входа', link: '#' },
        { title: 'Меню-бар', link: '#' },
        { title: 'Гамбургер-меню', link: '#' },
        { title: 'Сайдбар', link: '#' },
        { title: 'Степпер', link: '#' },
        { title: 'Аккордеон', link: '#' },
        { title: 'Слайдер', link: '#' },
        { title: 'Табы', link: '#' },
        { title: 'Модальные окна', link: '#' },
        { title: 'Карточка', link: '#' },
        { title: 'Таймлайн', link: '#' },
        { title: 'Форма', link: '#' },
        { title: 'Система рекомендаций', link: '#' }
    ],
    'Большие элементы': [
        { title: 'Хедер', link: '#' },
        { title: 'Футер', link: '#' },
        { title: 'Многошаговая форма', link: '#' },
        { title: 'Корзина покупок', link: '#' },
        { title: 'Система подписки', link: '#' },
        { title: 'Галерея изображений', link: '#' },
        { title: 'Лента контента', link: '#' },
        { title: 'Комментарии', link: '#' },
        { title: 'Система аутентификации', link: '#' },
        { title: 'Панель управления', link: '#' }
    ]
};

const textbookMenu = document.getElementById('textbook-menu');
textbookMenu.classList.add('menu-item');

const submenu = document.createElement('div');
submenu.className = 'submenu';
submenu.style.display = 'none'; 

for (const category in menuStructure) {
    const submenuItem = document.createElement('div');
    submenuItem.className = 'submenu-item';

    const categoryText = document.createElement('p');
    categoryText.textContent = category;
    
    if (category === 'Маленькие элементы') {
        categoryText.addEventListener('click', function() {
            window.location.href = 'elements/index-small.html'; 
        });
    } else if (category === 'Средние элементы') {
        categoryText.addEventListener('click', function() {
            window.location.href = 'elements/index-medium.html'; 
        });
    } else if (category === 'Большие элементы') {
        categoryText.addEventListener('click', function() {
            window.location.href = 'elements/index-large.html'; 
        });
    }
    
    submenuItem.appendChild(categoryText);

    const arrow = document.createElement('p');
    arrow.textContent = '↓';
    arrow.className = 'arrow';
    submenuItem.appendChild(arrow);

    const secondaryMenu = document.createElement('div');
    secondaryMenu.className = 'secondary-menu';

    menuStructure[category].forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.title;
        secondaryMenu.appendChild(link);
    });

    submenuItem.appendChild(secondaryMenu);
    submenu.appendChild(submenuItem);
}

textbookMenu.appendChild(submenu);

textbookMenu.addEventListener('mouseenter', function () {
    submenu.style.display = 'flex'; 
});

textbookMenu.addEventListener('mouseleave', function () {
    submenu.style.display = 'none'; 
    document.querySelectorAll('.secondary-menu').forEach(menu => {
        menu.style.display = 'none'; 
    });
});

const submenuItems = document.querySelectorAll('.submenu-item');
submenuItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const secondaryMenu = this.querySelector('.secondary-menu');
        document.querySelectorAll('.secondary-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        if (secondaryMenu) {
            secondaryMenu.style.display = 'block';
        }
    });
});