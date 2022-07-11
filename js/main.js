

let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
    let spriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    
    let imgPokemon = document.querySelector('.sprite_pokemon')  //image
    let namePokemon = document.querySelector('.name_id_pokemon')  //name 
    let typePokemon = document.getElementById('type_pokemon')  //type
    let heightPokemon = document.getElementById('height_pokemon')  //height
    let weightPokemon = document.getElementById('weight_pokemon')  //weight

    let idNumber = document.getElementById('input_value').value  //id
    pokemonURL = pokemonURL + idNumber  //adding id into URL
    pokemonURL = pokemonURL.toLocaleLowerCase()  //URL in lowercase

    let statsTitle = document.getElementById('stats_title') //title "Base Stats"
    let hpPokemon = document.getElementById('hp_pokemon')  //hp
    let attackPokemon = document.getElementById('attack_pokemon')  //attack
    let defensePokemon = document.getElementById('defense_pokemon')  //defense
    let speedPokemon = document.getElementById('speed_pokemon')  //speed
    let spAttackPokemon = document.getElementById('sp_attack_pokemon')  //sp attack
    let spDefensePokemon = document.getElementById('sp_defense_pokemon')  //sp defense
    let expPokemon = document.getElementById('xp_pokemon')  //base exp

    let firstCardSection = document.querySelector('.first_card_section')  //add a style
    let statsPokemon = document.querySelector('.stats_pokemon')  //add a style

    fetch(pokemonURL)
        .then(res => res.json())
        .then(function(pokemon) {
            spriteURL = spriteURL + pokemon.id

            imgPokemon.innerHTML = `<img src="${spriteURL}.png">`
            namePokemon.innerHTML = `<p>${firstUpper(pokemon.name)}</p><span>#${pokemon.id.toString().padStart(3, 0)}</span>`
            typePokemon.innerHTML = `<h1>${firstUpper(pokemon.types[0].type.name)}</h1><h2>Type</h2>`
            heightPokemon.innerHTML = `<h1>${pokemon.height}</h1><h2>Height</h2>`
            weightPokemon.innerHTML = `<h1>${pokemon.weight}</h1><h2>Weight</h2>`     
            
            statsTitle.innerHTML = `<h1>Base Stats</h1>`
            hpPokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[0].stat.name)}</h2><h1>${pokemon.stats[0].base_stat}</h1>`
            attackPokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[1].stat.name)}</h2><h1>${pokemon.stats[1].base_stat}</h1>`
            defensePokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[2].stat.name)}</h2><h1>${pokemon.stats[2].base_stat}</h1>`
            speedPokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[5].stat.name)}</h2><h1>${pokemon.stats[5].base_stat}</h1>`
            spAttackPokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[3].stat.name)}</h2><h1>${pokemon.stats[3].base_stat}</h1>`
            spDefensePokemon.innerHTML = `<h2>${firstUpper(pokemon.stats[4].stat.name)}</h2><h1>${pokemon.stats[4].base_stat}</h1>`
            expPokemon.innerHTML = `<h2>Base Exp</h2><h1>${pokemon.base_experience}</h1>`

            firstCardSection.setAttribute('style','background: linear-gradient(120deg, rgba(255,255,255,1), rgba(255,255,255,0.2)100%);')
            statsPokemon.setAttribute('style','background: linear-gradient(120deg, rgba(255,255,255,1), rgba(255,255,255,0.2)100%);')

        }) 
})


//first letter of the word in uppercase
function firstUpper(val){
    return val[0].toUpperCase() + val.substr(1)
}
