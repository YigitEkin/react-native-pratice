import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const InputField = ({ handleOpen, setText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a text to display in modal</Text>
      <TextInput style={styles.input} onChangeText={setText} />
      <Button title="Display Modal" onPress={handleOpen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 40,
  },
});

export default InputField;
