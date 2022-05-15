import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styles';
import { getPokemons, getPokemonDetails } from '../utils/apiFunctions';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    console.log('pokemons_state = ', pokemons);

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        const response = await getPokemons();
        const pokemons_array = [];

        for await (const pokemon_item of response.results) {
            const pokemon_item_details = await getPokemonDetails(pokemon_item.url);
            
            pokemons_array.push({
                id: pokemon_item_details.id,
                name: pokemon_item_details.name,
                type: pokemon_item_details.types[0].type.name,
                order: pokemon_item_details.order,
                image: pokemon_item_details.sprites.other["dream_world"].front_default,
            });
        }

        setPokemons(pokemons_array);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hola Gonzalo</Text>
        </SafeAreaView>
    );
};

export default Pokedex;