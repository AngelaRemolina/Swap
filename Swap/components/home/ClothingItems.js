import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import 'intl';
import 'intl/locale-data/jsonp/es';

export const clothes_list = [
  {
    id: 1,
    name: "Camisa Mickey Mouse",
    img_url: "https://http2.mlstatic.com/D_NQ_NP_893128-MCO46091066888_052021-W.jpg",
    categories: ["Camisas"],
    price: 20000,
    size: 12,
    color: "Blanco",
    description: "Grande",
    seller: "Gabriela Lara",
    lastMessage: "Me gusta, ¿cuánto es lo mínimo?"
  },
  {
    id: 2,
    name: "Jean de Gef",
    img_url: "https://falabella.scene7.com/is/image/FalabellaCO/3794189_1?wid=800&hei=800&qlt=70",
    categories: ["Jean"],
    price: 65000,
    size: 13,
    color: "Blanco",
    description: "Grande",
    seller: "Angela Remolina",
    lastMessage: "Se lo puedo pagar por Nequi?"
  },
  {
    id: 3,
    name: "Chaqueta verde",
    img_url: "https://m.media-amazon.com/images/I/711poAL2ThL._AC_UY550_.jpg",
    categories: ["Chaquetas"],
    price: 300000,
    size: 'M',
    color: "Verde",
    description: "Chaqueta tipo parka verde, perfecta para el frío.",
    seller: "Luisa Monsalve",
    lastMessage: "Sí, me interesa"
  }
]

export default function ClothingItems({ navigation, ...props }) {
  var formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
  });
  return (
    <>
      {props.clothesData.map((item, index) => (
        <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("ClothingDetail", {
            id: 1,
            name: item.name,
            image: item.img_url,
            categories: item.categories,
            price: item.price,
            size: item.size,
            color: item.color,
            description: item.description,
            seller: item.seller,
            lastMessage: item.lastMessage
          })
          }>
          <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <ClothingImage image={item.img_url} />
            <ClothingInfo name={item.name} price={formatter.format(item.price)} />
          </View>
        </ TouchableOpacity >
      ))
      }
    </>
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
      <MaterialCommunityIcons name='heart-outline' size={25} color="black"></MaterialCommunityIcons>
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