import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ItemSummary from "./ItemSummary";

export default function StartChat({ navigation, ...props }) {
  return (
    <>
      <View
        style={{
          alignItems: "center",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 13,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 30,
            width: 300,
          }}
          onPress={() =>
            navigation.navigate("Chat", {
              name: props.name,
              image: props.image,
              seller: props.seller,
              price: props.price,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 20 }}>Iniciar Chat</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
