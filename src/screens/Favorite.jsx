import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/styles';

const Favorite = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Favorite xD</Text>
        </SafeAreaView>
    );
};

export default Favorite;