/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PolicyScreen from '../screens/PolicyScreen';
import TransactionHistory from '../screens/TransactionHistoryScreen';
import AccountScreen from '../screens/AccountScreen';
import { colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.primary,
    // tabBarIcon: ({focused, color, size}) => {
    //     let screenName = route.name
    //     let iconName = "user";
    //     if(screenName == "HomeScreen") {
    //         iconName = "house";
    //     } else if(screenName == "PolicyScreen") {
    //         iconName = "file-certificate";
    //     } else if(screenName == "TransactionHistoryScreen") {
    //         iconName = "clock-rotate-left";
    //     }
    //     return (
    //         <Icon 
    //             name={iconName}
    //             size={23} 
    //             color={colors.primary} 
    //         />
    //     )
    // },
})
export default function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Trang chủ', 
                tabBarIcon: ({focused, color, size}) => (
                    <Icon name="home" size={23}  color={focused ? colors.primary : colors.inactive} />
                )
            }}
        />
        <Tab.Screen 
            name="PolicyScreen" 
            component={PolicyScreen} 
            options={{ 
                tabBarLabel: 'Chính sách', 
                tabBarIcon: ({focused, color, size}) => (
                    <Icon name="star" size={23}  color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="TransactionHistoryScreen" 
            component={TransactionHistory} 
            options={{ 
                tabBarLabel: 'Lịch sử giao dịch',
                tabBarIcon: ({focused, color, size}) => (
                    <Icon name="history" size={23}  color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="AccountScreen" 
            component={AccountScreen} 
            options={{ 
                tabBarLabel: 'Tài khoản',
                tabBarIcon: ({focused, color, size}) => (
                    <Icon name="user" size={23}  color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})