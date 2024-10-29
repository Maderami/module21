function generateUUIDSession(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c){
        let r = Math.random()*16|0,
            v = c === 'x'?r:(r & 0x3 | 0x8);
        return v.toString(16);
    });
}
let currentDate = new Date();
if (sessionStorage.getItem("SESSION_ID") != null) {
    alert('«Добрый день, '+ localStorage.getItem("nameUser") +'. Давно не виделись. В последний раз вы были у нас '+localStorage.getItem("date"))
} else {
    let promp = prompt('«Добро пожаловать! Назовите, пожалуйста, ваше имя»');
    localStorage.setItem("nameUser", promp);
    sessionStorage.setItem('username', promp);
    sessionStorage.setItem("SESSION_ID", generateUUIDSession());
    localStorage.setItem("date", `${currentDate.getDate()}`+'-'+`${currentDate.getMonth() + 1}`+'-'+`${currentDate.getFullYear()}`+'  '+`${currentDate.getHours()}:`+`${currentDate.getMinutes()}:`+`${currentDate.getSeconds()}`);
}