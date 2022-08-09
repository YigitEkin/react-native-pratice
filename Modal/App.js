import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ResultModal from "./components/ResultModal";
import InputField from "./components/InputField";
import React, { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const handleClose = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    text && setVisible(true);
  };

  return (
    <View style={styles.container}>
      <InputField handleOpen={handleOpen} setText={setText} />
      <ResultModal handleClose={handleClose} visible={visible} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
});
