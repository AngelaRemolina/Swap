// ESTE ARCHIVO SOLO ES UNA GUIA PARA LA CONEXIÓN CON FIREBASE, LUEGO PODRÁ SER ELIMINADO

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import firebase from "../firebase";

const addDummyDataToFirebase = () => {
  const db = firebase.firestore();
  db.collection("dummy").add({
    titulo: "Vestido de playa",
    talla: "S",
    color: "Blanco",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export default function DummyScreen() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          addDummyDataToFirebase();
        }}
      >
        <Text style={{ fontSize: 60 }}>dummy Button</Text>
      </TouchableOpacity>
    </View>
  );
}
