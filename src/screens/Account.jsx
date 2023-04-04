import React from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../components/Auth/LoginForm';
import UserDashboard from '../components/Auth/UserDashboard';
import styles from '../styles/styles';

import useAuth from '../hooks/useAuth';

const Account = () => {
    const { auth } = useAuth();

    return (
        <View style={styles.container}>
            {auth ? <UserDashboard /> : <LoginForm />}
        </View>
    );
};

export default Account;