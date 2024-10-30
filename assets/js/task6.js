// Получаем элементы с HTML-страницы
const pageInput = document.querySelector('#page-input');
const limitInput = document.querySelector('#limit-input');
const requestButton = document.querySelector('#request-button');

// Функция для проверки ввода пользователя
function checkInputs() {
    let page = pageInput.value;
    let limit = limitInput.value;

    if (!page || !limit) {
        return;
    }

    if (isNaN(page) || page < 1 || page > 10) {
        alert('Номер страницы вне диапазона от 1 до 10');
        return;
    }

    if (isNaN(limit) || limit < 1 || limit > 10) {
        alert('Лимит вне диапазона от 1 до 10');
        return;
    }

    // Если оба ввода в диапазоне, делаем запрос
    requestPage(page, limit);
}

// Функция для запроса данных с сервера
function requestPage(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            // Получаем список картинок
            const images = data.photos;

            // Отображаем список картинок на странице
            images.forEach(image => {
                const imageElement = document.createElement('img');
                imageElement.src = image.download_url;
                document.body.appendChild(imageElement);
            });

            // Сохраняем данные в localStorage для перезагрузки страницы
            localStorage.setItem('lastPage', page);
            localStorage.setItem('lastLimit', limit);
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
        });
}

// Привязываем событие клика к кнопке
requestButton.addEventListener('click', checkInputs);

// При загрузке страницы проверяем, есть ли данные в localStorage
if (localStorage.getItem('lastPage') && localStorage.getItem('lastLimit')) {
    requestPage(localStorage.getItem('lastPage'), localStorage.getItem('lastLimit'));
}