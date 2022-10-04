const API_URL = 'https://pokeapi.co/api/v2';

const getPokemons = async (newUrl) => {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        //const response = await fetch(newUrl && url);
        //const response = await fetch(newUrl ? newUrl : url);
        const response = await fetch(newUrl || url);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error;
    }
};

const getPokemonDetails = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error;
    }
};

const getOnePokemon = async (id) => {
    try {
        const url = `${API_URL}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error;
    }
}

export { getPokemons, getPokemonDetails, getOnePokemon };