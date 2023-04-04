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

const accountList = [
  {
    label: "Ví Apec",
    icon: "star",
    money: "***********",
  },
  {
    label: "Hoa hồng",
    icon: "star",
    money: "12345678901",
  },
];

export default function AccountList() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: 100,
        padding: 20,
      }}
    >
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

const styles = StyleSheet.create({});
