/* eslint-disable prettier/prettier */
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

export default function AccountItem({ item, left }) {
  const { label, icon, money, urlImg } = item;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        left ? styles.borderRadiusLeft : styles.borderRadiusRight,
      ]}
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
      {/* <Icon name={icon} size={24} styles={styles.icon} /> */}
      <View style={styles.imgView}>
        <Image style={styles.img} source={urlImg} />
      </View>
      <View style={styles.content}>
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textMoney}>{money}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 5,
    backgroundColor: "white",
    width: 128,
    height: 64,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  borderRadiusLeft: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  borderRadiusRight: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 0,
  },
  icon: { alignSelf: "flex-start" },
  imgView: {
    flex: 1,
    // backgroundColor: 'red',
    paddingLeft: 5,
  },
  img: {
    width: "100%",
    resizeMode: "contain",
  },
  content: {
    flex: 2,
    // alignItems: "center",
    // justifyContent: "flex-start",
    // backgroundColor: "pink",
  },
  textLabel: {
    fontSize: 13,
    alignSelf: "center",
    color: "black",
    lineHeight: 16,
    paddingVertical: 10,
  },
  textMoney: {
    fontSize: 10,
    alignSelf: "center",
    color: "black",
    lineHeight: 12,
    // paddingVertical: 5,
  },
});
