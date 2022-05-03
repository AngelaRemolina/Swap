import { View, Text, TextInput, useState, DevSettings } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import {messages_list} from "../chat/Messages";
import { KeyboardAvoidingView } from "react-native-web";
import { IconButton } from "react-native-paper";

export default function TextInputBox(props) {
  const [text, setText] = React.useState("");
  console.log(text)
  // console.log(messages_list)
  return (
    <View style={{ flexDirection: "row" }}>
        <TextInput style={{ width: "87%", backgroundColor:"#DEDEDE", borderRadius: 50, padding:20 }} placeholder="Escribe tu mensaje..." value={text} onChangeText={text => setText(text)}/>
        <View>
          <IconButton
            icon="send"
            size={30}
            onPress={() => sendMessage(props,text)}/>
          {/* <Text style={{ bottom: 10 }}>Home</Text> */}
        </View>
      
    </View>
  );
}

function sendMessage(props, text){
  messages_list.push({
    id: 3,
    id_clothing_item: 1, //id del item de ropa asociado al chat
    author: "Juan Pérez",//props.seller, //user id, para tomar el nombre y la foto de perfil
    timestamp: Date.now(),
    message: text});

    // DevSettings.reload();
}