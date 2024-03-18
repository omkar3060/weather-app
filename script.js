const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c32a951da4msh50e74dde4c960b5p148019jsnf2ef16c24c0d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Function to fetch weather for a city
const getWeather = (city) => {
    // Updating the city name in the HTML
    cityname.innerHTML = city;

    // Fetching weather data from API
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // Updating weather information in HTML
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp1.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            humidity1.innerHTML = response.humidity;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            console.log(response);
        })
        .catch(err => console.error(err));
}

// Event listener for form submission
Submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

// Fetch weather for default city
getWeather('Hubli');

// Fetch weather for each common city mentioned in the table
const tableRows = document.querySelectorAll('.table tbody tr');
tableRows.forEach(row => {
    const cityName = row.querySelector('th').innerText;
    if (cityName == 'London') {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName, options)
            .then(response => response.json())
            .then((response) => {
                // Updating weather information in HTML
                cloud_pct_London.innerHTML = response.cloud_pct;
                feels_like_London.innerHTML = response.feels_like;
                humidity_London.innerHTML = response.humidity;
                min_temp_London.innerHTML = response.min_temp;
                max_temp_London.innerHTML = response.max_temp;
                wind_speed_London.innerHTML = response.wind_speed;
                humidity_London.innerHTML = response.humidity;
                wind_degrees_London.innerHTML = response.wind_degrees;
                sunrise_London.innerHTML = response.sunrise;
                sunset_London.innerHTML = response.sunset;
                temp_London.innerHTML = response.temp;
                console.log(response);
            })
            .catch(err => console.error(err));
    }

    if (cityName == 'Los Angeles') {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName, options)
            .then(response => response.json())
            .then((response) => {
                // Updating weather information in HTML
                cloud_pct_Los_Angeles.innerHTML = response.cloud_pct;
                feels_like_Los_Angeles.innerHTML = response.feels_like;
                humidity_Los_Angeles.innerHTML = response.humidity;
                min_temp_Los_Angeles.innerHTML = response.min_temp;
                max_temp_Los_Angeles.innerHTML = response.max_temp;
                wind_speed_Los_Angeles.innerHTML = response.wind_speed;
                humidity_Los_Angeles.innerHTML = response.humidity;
                wind_degrees_Los_Angeles.innerHTML = response.wind_degrees;
                sunrise_Los_Angeles.innerHTML = response.sunrise;
                sunset_Los_Angeles.innerHTML = response.sunset;
                temp_Los_Angeles.innerHTML = response.temp;
                console.log(response);
            })
            .catch(err => console.error(err));
    }

    if (cityName == 'Bengaluru') {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName, options)
            .then(response => response.json())
            .then((response) => {
                // Updating weather information in HTML
                cloud_pct_Bengaluru.innerHTML = response.cloud_pct;
                feels_like_Bengaluru.innerHTML = response.feels_like;
                humidity_Bengaluru.innerHTML = response.humidity;
                min_temp_Bengaluru.innerHTML = response.min_temp;
                max_temp_Bengaluru.innerHTML = response.max_temp;
                wind_speed_Bengaluru.innerHTML = response.wind_speed;
                humidity_Bengaluru.innerHTML = response.humidity;
                wind_degrees_Bengaluru.innerHTML = response.wind_degrees;
                sunrise_Bengaluru.innerHTML = response.sunrise;
                sunset_Bengaluru.innerHTML = response.sunset;
                temp_Bengaluru.innerHTML = response.temp;
                console.log(response);
            })
            .catch(err => console.error(err));
    }

    if (cityName == 'New Delhi') {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName, options)
            .then(response => response.json())
            .then((response) => {
                // Updating weather information in HTML
                cloud_pct_New_Delhi.innerHTML = response.cloud_pct;
                feels_like_New_Delhi.innerHTML = response.feels_like;
                humidity_New_Delhi.innerHTML = response.humidity;
                min_temp_New_Delhi.innerHTML = response.min_temp;
                max_temp_New_Delhi.innerHTML = response.max_temp;
                wind_speed_New_Delhi.innerHTML = response.wind_speed;
                humidity_New_Delhi.innerHTML = response.humidity;
                wind_degrees_New_Delhi.innerHTML = response.wind_degrees;
                sunrise_New_Delhi.innerHTML = response.sunrise;
                sunset_New_Delhi.innerHTML = response.sunset;
                temp_New_Delhi.innerHTML = response.temp;
                console.log(response);
            })
            .catch(err => console.error(err));
    }

});
