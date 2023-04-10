/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CustomInput({ placeholder, iconName }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={13} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    position: "relative",
  },
  icon: {
    padding: 10,
    position: "absolute",
    left: 0,
    color: 'white',
  },
  input: {
    width: "100%",
    height: 36,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 34,
    color: "white",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
  },
});
