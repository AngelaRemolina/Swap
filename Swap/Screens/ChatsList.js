import { View, Text, SafeAreaView, ScrollView} from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/chatsList/HeaderTitle"
import BottomTabs from "../components/home/BottomTabs";
import ActiveChats from "../components/chatsList/ActiveChats";
import { clothes_list } from "../components/home/ClothingItems";

export default function ChatsList({navigation}) {
  const [clothesData, setClothesData] = React.useState(clothes_list);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTitle />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActiveChats clothesData={clothesData} navigation={navigation} />
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}
