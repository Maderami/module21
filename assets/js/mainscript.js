form = document.getElementById('puggForm');
filterBtn = document.getElementById('filterBtn');

filterBtn.addEventListener('click', (event) => {
    numberPage = document.getElementById("numberPage").value;
    limitElement = document.getElementById("limitElement").value;
    messageError = document.getElementById('messageError');
    localStorage.setItem("numberPage", numberPage);
    localStorage.setItem("limitElement", limitElement);
    if ((numberPage > 0 && numberPage <= 10) && (limitElement > 0 && limitElement <= 10)) {
        messageError.innerText = '';
        localStorage.removeItem("messageError");
        form.action = '/v2/list?page=' + localStorage.getItem("numberPage") + '&limit=' + localStorage.getItem("limitElement");
    }else if ((isNaN(limitElement) && isNaN(numberPage)) ||  ((numberPage > 10 && limitElement > 10) || (numberPage < 1 && limitElement < 1))) {
        localStorage.setItem("messageError", 'Номер страницы и лимит вне диапазона от 1 до 10');
    }else if ((numberPage > 10 || numberPage < 1) || isNaN(numberPage)) {
        localStorage.setItem("messageError", 'Номер страницы вне диапазона от 1 до 10');
    }else if ((limitElement > 10 || limitElement < 1) || isNaN(limitElement)) {
        localStorage.setItem("messageError", 'Лимит вне диапазона от 1 до 10');
    }

});

window.onload = function (){
    if(filterBtn.onclick) {
        messageError.innerText = localStorage.getItem("messageError");
        localStorage.removeItem("messageError");
    }else if (window.onload){
        messageError.innerText = localStorage.getItem("messageError");
    }
}