import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite"
                component={Favorite}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='heart' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name="Pokedex"
                component={Pokedex}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => {
                        return (
                            renderPokeball()
                        )
                    }
                }}
            />
            <Tab.Screen name="Account"
                component={Account}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='user' color={color} size={size} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
};

function renderPokeball() {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}

export default Navigation;