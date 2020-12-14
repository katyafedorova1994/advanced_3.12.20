// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
// });

// window.addEventListener('load', function(){
    // var loader = document.querySelector('.loader');
//     console.log("loaded");
// });


   
var loader = document.querySelector('.loader');
var cityShow = document.getElementById("cityShow");
var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherButton = document.getElementById('get-weather');
var apiKey = "0b4c64941410f61cd120e41c413dbf47";
var now;
var city = prompt("Enter your city", "Kyiv");

if (city){
    cityShow.innerText = city;
} else{
    function getLocationCoords() {
        loader.classList.add('show');


        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                getWeatherData(position.coords.latitude, position.coords.longitude);
            })
        } else {
            alert('Your browser does not support Navigator API');
        }
    };

    function getWeatherData(latitude, longitude) {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey)
        .then(function(response){
            return response.json();
        })
        .then(function(value){
            displayData(value);
        })
    };
}

function getLocationCoords() {
    getWeatherData();
};

function getWeatherData() {
    
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then(function(response){
        return response.json();
    })
    .then(function(value){
        displayData(value);
    })
    .catch(function(error){
        alert("city is not found")
    })


    
    
};

function displayData(value) {
    
    loader.classList.remove('show'); 
    console.log(value);
    temperature.innerText = kToC(value.main.temp) + "C";
    humidity.innerText = value.main.humidity + "%";
    pressure.innerText = value.main.pressure + "gPa";
    windSpeed.innerText = value.wind.speed + "m/s";
    cityShow.innerText = value.name;
    now = new Date().toLocaleDateString(); // 13.12.2020
    weatherSummary.innerText =  "Weather on " + now;
   
};

function kToC(kelvin) {
    return Math.round(kelvin - 273.15);
};


getWeatherButton.addEventListener('click', getLocationCoords);


  







