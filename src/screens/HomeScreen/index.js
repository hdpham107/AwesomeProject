/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View } from "react-native";
import React from "react";
import ProductList from "../../components/ProductList";
import { colors } from "../../constants";
import ActionList from "../../components/ActionList";
import AccountList from "../../components/AccountList";
import Banner from "../../components/Banner";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, color: "black"}}>
        <Banner />
      </View>

      <View style={{ flex: 9, backgroundColor: colors.backgroundHome }}>
        <View style={{}}>
          <AccountList />
          <ActionList />
        </View>
        <View style={{ flex: 7 }}>
          <ProductList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
