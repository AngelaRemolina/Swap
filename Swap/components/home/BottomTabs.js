import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { IconButton, Colors, Button } from 'react-native-paper';


export default function BottomTabs({ navigation }) {

    return (
        <View style={{ flexDirection: "row", margin: 5, marginHorizontal: 30, justifyContent: "space-between" }}>

            <IconButton
                icon="home"
                size={30}
                // text="Inicio"
                onPress={() => navigation.navigate("Home")}
            />
            <IconButton
                icon="forum"
                size={30}
                // text="Chat"
                onPress={() => navigation.navigate("ChatsList")}
            />
            <IconButton
                icon="account"
                size={30}
                // text="perfil"
                onPress={() => navigation.navigate("Profile")}
            />
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