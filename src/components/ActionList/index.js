/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import ActionItem from '../ActionItem';

const actionItems = [
  {
    label: 'Nạp',
    icon: 'star',
  },
  {
    label: 'Rút',
    icon: 'star',
  },
  {
    label: 'Chuyển',
    icon: 'star',
  },
  {
    label: 'Thanh toán',
    icon: 'star',
  },
];

export default function ActionList() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 100,
        padding: 20,
      }}>
      {actionItems.map((item, index) => {
        return (<ActionItem item={item} key={index} />)
      })}
    </View>
  )
}

const styles = StyleSheet.create({})