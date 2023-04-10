/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ProductItem({ item }) {
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
      <View style={styles.imgView}>
        <Image style={styles.img} source={item.url} />
      </View>
      <View style={styles.txtView}>
        <Text style={styles.text}>{item.productName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 145,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 4,
    // shadowColor: "rgba(0, 0, 0, 0.5)",
    // shadowRadius: 4,
    // elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imgView: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: {
    height: "100%",
    resizeMode: "contain",
  },
  txtView: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 9,
    lineHeight: 11,
    fontWeight: "400",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
