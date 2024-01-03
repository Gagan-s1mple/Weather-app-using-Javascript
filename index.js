const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
    var data = await response.json();
    
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4724/4724091.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    }

}