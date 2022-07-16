import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const OkeyTasiYan = ({ count, setCount }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setCount((prev) => prev + count);
        }}
        style={styles.button}
      >
        <Text style={styles.text}>{`${count}`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 1,
    width: "22%",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default OkeyTasiYan;
