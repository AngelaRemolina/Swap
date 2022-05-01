import React, { useState } from "react"; //7.4K (gzipped: 3K)
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ClothingItems, { clothes_list } from "../components/home/ClothingItems";
import BottomTabs from "../components/home/BottomTabs";

export default function Home({ navigation }) {
    const [clothesData, setClothesData] = React.useState(clothes_list);
    const [activeTab, setActiveTab] = React.useState("Delivery");

    // TODO
    // Obtener los datos de firebase de los items de ropa subidos por los usuarios vendedores,
    // en forma de json así como en la lista de clothes_list que está en ../components/ClothingItems
    // ver minuto 1:48:29 con el ejemplo de yelp para saber como hacerlo.
    // setClothesData(res.json())

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ClothingItems clothesData={clothesData} navigation={navigation} />
            </ScrollView>
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    );
}
