import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const clothes_list = [
    {
        name: "Camisa Mickey Mouse",
        img_url: "https://http2.mlstatic.com/D_NQ_NP_893128-MCO46091066888_052021-W.jpg",
        categories: ["Camisas"],
        price: 20000
        // TODO: poner demás detalles
    },
    {
        name: "Jean de Gef",
        img_url: "https://falabella.scene7.com/is/image/FalabellaCO/3794189_1?wid=800&hei=800&qlt=70",
        categories: ["Jean"],
        price: 65000
    }
]

export default function ClothingItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.clothesData.map((item, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                    <ClothingImage image={item.img_url} />
                    <ClothingInfo name={item.name} price={item.price} />
                </View>
            ))}

        </ TouchableOpacity >
    );
}

const ClothingImage = (props) => (
    <>
        <Image
            id="Image"
            source={{
                uri: props.image
            }}
            style={{
                width: "100%",
                height: 180
            }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fff"></MaterialCommunityIcons>
            {/* TODO: make the heart color when clicked "on/off" */}
        </TouchableOpacity>
    </>
);

const ClothingInfo = (props) => (
    <View
        style={{
            marginTop: 10
        }}>
        <Text id="name" style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text id="price" style={{ fontSize: 13, color: "gray" }}>{props.price}</Text>
    </View>
);