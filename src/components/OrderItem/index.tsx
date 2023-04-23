import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export interface Props {
    label: string;
    icon: any;
}

const OrderItem: FC<Props> = (props) => {
    const { label, icon } = props;

    return (
        <TouchableOpacity
            onPress={() => {
                Alert.alert('hello');
            }}
            style={styles.containner}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    containner: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 80,
        height: 80,
        paddingVertical: 10,
    },
    icon: {
        margin: 5,
    },
    label: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
    },
});
