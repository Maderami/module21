// Получаем элементы с HTML-страницы
const pageInput = document.querySelector('#page-input');
const limitInput = document.querySelector('#limit-input');
const requestButton = document.querySelector('#request-button');

// Функция для проверки ввода пользователя
function checkInputs() {
    let page = parseInt(pageInput.value);
    let limit = parseInt(limitInput.value);

    if (isNaN(page) || page < 1 || page > 10) {
        alert('Номер страницы вне диапазона от 1 до 10');
        return false;
    }

    if (isNaN(limit) || limit < 1 || limit > 10) {
        alert('Лимит вне диапазона от 1 до 10');
        return false;
    }

    return true;
}

// Функция для выполнения запроса и отображения картинок
function requestData() {
    if (checkInputs()) {
        let page = pageInput.value;
        let limit = limitInput.value;

        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                let images = data.data;
                let output = '';

                images.forEach(image => {
                    output += `<img src="${image.url}" alt="${image.author}" style="width: 100px">`;
                });

                document.querySelector('#image-list').innerHTML = output;
            });
    }
}

// Функция для сохранения последнего запроса в localStorage
function saveData() {
    let page = pageInput.value;
    let limit = limitInput.value;

    localStorage.setItem('lastPage', page);
    localStorage.setItem('lastLimit', limit);
}

// Функция для загрузки последнего запроса при перезагрузке страницы
function loadData() {
    let lastPage = localStorage.getItem('lastPage');
    let lastLimit = localStorage.getItem('lastLimit');

    if (lastPage && lastLimit) {
        pageInput.value = lastPage;
        limitInput.value = lastLimit;
        requestData();
    }
}

// Привязка событий к элементам
requestButton.addEventListener('click', requestData);
window.addEventListener('load', loadData);



