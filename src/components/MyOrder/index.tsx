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
                <OrderItem label="Chờ thanh toán" icon={images.unpay}/>
                <OrderItem label="Đang xử lý" icon={images.processing}/>
                <OrderItem label="Đang vận chuyển" icon={images.transporting}/>
                <OrderItem label="Chờ đánh giá" icon={images.feedback}/>
            </View>
        </View>
    );
};

export default MyOrder;

const styles = StyleSheet.create({
    containner: {
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    headerHistory: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#00BFEA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
