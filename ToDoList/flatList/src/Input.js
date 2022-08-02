import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ onTextChange, input }) => {
  return (
    <TextInput
      style={styles.input}
      value={input}
      onChangeText={(e) => onTextChange(e)}
      placeholder="Please Enter the Goal"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
});

export default Input;
