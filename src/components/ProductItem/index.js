/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProductItem({ item }) {
  return (
    <View style={{ margin: 20, padding: 20, backgroundColor: "white", width: 150, height: 145, borderRadius: 5, shadowOffset: {width: 0, height: 4}, shadowOpacity: 4, shadowColor: 'rgba(0, 0, 0, 0.25)',}}>
      <Image
        style={{
          width: 100,
          height: 90,
          resizeMode: "cover",
          borderRadius: 20,
        }}
        source={require("../../assets/images/shopping.png")}
      />
      <Text style={styles.title}>{item.productName} {item.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
