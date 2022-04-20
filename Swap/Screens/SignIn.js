import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import firebase from "../firebase";

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "black" }}
        onPress={signInWithGoogle}
      >
        <Text style={{ color: "white" }}>Sign In With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: "black" }} onPress={signOut}>
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
