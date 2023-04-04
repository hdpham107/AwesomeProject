/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TransactionHistoryScreen({navigation}) {
  return (
    <View>
      <Text>TransactionHistory</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})