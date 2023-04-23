import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../constants';
import { Wallet } from '../../models/Wallet';

export interface Props {
    wallet?: Wallet,
}

const WalletItem: FC<Props> = (props) => {
    const { wallet } = props;
    console.log(props);

    if (wallet) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    Alert.alert('hello');
                }}
            >
                <Text style={styles.title}>
                    {/* Ví tiền */}
                    {wallet.name}
                </Text>
                <Image source={require('../../assets/images/icon_cash_wallet.png')} style={styles.icon} />
                <Text style={styles.balance}>
                    {/* 50.000.000 */}
                    {wallet.walletDetail.balance.toLocaleString('vn-VN')}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('hello');
                    }}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        locations={[0, 1]}
                        colors={['#FFD600', '#DB00FF']}
                        style={styles.button}
                    >
                        <Text style={styles.label}>
                            {/* Marketting */}
                            {wallet.btnLabel}
                        </Text>
                        <Image source={images.arrow} style={styles.arrow} />
                    </LinearGradient>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Loading ...</Text>
        </View>
    );

};

export default WalletItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        borderRadius: 20,
        // box shadow start
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        // box shadow end
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        color: 'rgba(30, 30, 30, 0.7)',

        paddingTop: 7,
        paddingBottom: 9,
    },
    icon: {
        width: 56,
        height: 56,
    },
    balance: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 19,
        lineHeight: 28,
        color: 'rgba(30, 30, 30, 0.7)',
    },
    button: {
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginBottom: 12,
    },
    label: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginRight: 5,
    },
    arrow: {
        width: 8,
        height: 8,
    },
});
