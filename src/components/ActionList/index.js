/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View } from "react-native";
import React from "react";
import ActionItem from "../ActionItem";
import { images } from "../../constants";

const actionItems = [
  {
    label: "Nạp",
    icon: "star",
    urlImg: `${images.deposit}`,
  },
  {
    label: "Rút",
    icon: "star",
    urlImg: `${images.withdraw}`,
  },
  {
    label: "Chuyển",
    icon: "star",
    urlImg: `${images.transfer}`,
  },
  {
    label: "Thanh toán",
    icon: "star",
    urlImg: `${images.pay}`,
  },
];

export default function ActionList() {
  return (
    <View style={styles.container}>
      {actionItems.map((item, index) => {
        return <ActionItem item={item} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    // backgroundColor: 'red',
    marginHorizontal: 17,
    marginVertical: 30,
  },
});
