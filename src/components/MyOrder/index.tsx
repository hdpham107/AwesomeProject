import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React from 'react';
import OrderItem from '../OrderItem';
import { images } from '../../constants';

const MyOrder = () => {
    return (
        <View style={styles.containner}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Đơn hàng của tôi</Text>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('hello');
                    }}
                >
                    <Text style={styles.headerHistory}>Xem lịch sử</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <OrderItem label="Chờ thanh toán" icon={images.account}/>
                <OrderItem label="Đang xử lý" icon={images.account}/>
                <OrderItem label="Đang vận chuyển" icon={images.account}/>
                <OrderItem label="Chờ đánh giá" icon={images.account}/>
            </View>
        </View>
    );
};

export default MyOrder;

const styles = StyleSheet.create({
    containner: {},
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    headerHistory: {
        color: '#00BFEA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
});
