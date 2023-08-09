console.log("jose")
console.log("Kyle O'Hara")
console.log("Bryan Zinsky")
console.log("Akunna Ottih")
let weather = document.querySelector("#weather");

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitudeInput}&longitude=${longitudeInput}&hourly=temperature_2m`)
.then(function(response){

    return response.json()

})
.then(function(displayCoordinates) {
    console.log(displayCoordinates)
    weather.textContent = "weather: " + data.hourly.temperature_2m[0];
}
)

async function fetchPokemonByWeather(weatherData) {
    let searchCriteria = 'sunny';
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
    }
}

async function displayPokemon(temperature) {
    const pokemonElement = document.getElementById('pokemon');

    let pokemonName;

    if (temperature > 30) {
        pokemonName = 'Charmander';
    } else if (temperature > 20) {
        pokemonName = 'Bulbasaur';
    } else if (temperature > 10) {
        pokemonName = 'Squirtle';
    } else {
        pokemonName = 'Theres no one here!';
    }

    pokemonElement.innerHTML = `<strong>Pokémon:</strong> ${pokemonName}`;
}

async function searchWeather() {
    const latitudeInput = document.getElementById('latitude');

    const longitudeInput = document.getElementById('longitude');

    const latitude = latitudeInput.value;

    const longitude = longitudeInput.value;

    if (latitude && longitude) {
        const weatherData = await fetchWeather("latitude", "longitude");
        if (weatherData && weatherData.hourly && weatherData.hourly.temperature_2m) {


            const temperature = weatherData.hourly.temperature_2m;
            const weatherElement = document.getElementById('weather');
            weatherElement.textContent = `Temperature: ${temperature}°C`;

            displayPokemon(temperature);
        }
    } else {
        alert('Enter valid latitude and longitude.');
    }
}
