import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const ToDo = ({ value, onPress, id }) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : styles.text)}
      onPress={() => onPress(id)}
      android_ripple={{ color: "#220000" }}
    >
      <Text style={{ color: "white", fontWeight: "600" }}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "red",
  },
  pressed: {
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "red",
    opacity: 0.5,
  },
});

export default ToDo;
