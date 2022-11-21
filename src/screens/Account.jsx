import React from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../components/Auth/LoginForm';
import UserDashboard from '../components/Auth/UserDashboard';
import styles from '../styles/styles';

const Account = () => {
    const auth = null;

    return (
        <View style={styles.container}>
            {auth ? <UserDashboard /> : <LoginForm />}
        </View>
    );
};

export default Account;