import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function ClothingItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                <ClothingImage />
                <ClothingInfo />
            </View>
        </ TouchableOpacity>
    );
}

const ClothingImage = () => (
    <>
        <Image
            id="Imagen"
            source={{
                uri: "https://media.discordapp.net/attachments/942059593880715265/963484892174385172/91wWChJ-M1L._AC_UL1500_-removebg-preview.png"
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

const ClothingInfo = () => (
    <View
        style={{
            marginTop: 10
        }}>
        <Text id="Titulo" style={{ fontSize: 15, fontWeight: "bold" }}>Vestido de Tencel</Text>
        <Text id="Precio" style={{ fontSize: 13, color: "gray" }}>$50.000</Text>
    </View>
);