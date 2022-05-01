import { View, Text, Image } from "react-native";
import React from "react";

export default function ItemSummary({ item }) {
  const { name, image, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Image source={{ uri: image }} style={{ width: "70%", height: "100%" }} />
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
}
