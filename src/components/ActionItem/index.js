/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

export default function ActionItem({ item }) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => {
      Alert.alert("title", "body", [
        {
          text: "Yes",
          onPress: () => {
            console.log("nhấn yes");
          },
        },
        {
          text: "No",
          onPress: () => {
            console.log("nhấn no");
          },
        },
      ]);
    }}
    >
      <View style={styles.textView}>
        <Text style={styles.text}>{item.label}</Text>
      </View>
      <View style={styles.imgView}>
        {/* <Icon name={item.icon} size={23} /> */}
        <Image style={styles.img} source={item.urlImg} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    // marginHorizontal: 7,
    backgroundColor: "white",
    width: 83,
    height: 41,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  textView: {
    // flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '60%',
    textAlign: 'center',
  },
  text: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: "400",
    color: "black",
  },
  imgView: {
    // flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    width: '40%',
  },
  img: {
    width: "100%",
    resizeMode: "contain",
  },
});
