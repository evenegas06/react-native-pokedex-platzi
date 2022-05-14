const API_URL = 'https://pokeapi.co/api/v2';

const getPokemons = async () => {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json();

        return result;   
    } catch (error) {
        throw error;
    }
};

export default getPokemons;