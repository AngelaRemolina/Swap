import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default function ActiveChats({ navigation, ...props }) {
  return (
    <>
      {props.clothesData.map((item, index) => (
        <TouchableOpacity key={index} activeOpacity={1} style={{flexDirection: "row", marginBottom: 30 }}
          onPress={() => navigation.navigate("Chat", {
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
          <View style={{flexDirection: "row", marginTop: 10, padding: 40, backgroundColor: "white" }}>
            <ChatImage image={item.img_url} />
            <ChatInfo name={item.name} seller={item.seller} lastMessage={item.lastMessage}/>
          </View>
        </ TouchableOpacity >
      ))
      }
    </>
  );

}

const ChatImage = (props) => (
  <>
    <Image
      id="Image"
      source={{
        uri: props.image
      }}
      style={{
        width: 80,
        height: 80
      }}
    />
  </>
);

const ChatInfo = (props) => (
  <View
    style={{
      marginTop: 10
    }}>
    <Text id="name" style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{props.seller}</Text>
    <Text id="price" style={{ fontSize: 13, color: "gray" }}>{props.name}</Text>
    <Text id="lastMessage" style={{ color: "black", fontSize: 15 }}>{props.lastMessage}</Text>
  </View>
);