import React from "react";
import { View, StyleSheet, Button } from "react-native";

const OkeyTasiYan = ({ count, setCount }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setCount((prev) => prev + count);
        }}
        title={`${count}`}
      ></Button>
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
});

export default OkeyTasiYan;
