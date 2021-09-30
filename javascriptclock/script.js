let getName = prompt("Adınız nedir?");
let nameDOM = document.querySelector("#myName");
nameDOM.innerHTML = getName;

let dateDOM = document.querySelector("#myDate");

const weekdays = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"   
] 

function time(){
    var today = new Date();
    let clock = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let day = weekdays[today.getDay()];
    dateDOM.innerHTML = clock + " " + day;
}

setInterval(time,1000);