import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
