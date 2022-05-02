import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { IconButton, Colors, Button } from 'react-native-paper';


export default function BottomTabs({ navigation }) {

    return (
        <View style={{ flexDirection: "row", margin: 5, marginHorizontal: 30, justifyContent: "space-between" }}>

            <View style={styles.home}>
                <IconButton
                    icon="home"
                    size={30}
                    // text="Inicio"
                    onPress={() => navigation.navigate("Home")}
                />
                <Text style={{ bottom: 10 }}>Home</Text>
            </View>
            <View style={styles.chats}>
                <IconButton
                    icon="forum"
                    size={30}
                    // text="Chat"
                    onPress={() => navigation.navigate("ChatsList")}
                />
                <Text style={{ bottom: 10 }}>Chats</Text>
            </View>
            {/* <View style={styles.favorites}>
                <IconButton
                    icon="heart"
                    size={30}
                    // text="perfil"
                    onPress={() => navigation.navigate("Favoritos")}
                />
                <Text style={{ bottom: 10 }}>Favoritos</Text>
            </View> */}
            <View style={styles.profile}>
                <IconButton
                    icon="account"
                    size={30}
                    // text="perfil"
                    onPress={() => navigation.navigate("Profile")}
                />
                <Text style={{ bottom: 10 }}>Perfil</Text>
            </View>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Icon icon="user" text="Perfil" />
            </TouchableOpacity> */}
        </View>
    )
}



const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{ marginBottom: 3, alignSelf: "center" }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    home: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chats: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favorites: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})