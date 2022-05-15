import { StyleSheet, Text, FlatList } from 'react-native';
import React from 'react';

import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {

    /* Si no se encierra entre llaves arriba, se declara props 
    entre paréntesis y se desestructura  de la siguiente manera
    const { pokemons } = props;
    */
    return (
        <FlatList data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    }
});

export default PokemonList;