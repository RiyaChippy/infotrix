
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "68dafd02defdf46d8603ddb7a5300a9e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const icon = document.querySelector(".im");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".desc").innerHTML = data.weather[0].main;
        document.querySelector(".humidity").innerHTML ="Humidity: "+data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind: : "+data.wind.speed+"Km/h";

        if (data.weather[0].main == "Clouds") {
            icon.src = "./clouds.jpg";
        } else if (data.weather[0].main == "Rain") {
            icon.src = "./rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            icon.src = "./drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            icon.src = "https://as1.ftcdn.net/v2/jpg/02/57/93/18/1000_F_257931827_TpuS3ufGnaOug9ZLkDaCAOZA4xa0G2za.jpg";
        } else if (data.weather[0].main == "Clear") {
            icon.src = "./clear.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
