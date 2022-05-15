import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const PokemonCard = ({ pokemon }) => {

    // const { pokemon } = props;

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
        console.log(pokemon);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bg}>
                        <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{ uri: pokemon.image }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bg: {
        backgroundColor: "pink"
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    order: {
       // position: "absolute",
        //right: 10,
       // top: 10,
        color: "black",
       // fontSize: 11
    }
});

export default PokemonCard;