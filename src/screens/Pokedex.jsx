import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import PokemonList from '../components/PokemonList';
import styles from '../styles/styles';
import { getPokemons, getPokemonDetails } from '../utils/apiFunctions';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        const response = await getPokemons(nextUrl);
        setNextUrl(response.next);

        const pokemons_array = [];
        for await (const pokemon_item of response.results) {
            const pokemon_item_details = await getPokemonDetails(pokemon_item.url);
            
            pokemons_array.push({
                id: pokemon_item_details.id,
                name: pokemon_item_details.name,
                type: pokemon_item_details.types[0].type.name,
                order: pokemon_item_details.order,
                image: pokemon_item_details.sprites.other["official-artwork"].front_default,
            });
        }

        setPokemons(pokemons_array);
    }

    return (
        /* 
            SafeAreaView del paquete react-native no funciona de la misma forma en 
            Android como en IOS, en el caso de ios se puedes dejar por default, pero en Android 
            se deben agregar los siguientes estilos para que funcione sin problema:
            AndroidSafeArea: {
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            },
        */
        <SafeAreaView >
            <PokemonList pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}
            />
        </SafeAreaView>
    );
};

export default Pokedex;