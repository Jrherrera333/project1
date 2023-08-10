console.log("jose")
console.log("Kyle O'Hara")
console.log("Bryan Zinsky")
console.log("Akunna Ottih")

let image = document.querySelector("#pokeImage");
let lat = document.querySelector("#floatingInput");
let long = document.querySelector("#floatingPassword");
let button = document.querySelector(".button1");
let poke = document.querySelector(".poke");



button.addEventListener("click", function () {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${long.value}&hourly=temperature_2m`)
        .then(function (response) {
            return response.json()

        })
        .then(function (weather) {
            console.log(weather.hourly.temperature_2m[0])
            let temp = (weather.hourly.temperature_2m[0])
            if (temp > 30) {

                fetch("https://pokeapi.co/api/v2/type/fire")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
            // Math.floor Math.random
                        fetch(data.pokemon[0].pokemon.url)
                            .then((response) => response.json())
                            .then((dataFromSecondFetch) => {
                                console.log(dataFromSecondFetch)
                                console.log(dataFromSecondFetch.sprites.front_default)
                                image.src = (dataFromSecondFetch.sprites.front_default)
                                
                                // set image src here
            
                            });
                    });
            } if (temp < 30) {
                // fetch pokemon by type
                fetch("https://pokeapi.co/api/v2/type/grass")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        // getting first pokemon from grass fetch
                        // https://pokeapi.co/api/v2/pokemon/1/
                        console.log(data.pokemon[0].pokemon.name, data.pokemon[0].pokemon.url)
                        fetch(data.pokemon[0].pokemon.url)
                            .then((response) => response.json())
                            .then((data) => {
                                image.src = (data.sprites.front_default)
                                //https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png
                                // console.log(data.sprites.front_default)
                                console.log(data)
                                //set image src her
                            });
                    });
            
            }

                if (temp < 20) {
                // fetch pokemon by type
                fetch("https://pokeapi.co/api/v2/type/water")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        // getting first pokemon from grass fetch
                        // https://pokeapi.co/api/v2/pokemon/1/
                        console.log(data.pokemon[0].pokemon.name, data.pokemon[0].pokemon.url)
                        fetch(data.pokemon[0].pokemon.url)
                            .then((response) => response.json())
                            .then((data) => {
                                image.src = (data.sprites.front_default)
                                //https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png
                                // console.log(data.sprites.front_default)
                                console.log(data)
                                //set image src her
                            });
                    });
            
            }   if (temp < 10) {
                // fetch pokemon by type
                fetch("https://pokeapi.co/api/v2/type/ice")
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        // getting first pokemon from grass fetch
                        // https://pokeapi.co/api/v2/pokemon/1/
                        console.log(data.pokemon[0].pokemon.name, data.pokemon[0].pokemon.url)
                        fetch(data.pokemon[0].pokemon.url)
                            .then((response) => response.json())
                            .then((data) => {
                                image.src = (data.sprites.front_default)
                                //https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png
                                // console.log(data.sprites.front_default)
                                console.log(data)
                                //set image src her
                            });
                    });
            
            }
            // fetch(data.hourly.temperature_2m[0])
            //     .then((response) => response.json())
            //     .then((dataFromWeatherFetch) => {
            //         console.log(dataFromWeatherFetch)
            //         console.log(dataFromWeatherFetch.data.hourly.temperature_2m[0])
            //         // fetchPokemonByWeather()
            //     })
        })
})
// async function fetchPokemonByWeather() {
//     let searchCriteria = 'sunny';
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
//         const data = await response.json();
//         console.log(data.results)
//         let pokeFetch = await fetch(data.results[0].url)
//         let pokeData = await pokeFetch.json()
//         console.log(pokeData.sprites.back_default)
//         return data.results;
//     } catch (error) {
//         console.error('Error fetching Pokémon data:', error);
//         return null;
//     }
// }
let temp = 28

if (temp > 30) {

    fetch("https://pokeapi.co/api/v2/type/fire")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            fetch(data.pokemon[0].pokemon.url)
                .then((response) => response.json())
                .then((dataFromSecondFetch) => {
                    console.log(dataFromSecondFetch)
                    console.log(dataFromSecondFetch.sprites.front_default)
                    image.src = (dataFromSecondFetch.sprites.front_default)// set image src here

                });
        });
} if (temp < 30) {
    // fetch pokemon by type
    fetch("https://pokeapi.co/api/v2/type/grass")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // getting first pokemon from grass fetch
            // https://pokeapi.co/api/v2/pokemon/1/
            console.log(data.pokemon[0].pokemon.name, data.pokemon[0].pokemon.url)
            fetch(data.pokemon[0].pokemon.url)
                .then((response) => response.json())
                .then((data) => {
                    image.src = (data.sprites.front_default)
                    //https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/4.png
                    // console.log(data.sprites.front_default)
                    console.log(data)
                    //set image src her
                });
        });

}

// .then(function(weather) {
//     console.log(weather)
//     function displayweather(data) {
//         let weather = data.drinks[0];
//         let weatherDiv = document.getElementByID("weather");
//         // cocktail name
//         let weatherName = weather.strDrink;
//         let heading = document.createElement("h1");
//         heading.innerHTML = weatherName;
//         weatherDiv.appendChild(heading);
//       }
// }



// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(function(response){

//     return response.json()

// })
// .then(function(catfact) {
//     console.log(catfact)
// }
// )

// $ curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"


// "current_weather": {
// 	"time": "2022-01-01T15:00"
// 	"temperature": 2.4, "weathercode": 3,
// 	"windspeed": 11.9, "winddirection": 95.0,
// },
// "hourly": {
// 	"time": ["2022-07-01T00:00","2022-07-01T01:00", ...]
// 	"windspeed_10m": [3.16,3.02,3.3,3.14,3.2,2.95, ...],
// 	"temperature_2m": [13.7,13.3,12.8,12.3,11.8, ...],
// 	"relativehumidity_2m": [82,83,86,85,88,88,84,76, ...],