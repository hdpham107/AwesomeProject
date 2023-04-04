/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AccountItem({ item, left }) {
  const { label, icon, money } = item;
  return (
    <View
      style={[
        left ? styles.borderRaiusLeft : styles.borderRaiusRight,
        {
          padding: 5,
          backgroundColor: "white",
          width: 128,
          height: 64,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 5,
        },
      ]}
    >
      <Icon name={icon} size={24} styles={{ alignSelf: "flex-start" }} />
      <View styles={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 11, alignSelf: "center" }}>{label}</Text>
        <Text>{money}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderRaiusLeft: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  borderRaiusRight: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
});
