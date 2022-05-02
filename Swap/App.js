//import { StatusBar } from 'expo-status-bar';
//import Home from "./Screens/Home";
//import ClothingDetail from "./Screens/ClothingDetail";
// import DummyScreen from "./Screens/DummyScreen";

import * as React from "react";
import RootNavigation from "./navigation";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <RootNavigation />;
}
