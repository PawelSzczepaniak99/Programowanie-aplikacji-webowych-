var apiKey = '50d53005c0fd5f556bb4ef15224c4209';
var goButton = document.getElementById('goButton');
var namecity = document.getElementById('name');
var temp = document.getElementById('temp');
var feels = document.getElementById('feels');
var wind = document.getElementById('wind');
var icon = document.getElementById('icon');
var weather = "-";
goButton.addEventListener('click', function () {
    var city = document.getElementById('city').value;
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey)
        .then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
        }
    })
        .then(function (res) {
        console.log(res.main);
        namecity.innerHTML = "Miasto: " + res.name;
        temp.innerHTML = "Temperatura: " + (res.main.temp - 273, 15) + " C";
        feels.innerHTML = "Temperatura odczuwalna: " + (res.main.temp.feels_like - 273, 15) + " C";
        console.log(res);
    })["catch"](function (error) {
        console.error(error);
    });
});
