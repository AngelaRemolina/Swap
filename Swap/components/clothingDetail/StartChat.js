import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ItemSummary from "./ItemSummary";

export default function StartChat(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const startChatContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          backgroundColor: "gray",
        }}
      >
        <ItemSummary item={props} />
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>
              ¿Estás seguro que quieres iniciar un chat con el vendedor?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {startChatContent()}
      </Modal>
      <View
        style={{
          alignItems: "center",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 13,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 30,
            width: 300,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Iniciar Chat</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
