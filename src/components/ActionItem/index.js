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

export default function ActionItem({item}) {
  return (
    <View
      style={{
        padding: 5,
        backgroundColor: "white",
        width: 83,
        height: 41,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 11 }}>{item.label}</Text>
      <Icon name={item.icon} size={23} />
    </View>
  );
}

const styles = StyleSheet.create({});
