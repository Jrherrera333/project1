console.log("jose")
console.log("Kyle O'Hara")
console.log("Bryan Zinsky")
console.log("Akunna Ottih")

let lat = document.querySelector("#floatingInput");
let long = document.querySelector("#floatingPassword");
let button = document.querySelector(".button1");


button.addEventListener("click", function(){
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${long.value}&hourly=temperature_2m`)
.then(function(response){

    return response.json()

})
.then(function (button){
    console.log(button)
})
})
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