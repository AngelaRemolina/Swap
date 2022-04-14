import React from 'react';
import { View, Text } from 'react-native';
import About from "../components/clothingDetail/About";

export default function ClothingDetail({ route }) {
    return (
        <View>
            <About route={route} />
            {/*<Divider width={1.8} style={{ marginVertical: 20 }} />*/}
            {/*Ángela va a probar esta dependencia para ver si sirve después*/}
        </View>
    )
}