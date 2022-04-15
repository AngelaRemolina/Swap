import React from "react";
import { View, Text } from "react-native";
import About from "../components/clothingDetail/About";
import StartChat from "../components/clothingDetail/StartChat";

export default function ClothingDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <StartChat
        navigation={navigation}
        name={route.params.name}
        image={route.params.image}
        price={route.params.price}
      />
    </View>
  );
}
