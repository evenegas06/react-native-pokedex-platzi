import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from '../styles/styles';

const PokemonScreen = (props) => {

    const { navigation, route } = props;

    //console.log(route);

    return (
        <View style={styles.container}>
            <Image source={{ uri: route.params.image }}
                style={styles.image}
            />
            <Text>{route.params.name}</Text>
        </View>
    );
};

export default PokemonScreen;