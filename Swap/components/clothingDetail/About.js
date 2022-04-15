import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {

  const { name, image, categories, price, size, color, description } =
    props.route.params;
  return (
    <View>
      <ClothingImage image={image} />
      <ClothingName name={name} />
      <ClothingDescription description={description} />
      <ClothingDetails
        color={color}
        size={size}
        price={price}
        categories={categories}
      />
    </View>
  );
}

const ClothingImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const ClothingName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const ClothingDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15.5,
      fontWeight: "600",
    }}
  >
    {props.description}
  </Text>
);

const ClothingDetails = (props) => (
  <View
    style={{
      color: "black",
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 10,
      fontWeight: "600",
    }}
  >
    <Text>precio: {props.price}</Text>
    <Text>color: {props.color}</Text>
    <Text>talla: {props.size}</Text>
    <Text>categorías: {props.categories}</Text>
  </View>
);
