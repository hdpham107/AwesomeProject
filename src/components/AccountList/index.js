/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View } from "react-native";
import React from "react";
import AccountItem from "../AccountItem";
import { images } from "../../constants";

const accountList = [
  {
    label: "Ví Apec",
    icon: "star",
    money: "***********",
    urlImg: `${images.wallet}`,
  },
  {
    label: "Hoa hồng",
    icon: "star",
    money: "***********",
    urlImg: `${images.commission}`,
  },
];

export default function AccountList() {
  return (
    <View style={styles.container}>
      {accountList.map((item, index) => {
        if (index === 0) {
          return <AccountItem item={item} key={index} left={true} />;
        } else {
          return <AccountItem item={item} key={index} />;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    // backgroundColor: 'red',
  },
});
