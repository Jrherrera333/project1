console.log("jose")
console.log("Kyle O'Hara")
console.log("Bryan Zinsky")
console.log("Akunna Ottih")

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
.then(function(response){
    
return response.json()     
})
.then(function (displayPokemon) {
    console.log(displayPokemon)
})