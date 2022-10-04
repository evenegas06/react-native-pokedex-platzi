import { StyleSheet, ActivityIndicator, FlatList, Platform } from 'react-native';
import React from 'react';

import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {

    /* Si no se encierra entre llaves arriba, se declara props 
    entre paréntesis y se desestructura  de la siguiente manera
    const { pokemons } = props;
    */

    const loadMore = () => {
        loadPokemons();
        //console.log("Cargando mas pokemon...");
    };

    return (
        <FlatList data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => {
                return <PokemonCard pokemon={item} />
            }}
            contentContainerStyle={styles.container}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator 
                        size="large"
                        style={styles.spinner}
                        color="#382f50"
                    />
                )
            }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS == "android" ? 90 : 60,
    }
});

export default PokemonList;