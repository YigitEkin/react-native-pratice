import React from "react";
import { View, Modal, StyleSheet, Text, Button } from "react-native";

const ResultModal = ({ text, visible, handleClose }) => {
  return (
    <View style={styles.container}>
      <Modal animationType={"fade"} transparent={false} visible={visible}>
        {/*All views of Modal*/}
        <View style={styles.modal}>
          <Text style={styles.text}>{text}</Text>
          <Button
            title="Click To Close Modal"
            style={styles.button}
            onPress={handleClose}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  button: {
    marginTop: 40,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    height: 300,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 20,
  },
});

export default ResultModal;
