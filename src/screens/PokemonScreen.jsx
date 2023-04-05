import { ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';


import styles from '../styles/styles';
import { getOnePokemon } from '../utils/apiFunctions';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';

const PokemonScreen = (props) => {

    // navigation solo llega de un Screen, no de componentes.
    const { navigation, route } = props;
    //console.log(route);

    const [pokemon, setPokemon] = useState(null);
    const { auth } = useAuth();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => auth && <Favorite id={pokemon?.id} />,
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{
                        marginLeft: 20
                    }}
                    onPress={navigation.goBack}
                />
            ),
        });
    }, [navigation, route.params, pokemon]);

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

    if (!pokemon) return null;

    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
        </ScrollView>
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