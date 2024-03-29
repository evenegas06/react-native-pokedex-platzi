import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Type = (props) => {
    const { types } = props;

    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 10,
    }
});

export default Type;