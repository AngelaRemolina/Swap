import React from 'react';
import { View, Text, Image } from 'react-native';

export default function About(props) {
    const image = "https://http2.mlstatic.com/D_NQ_NP_893128-MCO46091066888_052021-W.jpg"
    const title = 'Camisa de Mickey'
    const description = 'Grande'
    const color = 'Blanco'
    const size = 14

    return (
        <View>
            <ClothingImage image={image} />
            <ClothingTitle title={title} />
            <ClothingDescription description={description} />
            <ClothingDetails color={color} size={size} />
        </View>
    )
}

const ClothingImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const ClothingTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {props.title}
    </Text>
);

const ClothingDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 15.5,
        fontWeight: "600",
    }}>
        {props.description}
    </Text>
);

const ClothingDetails = (props) => (
    <View style={{
        color: "black",
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 10,
        fontWeight: "600",
    }}>

        <Text>
            color: {props.color}
        </Text>
        <Text>
            talla: {props.size}
        </Text>

    </View>

);