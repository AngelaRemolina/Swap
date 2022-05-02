import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderChat from "../components/chat/HeaderChat";
import Messages from "../components/chat/Messages";
import TextInputBox from "../components/chat/TextInputBox";

export default function Chat({route}) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderChat 
        name={route.params.name}
        seller={route.params.seller}
        image={route.params.image}
        price={route.params.price}/>
        {/* Esto de route.params viene de cuando se llega al chat mediante un 
            click en otro boton y se le pasa la info de esta manera vvvv

            navigation.navigate("Chat", {
            name: item.name,
            image: item.img_url,
            seller: item.seller
            price: props.price,
          }) */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Messages />
      </ScrollView>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <TextInputBox />
      </View>
    </SafeAreaView>
  );
}
