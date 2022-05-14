import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

import styles from '../styles/styles';

const Account = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Account</Text>
        </SafeAreaView>
    );
};

export default Account;