import { View, Text } from "react-native";
import React from "react";
import firebase from "../firebase";
import SignIn from "./SignIn";

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);

const messagesRef = firestore.collection("messages");
const query = messagesRef.orderBy("createdAt").limit(25);

const [messages] = useCollectionData(query, { idField: "id" });

export default function Chat() {
  return (
    <View>
      {/* <View>{user ? <ChatRoom /> : <SignIn />}</View> */}
      <View>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </View>
    </View>
  );
}

// function ChatRoom() {}

function ChatMessage(props) {
  const { text, uid } = props.message;

  return (
    <View>
      <View>{text}</View>
    </View>
  );
}
