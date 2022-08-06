let apiKey = '4f165b397c5a3ac9af3e431ee682466e';
let apiBase = 'http://api.openweathermap.org/data/2.5/';
let body = document.querySelector("body");
let search = document.querySelector(".searchInput");
var x = document.getElementById("demo");
body.style.height = `${window.innerHeight - 16}px`;




function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=> {
            function fetchingYourLocation() {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                fetch(`${apiBase}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${apiKey}`).then((weather) => {
                    let myData = weather.json();
                    return myData
                }).then((weather) => {
                    let locations = document.querySelector(".ourlocation");
                    let tomperator = document.querySelector(".weahterDg");
                    let clouds = document.querySelector(".clouds");
                    let desc = weather.weather[0];
                    locations.innerText = `${weather.name} , ${weather.sys.country}`;
                    tomperator.innerText = `${(weather.main.temp - 273.15).toFixed(2)} C`;
                    clouds.innerText = `${desc.description}`;
                }).catch(error => console.log(error))
            };
            fetchingYourLocation();
        });
    } else { 
        console.log("Geolocation is not supported by this browser.")
    }
}

function events(){
    search.addEventListener('keypress',(ele) => {
        if(ele.keyCode == 13) {
            getRus(search.value);
        } 
    });
}

getLocation();
events();

function getRus(place) {
    getLocation()
    fetch(`${apiBase}weather?q=${place}&APPID=${apiKey}`).then((weather) => {
        let myData = weather.json();
        return myData
    }).then((weather) => {
        let locations = document.querySelector(".ourlocation");
        let tomperator = document.querySelector(".weahterDg");
        let clouds = document.querySelector(".clouds");
        let desc = weather.weather[0];
        locations.innerText = `${weather.name} , ${weather.sys.country}`;
        tomperator.innerText = `${(weather.main.temp - 273.15).toFixed(2)} C`;
        clouds.innerText = `${desc.description}`;
    }).catch(error => console.log(error))};
