// // Replace with your OpenWeatherMap API key and desired location
// const apiKey = 'f14fa141250f136b29dd135a3e8ee731';
// const location = '';

// // Function to fetch weather data from the API
// async function getWeatherData() {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
//         if (!response.ok) {
//             throw new Error('Weather data not found');
//         }
//         const data = await response.json();
//         updateWeatherDisplay(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Function to update the weather information on the webpage
// function updateWeatherDisplay(data) {
//     const locationElement = document.getElementById('location');
//     const temperatureElement = document.getElementById('temperature');
//     const descriptionElement = document.getElementById('description');

//     locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
//     temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
//     descriptionElement.textContent = `Description: ${data.weather[0].description}`;
// }

// // Call the function to fetch weather data when the page loads
// window.addEventListener('load', getWeatherData);
const apiKey = 'f14fa141250f136b29dd135a3e8ee731'; // Replace with your OpenWeatherMap API key

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error(error);
                locationElement.textContent = 'Error: City not found';
                temperatureElement.textContent = '';
                descriptionElement.textContent = '';
            });
    }
});
