import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styles';

const Pokedex = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Pokedex</Text>
        </SafeAreaView>
    );
};

export default Pokedex;