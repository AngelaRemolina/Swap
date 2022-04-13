import React, { useState } from "react"; //7.4K (gzipped: 3K)
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ClothingItems, { clothes_list } from "../components/ClothingItems";

export default function Home() {
    const [clothesData, setClothesData] = React.useState(clothes_list);

    // TODO
    // Obtener los datos de firebase de los items de ropa subidos por los usuarios vendedores,
    // en forma de json así como en la lista de clothes_list que está en ../components/ClothingItems
    // ver minuto 1:48:29 con el ejemplo de yelp para saber como hacerlo.
    // setClothesData(res.json())

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ClothingItems clothesData={clothesData} />
            </ScrollView>
        </SafeAreaView >
    );
}
