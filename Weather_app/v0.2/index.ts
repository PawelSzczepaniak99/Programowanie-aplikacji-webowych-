 const apiKey = '50d53005c0fd5f556bb4ef15224c4209';
 const goButton = document.getElementById('goButton');
 const namecity = document.getElementById('name');
 const temp = document.getElementById('temp');
 const feels = document.getElementById('feels');
 const wind = document.getElementById('wind');
 const weather = "-";

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
        namecity.innerHTML = `Miasto: ${res.name}`;
        temp.innerHTML = `Temperatura: ${res.main.temp - 273,15} C`;
        feels.innerHTML = `Temperatura odczuwalna: ${res.main.temp.feels_like - 273,15} C`
       console.log(res);
    })
    .catch(error => {
        console.error(error)
    });


    
    
})