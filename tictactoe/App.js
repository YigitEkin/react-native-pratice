import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Gamepad from "./components/Gamepad";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Gamepad />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
