import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from '../styles/styles';
import { getOnePokemon } from '../utils/apiFunctions';
import Header from '../components/Pokemon/Header';

const PokemonScreen = (props) => {

    const { navigation, route } = props;
    //console.log(route);

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await getOnePokemon(route.params.id);
                //console.log(response);
                setPokemon(response);
            } catch (error) {
                navigation.goBack();
            }
        })();
    }, [route.params]);

    if (!pokemon) return null;

    return (
        <ScrollView>
            <Header name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
        </ScrollView>
    );
    // return (
    // <View style={styles.container}>
    //     <Image 
    //         source={{ uri: route.params.image }}
    //         style={styles.image}
    //     />
    //     <Text>{route.params.name}</Text>
    // </View>
    // );
};

export default PokemonScreen;