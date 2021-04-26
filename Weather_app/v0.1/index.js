var apiKey = '50d53005c0fd5f556bb4ef15224c4209';
var goButton = document.getElementById('goButton');
var pole1 = document.getElementById('pole1');
var pole2 = document.getElementById('pole2');
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
        pole1.innerHTML = "Temperatura: " + res.main.temp;
        pole2.innerHTML = "Humidity: " + res.main.humidity;
    })["catch"](function (error) {
        console.error(error);
    });
});
