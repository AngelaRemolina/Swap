import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  console.log("App excecuted!"); // debug 
  let contPress = 0;
  let handlePress = () => {
    contPress += 1;
    console.log("Text pressed",contPress,"times");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hola Mundo!!</Text>
      <Image source={require('./assets/icon.png')}/>
      <Image source={{
        uri:"https://picsum.photos/200/300",
        width: 200,
        height: 300
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
