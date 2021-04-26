 const apiKey = '50d53005c0fd5f556bb4ef15224c4209';
 const goButton = document.getElementById('goButton');
 const pole1 = document.getElementById('pole1');
 const pole2 = document.getElementById('pole2');

goButton.addEventListener('click',() => {
    const city = (document.getElementById('city') as HTMLInputElement).value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            
        }
    })
    .then(res => {
        console.log(res.main)
        pole1.innerHTML = `Temperatura: ${res.main.temp}`;
        pole2.innerHTML = `Humidity: ${res.main.humidity}`;
    })
    .catch(error => {
        console.error(error)
    });
})