import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from "react";
import { IconButton, Colors, Button } from 'react-native-paper';
import { auth } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs from "../components/home/BottomTabs";
import { useFonts } from 'expo-font';

export default function Profile() {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top_t}>

          <TouchableOpacity onPress={() => console.log("editar perfil")} style={{ left: 160 }}>
            <IconButton
              icon="account-edit-outline"
              size={30}
              color='gray'
            />
          </TouchableOpacity>
        </View>


        <View style={styles.top_Info}>

          <View style={styles.name}>

            <View style={styles.circle_User}></View>
            <Text style={{ color: '#A98056', fontWeight: "bold", fontSize: 25 }}>Juan Pérez</Text>
          </View>

          <View style={styles.cellphone}>
            <IconButton
              icon="phone"
              size={25}
              color='gray'
            />
            <Text style={{ color: 'gray' }}>(+57) 3213526724</Text>
          </View>

          <View style={styles.email}>
            <IconButton
              icon="email"
              size={25}
              color='gray'
            />
            <Text style={{ color: 'gray' }}>{auth.currentUser?.email}</Text>
          </View>

        </View>

        <View style={styles.HorizontalLine}></View>

        <View style={styles.favorites_Profile}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={[styles.buttonOptions1]}>
            <IconButton
              icon="heart"
              size={30}
            />
            <Text>Tus Favoritos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signOut_Profile}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={[styles.buttonOptions2]}>
            <IconButton
              icon="power"
              size={30}
              color="#83BD75"
            />
            <Text style={{ color: "#83BD75" }}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top_t: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_Info: {
    right: 50,
  },
  name: {
    top: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  circle_User: {
    height: 90,
    width: 90,
    borderRadius: 50,
    backgroundColor: '#A98056',
    right: 20,

  },
  cellphone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 56,
    paddingTop: 20,
  },
  email: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 56,
  },
  HorizontalLine: {

    alignItems: 'center',
    height: 1.9,
    width: "100%",
    backgroundColor: '#C4C4C4',
  },
  favorites_Profile: {
    top: 10,
    width: '90%',
    right: 100,
  },
  buttonOptions1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOut_Profile: {
    width: '90%',
    right: 100,
  },
  buttonOptions2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },



})
