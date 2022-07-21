let pokemonId = document.querySelector('.pokemon__id')
let namePokemon = document.querySelector('.pokemon__name')

async function pokemons(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    const response = await fetch(url)
    return await response.json()
  }
  
  function getPokemons(pokemonName) {
      pokemons(pokemonName).then(pokemonData => {
        let pokemonInfos =    `
                                <img src="${pokemonData.sprites.versions['generation-v']['black-white']['animated']['front_default']}" alt="Pokemon Image" />
                                <div class="pokemon__stats">
                                  <span><strong>Type</strong>: ${pokemonData.types[0].type.name}</span>
                                  <span><strong>Weight</strong>: ${pokemonData.weight}</span>
                                </div>
                            `
        pokemonId.innerHTML = pokemonData.id
        namePokemon.innerHTML = pokemonData.name
        document.querySelector('.main__content').innerHTML = pokemonInfos
    }) 
  }

document.getElementById('btn__search').addEventListener('click', () => {
  const pokemonName = document.getElementById('search__pokemon').value.toLowerCase()
  getPokemons(pokemonName)
})

document.getElementById('search__pokemon').addEventListener('keyup', (e) => {
  const pokemonName = e.target.value.toLowerCase()
  const keyEnter = e.which || e.keyCode
  if(keyEnter === 13) {
    getPokemons(pokemonName)
  }
})

getPokemons('1')