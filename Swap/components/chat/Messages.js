import { View, Text } from "react-native";
import React from "react";

export const messages_list = [
  {
    id: 1,
    id_clothing_item: 1, //id del item de ropa asociado al chat
    author: "Gabriela Lara", //user id, para tomar el nombre y la foto de perfil
    timestamp: 1651496388192,
    message: "Hola!",
  },
  {
    id: 1,
    id_clothing_item: 1,
    author: "Angela Remolina",
    timestamp: 1651496476934,
    message: "Hola Gabriela!",
  },
];

export default function Messages(props) {
  return (
    <>
    {props.chatData.map((item, index) => (
      //TODO: Comprobar que el id_clothing sea al mismo del chat
      <View style={{ flexDirection: "row", alignItems:"center", margin:10}}>
        <ProfilePicCircle />
        <View style={{ backgroundColor: "white", borderRadius: 20, margin:10, padding:20 }}>
          <Text id="name" style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            {item.author}
          </Text>
          <Text key={index} style={{ flexDirection: "row"}}>
            {item.message}
          </Text>
        </View>
      </View>
    ))}
    </>
  );
}

const ProfilePicCircle = (props) => (
  <View
    style={{
      height: 60,
      width: 60,
      borderRadius: 50,
      backgroundColor: "#A98056",
    }}
  ></View>
);

const MessageBox = (props) => <View></View>;
