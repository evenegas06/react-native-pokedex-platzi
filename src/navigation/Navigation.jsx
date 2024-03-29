import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

//import Favorite from '../screens/Favorite';
// import Account from '../screens/Account';
// import Pokedex from '../screens/Pokedex';

import FavoriteNavigation from "../navigation/FavoriteNavigation";
import PokedexNavigation from "../navigation/PokedexNavigation";
import AccountNavigation from "../navigation/AccountNavigation";


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={FavoriteNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='heart' color={color} size={size} />
                        );
                    },
                }}
            />
            <Tab.Screen name="Pokedex" component={PokedexNavigation}
                options={
                    {
                        tabBarLabel: "",
                        tabBarIcon: () => {
                            return (
                                <Image source={require('../assets/pokeball.png')}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        top: -15
                                    }}
                                />
                                // or renderPokeball()
                            );
                        },
                    }
                }
            />
            <Tab.Screen name="Account" component={AccountNavigation}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='user' color={color} size={size} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

function renderPokeball() {
    return (
        <Image source={require('../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}

export default Navigation;