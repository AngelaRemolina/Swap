import React, { useState } from "react"; //7.4K (gzipped: 3K)
import { View, Text, Image } from "react-native";
import 'intl';
import 'intl/locale-data/jsonp/es';

export default function HeaderChat(props) {
  var formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
  });
  return (
    <View style={{ alignSelf: "center", flexDirection: "row" }}>
      <ChatImage image={props.image} />
      <ChatInfo name={props.name} seller={props.seller} />
      <Text style={{ alignSelf: "center", marginLeft: "10%" }}>{formatter.format(props.price)}</Text>
    </View>
  )
}

const ChatImage = (props) => (
  <>
    <Image
      id="Image"
      source={{
        uri: props.image
      }}
      style={{
        width: 50,
        height: 50
      }}
    />
  </>
);

const ChatInfo = (props) => (
  <View
    style={{
      marginTop: 10
    }}>
    <Text id="seller" style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{props.seller}</Text>
    <Text id="name" style={{ fontSize: 13, color: "gray" }}>{props.name}</Text>
  </View>
);