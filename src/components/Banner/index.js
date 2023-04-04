/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { images } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const bannerImg = images.banner;

export default function Banner() {
  return (
    <View style={{ flex: 1, color: "white" }}>
      <ImageBackground
        source={bannerImg}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "center",
            marginEnd: 10,
          }}
        >
          <Icon
            name="barcode"
            size={24}
            style={{ color: "white", marginEnd: 10 }}
          />
          <Icon name="bell" size={24} style={{ color: "white" }} />
        </View>
        <View style={{color: "white"}}>
          <TextInput
            style={{ height: 40, margin: 5, borderWidth: 1, padding: 10, borderColor: 'rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            placeholder="Tìm kiếm"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
