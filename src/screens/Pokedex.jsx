import { Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styles';
import getPokemons from '../utils/getPokemons';

const Pokedex = () => {

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        const response = await getPokemons();
        console.log(response);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hola Gonzalo</Text>
        </SafeAreaView>
    );
};

export default Pokedex;