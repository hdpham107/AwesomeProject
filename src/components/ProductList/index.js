/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import ProductItem from "../ProductItem";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ title }) => (
//   <View style={{ margin: 20, backgroundColor: "red" }}>
//     <Image
//       style={{
//         width: 90,
//         height: 90,
//         resizeMode: "cover",
//         borderRadius: 20,
//         marginRight: 15,
//       }}
//       source={require("../../assets/images/shopping.png")}
//     />
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export default function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Dịch vụ mua sắm online và offline",
      url: images.shopping,
    },
    {
      id: 2,
      productName: "Super pay",
      url: images.superPay,
    },
    {
      id: 3,
      productName: "Hội chợ thương mại 3D",
      url: images.tradeFair,
    },
    {
      id: 4,
      productName: "Super App",
      url: images.superApp,
    },
    {
      id: 5,
      productName: "Việc làm thêm và mini game",
      url: images.workGame,
    },
    {
      id: 6,
      productName: "Suppon (ngân hàng số)",
      url: images.suppon,
    },
  ]);
  
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={products}
        style={styles.productList}
        numColumns={2}
        renderItem={
          ({item}) => <ProductItem item={item} />
        }
        keyExtractor={(item) => item.id}
        key={(item) => item.id}
      /> */}
      {products.map((item, index) => {
        return (
          <ProductItem item={item} key={index} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  // productList: {
  //   margin: 20,
  // },
});
