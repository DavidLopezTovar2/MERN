const axios = require('axios');

export const getAllPokemons = async () => {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
    return pokemons.data;
}