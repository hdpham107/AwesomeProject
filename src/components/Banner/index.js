/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { images } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomInput from "../CustomElement/CustomInput";

export default function Banner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.banner}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View style={styles.iconView}>
          {/* <Icon name="barcode" size={21} style={styles.iconItem} /> */}
          <TouchableOpacity
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
            <Image style={styles.img} source={images.scanner} />
          </TouchableOpacity>
          <TouchableOpacity
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
            <Icon name="bell" size={21} style={styles.iconItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <CustomInput placeholder={"Tìm kiếm"} iconName={"search"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 145,
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 5,
  },
  iconItem: {
    color: "white",
    marginHorizontal: 10,
  },
  inputView: {
    marginHorizontal: 17,
    justifyContent: "flex-start",
  },
});
