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

    if ((isNaN(limit) || limit < 1 || limit > 10) && (isNaN(page) || page < 1 || page > 10)) {
        alert('Номер страницы и лимит вне диапазона от 1 до 10');
        return false;
    }
    return true;
}
//Получение локальных изображений
function getImageLocal(){
    let arrImage = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg'
    ];
    return arrImage;
}

// Функция для выполнения запроса и отображения картинок
async function requestAPIData() {
    if (checkInputs()) {
        let page = pageInput.value;
        let limit = limitInput.value;
        saveData();
        let response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                let images = data.data;
                let output = '';

                images.forEach(image => {
                    output += `<img src="${image.url}" alt="${image.author}" style="width: 100px">`;
                    console.log(image.url);
                });
                document.querySelector('#image-list').appendChild(output);
            }).catch(mError => console.log('Ошибка подключения'));
        if (response){
            return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
                .then(response => response.json())
                .then(data => {
                    let images = data.data;
                    let output = '';

                    images.forEach(image => {
                        output += `<img src="${image.url}" alt="${image.author}" style="width: 100px">`;
                        console.log(image.url);
                    });
                    document.querySelector('#image-list').appendChild(output);
                }).catch(mError => console.log('Ошибка подключения'));
        }else {
            return null;
        }


    }

}
function requestLocalDataFilter(){
    if(checkInputs()){
        let outputLocal = '';
        for(let index = parseInt(pageInput.value) - 1; index < limitInput.value; index++){

            outputLocal += `<img src="assets/image/${getImageLocal()[index]}" alt="" style="width: 100px">`;
            document.querySelector('#image-list').innerHTML = outputLocal;

        }
    }
}

function requestLocalDataAll(){
    if(checkInputs()){
        let outputLocal = '';
        for(let index = 0; index < getImageLocal().length; index++){
            outputLocal += `<img src="assets/image/${getImageLocal()[index]}" alt="" style="width: 100px">`;
            document.querySelector('#image-list').innerHTML = outputLocal;
        }
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
        requestAPIData().then(r => r);
        requestLocalDataFilter();
    }else{
        requestLocalDataAll();
    }
}

// Привязка событий к элементам
requestButton.addEventListener('click', requestAPIData || requestLocalDataFilter);
window.addEventListener('load', loadData);



