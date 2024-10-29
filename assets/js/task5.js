// Получаем значение из поля ввода
const inputTask = document.getElementById('inputForEnt');

// Кнопка для получения списка задач
const buttonTask = document.getElementById('btnSearchTask');

// Элемент для вывода списка задач
const listTask5 = document.getElementById('ulForList');
const usrid = document.getElementById('usrid');
// Функция для получения списка задач
function getTasks(userId) {

    usrid.innerText = userId;
    listTask5.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(datas => {
            if (datas.length > 0) {
                //Проход массива и создание верстки на странице
                datas.forEach(task => {

                    let li = document.createElement('li');
                    let texts = document.createTextNode(task.title);
                    let span = document.createElement('span');
                    let textCompleted = document.createTextNode(' (выполнено)');
                    console.log(datas);
                    if (task.completed) {
                        li.style.textDecoration = 'line-through';
                    }

                    span.appendChild(textCompleted);
                    li.appendChild(texts);
                    li.appendChild(span);

                    listTask5.appendChild(li);
                });
            } else {
                listTask5.innerHTML = 'Пользователь с указанным id не найден.';
            }
        });
}

// При нажатии на кнопку получаем список задач
buttonTask.addEventListener('click', () => {
    getTasks(inputTask.value);
});