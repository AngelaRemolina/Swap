import React, { useState } from "react"; //7.4K (gzipped: 3K)
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";


export default function HeaderChat(props) {
    return (
        <View style={{ flexDirection:"row" ,alignSelf: "center" }}>
            <ChatImage image={props.image}/>
            <ChatInfo name={props.name} seller={props.seller} price={props.price} />
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
      <Text id="price" style={{ fontSize: 13, color: "black" }}>{props.price}</Text>
    </View>
  );