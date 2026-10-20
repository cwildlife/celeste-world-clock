function updateDateTime(){
//City One
let cityOneElement = document.querySelector("#cityOne");
let cityOneDateElement = document.querySelector ("#cityOneDate");
let cityOneTimeElement = document.querySelector ("#cityOneTime");
let cityOneTimeZone = moment().tz("Africa/Johannesburg");

cityOneDateElement.innerHTML = moment().format ("Do MMMM YYYY");
cityOneTimeElement.innerHTML = cityOneTimeZone.format ("HH:mm:ss [<small>]A[</small>]");

//City Two
let cityTwoElement = document.querySelector("#cityTwo");
let cityTwoDateElement = document.querySelector ("#cityTwoDate");
let cityTwoTimeElement = document.querySelector ("#cityTwoTime");
let cityTwoTimeZone = moment().tz("Europe/Amsterdam");

cityTwoDateElement.innerHTML = moment().format ("Do MMMM YYYY");
cityTwoTimeElement.innerHTML =cityTwoTimeZone.format ("HH:mm:ss [<small>]A[</small>]");

}
updateDateTime();
setInterval (updateDateTime, 1000);



