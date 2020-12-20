window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;


var words = document.querySelector('.words');

recognition.addEventListener('result', function (event) {
    words.innerText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            return result.transcript;
        })      
    
})


// recognition.addEventListener('end', recognition.start);
recognition.start();



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


function getLocationCoords() {
    
    getWeatherData();
};

function getWeatherData() {
    var city = words.innerText;

    cityShow.innerText = city;

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
    temperature.innerText = kToC(value.main.temp) + "C";
    humidity.innerText = value.main.humidity + "%";
    pressure.innerText = value.main.pressure + "gPa";
    windSpeed.innerText = value.wind.speed + "km/h";
    cityShow.innerText = value.name;
    now = new Date().toLocaleDateString(); 
    weatherSummary.innerText =  "Weather on " + now;
   
};

function kToC(kelvin) {
    return Math.round(kelvin - 273.15);
};


recognition.addEventListener('end', getLocationCoords);





