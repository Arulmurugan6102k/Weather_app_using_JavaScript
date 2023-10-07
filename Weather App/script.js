const apiKey = "0dde44ad645ce2cfebe917ed52a79f2a&units";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore';

async function checkWeather () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}