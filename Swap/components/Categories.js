import React from 'react';
import { View, Text, Image } from 'react-native';

const items = [
    {
        image: require('../assets/images/dress.png'),
        text: "Vestidos"
    },
    {
        image: require('../assets/images/jeans.png'),
        text: "Pantalones"
    },
    {
        image: require('../assets/images/shirt.png'),
        text: "Camisas"
    },
    {
        image: require('../assets/images/sneakers.png'),
        text: "Zapatos"
    },
    // TODO: añadir demás categorias en el futuro
]

export default function Categories() {
    return (
        <View>
            <Image source={items[0].image} />

        </View>
    )
}