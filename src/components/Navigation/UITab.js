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
import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, HomeScreen, PolicyScreen, TransactionHistoryScreen } from '../../screens';
import { colors, images } from '../../constants';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
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
                tabBarLabelStyle: {...styles.tabBarLabel},
                tabBarIcon: ({focused, color, size}) => (
                    // <Icon name="home" size={23}  color={focused ? colors.primary : colors.inactive} />
                    <Image source={images.home} style={styles.tabBarIcon} />
                )
            }}
        />
        <Tab.Screen 
            name="PolicyScreen" 
            component={PolicyScreen} 
            options={{ 
                tabBarLabel: 'Chính sách', 
                tabBarLabelStyle: {...styles.tabBarLabel},
                tabBarIcon: ({focused, color, size}) => (
                    // <Icon name="star" size={23}  color={color} />
                    <Image source={images.policy} style={styles.tabBarIcon} />
                )
            }}
        />
        <Tab.Screen 
            name="TransactionHistoryScreen" 
            component={TransactionHistoryScreen} 
            options={{ 
                tabBarLabel: 'Lịch sử giao dịch',
                tabBarLabelStyle: {...styles.tabBarLabel},
                tabBarIcon: ({focused, color, size}) => (
                    // <Icon name="history" size={23}  color={color} />
                    <Image source={images.history} style={styles.tabBarIcon} />
                )
            }}
        />
        <Tab.Screen 
            name="AccountScreen" 
            component={AccountScreen} 
            options={{ 
                tabBarLabel: 'Tài khoản',
                tabBarLabelStyle: {...styles.tabBarLabel},
                tabBarIcon: ({focused, color, size}) => (
                    // <Icon name="user" size={23}  color={color} />
                    <Image source={images.account} style={styles.tabBarIcon} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarLabel: {
        // color: '#000',
        fontSize: 8,
        fontWeight: '400',
        lineHeight: 10,
    },
    // tabBarIcon: {
    //     width: '100%',
    //     height: 26,
    //     resizeMode: 'contain'
    // }
})