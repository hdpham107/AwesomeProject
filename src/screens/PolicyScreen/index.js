/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PolicyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>detail screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
    
})