import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
//import { useFonts, Montserrat } from '@expo-google-fonts/montserrat';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registrado con: ', user.email)
            })
            .catch(error => alert(error.message))
    }
    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logeado con: ', user.email)
                //navigation.navigate("Home")
            })
            .catch(error => alert(error.message))
    }

    return (

        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={{ uri: "https://cdn.discordapp.com/attachments/728997433140314144/970005555492061294/fondo_bienvenida_3.jpg" }}
                //resizeMode="cover"
                blurRadius={1.2}
                style={styles.image}
            >
                <View style={styles.tittleContainer}>
                    <Text style={styles.tittle1_1}>BIENVENIDO A</Text>
                    <Text style={styles.tittle1_2}>SWAP</Text>
                </View>
                <View style={styles.inputContainer}>

                    <View style={styles.inputContainer1_1}>
                        <View style={styles.inputContainer1_1_left}>
                            <Image
                                source={require('../assets/icons/icon_email.png')} //Change your icon image here
                                style={styles.ImageStyle}
                            />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#FFFFFF"
                                value={email}
                                onChangeText={text => setEmail(text)}
                                style={styles.input}

                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer1_2}>
                        <View style={styles.inputContainer1_2_left}>
                            <Image
                                source={require('../assets/icons/icon_password.png')} //Change your icon image here
                                style={styles.ImageStyle}
                            />
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor="#FFFFFF"
                                value={password}
                                onChangeText={text => setPassword(text)}
                                style={styles.input}
                                secureTextEntry
                            />
                        </View>
                    </View>

                </View>
                <View style={[styles.buttonContainer, styles.ShadowProp]}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.buttonOptions]}>
                        <Text style={styles.OptionsText}>Registrarse</Text>
                    </TouchableOpacity>
                    <View style={styles.VerticleLine}></View>


                    <TouchableOpacity
                        onPress={() => { }}
                        style={[styles.buttonOptions]}>
                        <Text style={styles.OptionsText}>Olvide mi Contraseña</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittleContainer: {
        width: 330,
        paddingBottom: 50,
        bottom: 60,
    },
    tittle1_1: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 46,
        color: 'white',
        textAlign: 'center',
    },
    tittle1_2: {
        fontFamily: 'Montserrat',
        fontWeight: "700",
        fontSize: 64,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 0.5,
        bottom: 18,
    },
    inputContainer: {
        width: 330,
        opacity: 0.8,
        marginBottom: 30,
        bottom: 60,

    },
    inputContainer1_1: {
        width: 330,
        height: 46,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        //paddingHorizontal: 15,
        //paddingVertical: 10,
        borderRadius: 32,
        marginTop: 30,
        left: 2,
    },
    inputContainer1_2: {
        width: 330,
        height: 46,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        //paddingHorizontal: 15,
        //paddingVertical: 10,
        borderRadius: 32,
        marginTop: 30,
    },
    inputContainer1_1_left: {
        flexDirection: 'row',
        width: '90%'
    },
    inputContainer1_2_left: {
        flexDirection: 'row',
        width: '90%'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    TextInput: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: "700",
    },
    input: {
        color: 'white',
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Montserrat',

    },
    placeholder: {
        color: 'white',
    },
    buttonContainer: {
        width: 330,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
    },
    ShadowProp: {
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: 330,
        height: 46,
        padding: 10,
        borderRadius: 32,
        alignItems: 'center',
    },
    buttonText: {
        color: '#A98056',
        fontWeight: '700',
        fontSize: 19,
        fontFamily: 'Montserrat',
    },
    image: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    optionsContainer: {
        top: 120,
        color: '#A98056',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "70%",
        //alignItems: 'flex-start'
    },
    VerticleLine: {
        height: 35,
        width: 2,
        backgroundColor: 'white',
    },
    OptionsText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
    buttonOptions: {

    },
})