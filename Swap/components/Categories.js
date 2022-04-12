import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

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
];



export default function Categories() {

    var categories = [];

    for (let i = 0; i < items.length; i++) {
        categories.push(
            <View key={i} style={{ marginRight: 30 }}>
                < Image
                    source={items[i].image}
                    style={{
                        width: 50,
                        height: 40,
                        alignItems: "center",
                        resizeMode: "contain",
                    }}
                />
                < Text
                    style={{
                        fontSize: 13,
                        fontWeight: "900",
                        alignItems: "center",
                    }
                    }
                >
                    {items[i].text}
                </Text >
            </View >)

    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {categories}

        </ ScrollView >

    )
}