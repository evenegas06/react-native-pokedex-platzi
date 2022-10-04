import { View, Text, Image } from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from '../styles/styles';
import { getOnePokemon } from '../utils/apiFunctions';

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

    if(!pokemon) return null;

    return (
        <View>
            <Text>{pokemon.name}</Text>
        </View>
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