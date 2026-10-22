function updateDateTime(){
//City One
let cityOneElement = document.querySelector("#cityOne");
let cityOneDateElement = document.querySelector("#cityOneDate");
let cityOneTimeElement = document.querySelector("#cityOneTime");
let cityOneTimeZone = moment().tz("America/Curacao");

cityOneDateElement.innerHTML = cityOneTimeZone.format("DD MMMM YYYY");
cityOneTimeElement.innerHTML = cityOneTimeZone.format("HH:mm:ss [<small>]A[</small>]");


//City Two
let cityTwoElement = document.querySelector("#cityTwo");
let cityTwoDateElement = document.querySelector("#cityTwoDate");
let cityTwoTimeElement = document.querySelector("#cityTwoTime");
let cityTwoTimeZone = moment().tz("Europe/London");

cityTwoDateElement.innerHTML = cityTwoTimeZone.format("DD MMMM YYYY");
cityTwoTimeElement.innerHTML = cityTwoTimeZone.format("HH:mm:ss [<small>]A[</small>]");

//City Three
let cityThreeElement = document.querySelector("#cityThree");
let cityThreeDateElement = document.querySelector("#cityThreeDate");
let cityThreeTimeElement = document.querySelector("#cityThreeTime");
let cityThreeTimeZone = moment().tz("Asia/Jakarta");

cityThreeDateElement.innerHTML = cityThreeTimeZone.format("DD MMMM YYYY");
cityThreeTimeElement.innerHTML = cityThreeTimeZone.format("HH:mm:ss [<small>]A[</small>]");
}

function updateCity(event){
    let timeZone = event.target.value;

    if (timeZone === "current location"){
        timeZone = moment.tz.guess();
    }
    
    let cityTime = moment().tz(timeZone);
    let cityName = timeZone.replaceAll("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `     
    <div class="city">
                <div>
                    <h2> ${cityName} </h2>
                    <div class="date"> ${cityTime.format("DD MMMM YYYY")}</div>
                </div>
                <div class="time"> ${cityTime.format("HH:mm")} <small> ${cityTime.format("A")} </small></div>
            </div>
            <a href="index.html" class="link"> Home </a>`;

}
updateDateTime();
setInterval (updateDateTime, 1000);




let citiesSelectElement = document.querySelector ("#citySelect");
citiesSelectElement.addEventListener("change", updateCity);
