import React from "react"; //7.4K (gzipped: 3K)
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
    console.log("estoy en home");
    return (

        <SafeAreaView>

            <HeaderTabs />

        </SafeAreaView>
    )
}
