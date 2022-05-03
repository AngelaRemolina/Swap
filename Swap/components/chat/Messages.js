import { View, Text} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const messages_list = [
  {
    id: 1,
    id_clothing_item: 1,
    author: "Luisa Monsalve",
    timestamp: 1651496476934,
    message: "Hola Juan! ¿Te interesa mi prenda? Escríbeme",
  }
];

export default function Messages(props) {
  return (
    <>
      {props.chatData.map((item, index) => (
        //TODO: Comprobar que el id_clothing sea al mismo del chat
        <View key={index} style={{ margin:10 }}>
          <View style={{ alignItems: "center"}}>
            <Text>
              {new Date(item.timestamp).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 10 , marginTop: 0 }}
          >
            <ProfilePicCircle />
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                margin: 10,
                padding: 20,
              }}
            >
              <Text
                id="name"
                style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
              >
                {item.author}
              </Text>
              <Text key={index} style={{ flexDirection: "row" }}>
                {item.message}
              </Text>
            </View>
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
