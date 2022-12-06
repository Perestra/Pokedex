

let form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const strongError = document.querySelector('.error')
    const main = document.querySelector('.main')
    const section = document.querySelector('.section')

    const pokemonId = document.querySelector('.search_value').value
    
    function getPokemonUrl(pokemonId){
        return `https://pokeapi.co/api/v2/pokemon/${pokemonId.toLocaleLowerCase()}`
    }
    

    function setPokemon(pokemonId) {
        fetch(getPokemonUrl(pokemonId))
        .then(res => res.json())
        .then(pokemon => {
            strongError.classList.remove('active')
            main.classList.remove('error')
            section.classList.remove('error')
            
            var pokemonSpriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
            var pokemonTypeValue = pokemon.types[0].type.name
            const cardBackGround = document.querySelector('.pokedex')
            const typeSprite = document.getElementById('type_sprite')
            

            switch(pokemonTypeValue) {
                case "fire":
                    cardBackGround.style.background = 'var(--Fire)';
                    typeSprite.setAttribute('src', 'assets/type-icons/fire-icon.png') 
                    break;
                case "grass":
                    cardBackGround.style.background = 'var(--Grass)';
                    typeSprite.setAttribute('src', 'assets/type-icons/grass-icon.webp');
                    break;
                case "rock":
                    cardBackGround.style.background = 'var(--Rock)';
                    typeSprite.setAttribute('src', 'assets/type-icons/rock-icon.webp');
                    break;
                case "ghost":
                    cardBackGround.style.background = 'var(--Ghost)';
                    typeSprite.setAttribute('src', 'assets/type-icons/ghost-icon.webp');
                    break;
                case "steel":
                    cardBackGround.style.background = 'var(--Steel)';
                    typeSprite.setAttribute('src', 'assets/type-icons/steel-icon.webp');
                    break;
                case "water":
                    cardBackGround.style.background = 'var(--Water)';
                    typeSprite.setAttribute('src', 'assets/type-icons/water-icon.webp');
                    break;
                case "psychic":
                    cardBackGround.style.background = 'var(--Psychic)';
                    typeSprite.setAttribute('src', 'assets/type-icons/psychic-icon.webp');
                    break;
                case "ice":
                    cardBackGround.style.background = 'var(--Ice)';
                    typeSprite.setAttribute('src', 'assets/type-icons/ice-icon.webp');
                    break;
                case "dark":
                    cardBackGround.style.background = 'var(--Dark)';
                    typeSprite.setAttribute('src', 'assets/type-icons/dark-icon.webp)');
                    break;
                case "fairy":
                    cardBackGround.style.background = 'var(--Fairy)';
                    typeSprite.setAttribute('src', 'assets/type-icons/fairy-icon.png');
                    break;
                case "normal":
                    cardBackGround.style.background = 'var(--Normal)';
                    typeSprite.setAttribute('src', 'assets/type-icons/normal-icon.webp');
                    break;
                case "fighting":
                    cardBackGround.style.background = 'var(--Fighting)';
                    typeSprite.setAttribute('src', 'assets/type-icons/fighting-icon.png');
                    break;
                case "flying":
                    cardBackGround.style.background = 'var(--Flying)';
                    typeSprite.setAttribute('src', 'assets/type-icons/flying-icon.png');
                    break;
                case "poison":
                    cardBackGround.style.background = 'var(--Poison)';
                    typeSprite.setAttribute('src', 'assets/type-icons/poison-icon.png');
                    break;
                case "ground":
                    cardBackGround.style.background = 'var(--Ground)';
                    typeSprite.setAttribute('src', 'assets/type-icons/ground-icon.webp');
                    break;
                case "bug":
                    cardBackGround.style.background = 'var(--Bug)';
                    typeSprite.setAttribute('src', 'assets/type-icons/bug-icon.webp');
                    break;
                case "electric":
                    cardBackGround.style.background = 'var(--Electric)';
                    typeSprite.setAttribute('src', 'assets/type-icons/electric-icon.webp');
                    break;
                case "dragon":
                    cardBackGround.style.background = 'var(--Dragon)';
                    typeSprite.setAttribute('src', 'assets/type-icons/dragon-icon.webp');
                    break;
                default:
                    cardBackGround.style.backgroundColor = 'var(--lightGrey)';
            } 

            function setNameIdPokemon(pokemon) {
                const pokemonSprite = document.getElementById('pokemon_sprite')
                pokemonSprite.setAttribute('src', pokemonSpriteURL)

                const nameID = document.querySelector('.id_name')
                const id = document.createElement('h3')
                const name = document.createElement('h1')
                id.innerHTML = `#${pokemon.id.toString().padStart(3,0)}`
                name.innerHTML = `${firstUpper(pokemon.name)}`

                nameID.innerHTML = ''
                nameID.appendChild(id)
                nameID.appendChild(name)
                
            }
            
            function setAboutPokemon(pokemon) {
                const height = document.querySelector('.height')
                const weight = document.querySelector('.weight')
                const abilities = document.querySelector('.abilities')

                const spanHeight = document.createElement('span')
                spanHeight.innerHTML = 'Height'
                const spanWeight = document.createElement('span')
                spanWeight.innerHTML = 'Weight'
                const spanAbilities = document.createElement('span')
                spanAbilities.innerHTML = 'Abilitie'

                const h3Height = document.createElement('h3')
                h3Height.innerHTML = `${innerDot(pokemon.height)}M`
                const h3Weight = document.createElement('h3')
                h3Weight.innerHTML = `${innerDot(pokemon.weight)}KG`
                const h3Abilities = document.createElement('h3')
                h3Abilities.innerHTML = firstUpper(pokemon.moves[0].move.name)
                
                height.innerHTML = ''
                height.appendChild(spanHeight)
                height.appendChild(h3Height)

                weight.innerHTML = ''
                weight.appendChild(spanWeight)
                weight.appendChild(h3Weight)

                abilities.innerHTML = ''
                abilities.appendChild(spanAbilities)
                abilities.appendChild(h3Abilities)
            }

            function setBarStats(pokemon) {
                const statsBar = document.querySelector('.stats_bar')

                const hpBar = document.createElement('progress') 
                const atkBar = document.createElement('progress') 
                const defBar = document.createElement('progress') 
                const satkBar = document.createElement('progress') 
                const sdefBar = document.createElement('progress') 
                const spdBar = document.createElement('progress') 
                
                hpBar.setAttribute('max', '255')
                hpBar.setAttribute('value', pokemon.stats[0].base_stat)

                atkBar.setAttribute('max', '190')
                atkBar.setAttribute('value', pokemon.stats[1].base_stat)

                defBar.setAttribute('max', '230')
                defBar.setAttribute('value', pokemon.stats[2].base_stat)

                satkBar.setAttribute('max', '194')
                satkBar.setAttribute('value', pokemon.stats[3].base_stat)

                sdefBar.setAttribute('max', '230')
                sdefBar.setAttribute('value', pokemon.stats[4].base_stat)

                spdBar.setAttribute('max', '180')
                spdBar.setAttribute('value', pokemon.stats[5].base_stat)

                statsBar.innerHTML = ''
                statsBar.appendChild(hpBar)
                statsBar.appendChild(atkBar)
                statsBar.appendChild(defBar)
                statsBar.appendChild(satkBar)
                statsBar.appendChild(sdefBar)
                statsBar.appendChild(spdBar)
            }

            function setValueStats(pokemon) {
                const statsValue = document.querySelector('.stats_value')

                const hpValue = document.createElement('h3')
                hpValue.innerHTML = pokemon.stats[0].base_stat

                const atkValue = document.createElement('h3')
                atkValue.innerHTML = pokemon.stats[1].base_stat

                const defValue = document.createElement('h3')
                defValue.innerHTML = pokemon.stats[2].base_stat

                const satkValue = document.createElement('h3')
                satkValue.innerHTML = pokemon.stats[3].base_stat

                const sdefValue = document.createElement('h3')
                sdefValue.innerHTML = pokemon.stats[4].base_stat

                const spdValue = document.createElement('h3')
                spdValue.innerHTML = pokemon.stats[5].base_stat

                statsValue.innerHTML = ''
                statsValue.appendChild(hpValue)
                statsValue.appendChild(atkValue)
                statsValue.appendChild(defValue)
                statsValue.appendChild(satkValue)
                statsValue.appendChild(sdefValue)
                statsValue.appendChild(spdValue)
            }

            setNameIdPokemon(pokemon)
            setAboutPokemon(pokemon)
            setBarStats(pokemon)
            setValueStats(pokemon)
        }).catch(() => {
            strongError.classList.add('active')
            main.classList.add('error')
            section.classList.add('error')
        })
    }
    setPokemon(pokemonId)
})


//first letter of the word in uppercase
function firstUpper(val) {
    return val[0].toUpperCase() + val.substr(1)
}

function innerDot(val) {
    var valSplit = val.toString().split('')
    var valLast = valSplit.pop()
    var valJoin = valSplit.join('')

    var addZero = num => {
        if(num.length == 0){
            return '0.'+ num
        } else {
            return num+'.'
        }
    }

    return addZero(valJoin)+valLast
}
