import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import getColorByPokemonType from "../utils/getColorByPokemonType";

const PokemonCard = ({ pokemon }) => {

    // const { pokemon } = props;

    const color = getColorByPokemonType(pokemon.type);

    const bgPokemonType = {
        backgroundColor: color,
        ...styles.bg
    };
    const navigation = useNavigation();

    const goToPokemon = () => {
        // navigation.navigate("nombre de la Screen");
        navigation.navigate("Pokemon", {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image
        });
        // console.log(`Vamos al pokemon: ${pokemon.name}`);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgPokemonType}>
                        <Text style={styles.id}>
                            #{`${pokemon.id}`.padStart(3, 0)}
                        </Text>
                        <Text style={styles.name}>
                            {pokemon.name}
                        </Text>
                        <Image style={styles.image} 
                            source={{ uri: pokemon.image }}
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
        flex: 1,
        borderRadius: 15,
        padding: 10
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
        paddingTop: 10,
        textTransform: "capitalize",
    },
    id: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    }
});

export default PokemonCard;