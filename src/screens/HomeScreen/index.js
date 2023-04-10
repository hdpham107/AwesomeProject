/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import ProductList from "../../components/ProductList";
import { colors } from "../../constants";
import ActionList from "../../components/ActionList";
import AccountList from "../../components/AccountList";
import Banner from "../../components/Banner";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Banner />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.accountView}> */}
        <AccountList />
        <ActionList />
        {/* </View> */}

        {/* <View style={styles.productView}> */}
        <ProductList />
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    // flex: 1
  },
  scrollView: {
    //  flex: 1,
    backgroundColor: colors.backgroundHome,
  },
  // accountView: { flex: 2, padding: 5 },
  // productView: { flex: 7 },
});
