import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import firebase from "../firebase";

const addDummyDataToFirebase = () => {
  const db = firebase.firestone();
  db.collection("dummy").add({
    titulo: "Vestido de playa",
    talla: "S",
    color: "Blanco",
    createdAt: firebase.firestone.FieldValue.serverTimestamp(),
  });
};

export default function dummyScreen() {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{ fontSize: 60 }}>dummy Button</Text>
      </TouchableOpacity>
    </View>
  );
}
