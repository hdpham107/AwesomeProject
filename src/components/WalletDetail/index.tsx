import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Devider from '../Devider';
import { images } from '../../constants';
import { Wallet } from '../../models/Wallet';
import TranHistoryItem from '../TranHistoryItem';

export interface Props {
    walletDetail?: Wallet,
}

const WalletDetail: FC<Props> = (props) => {
    console.log(props);
    const { walletDetail } = props;
    if (walletDetail) {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 1, y: 0.4 }}
                end={{ x: 0.1, y: 0.65 }}
                locations={[0, 0.20, 0.40]}
                // colors={['#0034ED', '#0D6EFF', '#54B0F3', '#25CBFF']}
                colors={['#0D6EFF', '#54B0F3', '#25CBFF']}
                style={styles.linearGradient}>

                <View style={styles.top}>
                        <Image source={require('../../assets/images/icon_cash_wallet.png')} style={styles.topImgLeft} />
                    <View style={styles.topText}>
                        <Text style={styles.title}>
                            {/* Ví thưởng */}
                            {walletDetail.name}
                        </Text>
                        <Text style={styles.balance}>
                            {/* 500000 */}
                            {walletDetail.walletDetail.balance.toLocaleString('vn-VN')}
                        </Text>
                        <Text style={styles.newestTranHistory}>
                            {/* +500.000 */}
                            {walletDetail.walletDetail.tranHistory[0].money > 0 ? '+' : '-'}
                            {walletDetail.walletDetail.tranHistory[0].money.toLocaleString('vn-VN')}
                        </Text>
                    </View>
                    <Image source={images.change} style={styles.topImgRight} />
                </View>

                <Devider color={'rgba(255, 255, 255, 0.7)'} borderStyle={'solid'} />

                <View style={styles.middle}>
                    <View style={styles.content}>
                        <View style={styles.balanceView}>
                            <Text style={styles.balanceTitle}>Số Dư Ví</Text>
                            <Text style={styles.balanceNumber}>
                                {/* 5.000.000 */}
                                {walletDetail.walletDetail.balance.toLocaleString('vn-VN')}
                            </Text>
                        </View>

                        <Devider color={'rgba(255, 255, 255, 0.7)'} borderStyle={'dashed'} />

                        <View style={styles.tranHistoryView}>
                            <Text style={styles.tranHistoryTitle}>Lịch sử giao dịch gần nhất</Text>
                            {/* <View style={styles.tranHistoryItem}>
                                <Text style={styles.tranHistoryDate}>9:00 12/11</Text>
                                <Text style={styles.tranHistoryMoney}>+500.000</Text>
                            </View>
                            <View style={styles.tranHistoryItem}>
                                <Text style={styles.tranHistoryDate}>9:00 12/11</Text>
                                <Text style={styles.tranHistoryMoney}>+500.000</Text>
                            </View>
                            <View style={styles.tranHistoryItem}>
                                <Text style={styles.tranHistoryDate}>9:00 12/11</Text>
                                <Text style={styles.tranHistoryMoney}>+500.000</Text>
                            </View> */}
                            {walletDetail.walletDetail.tranHistory.map((item, index) => {
                                return (
                                    <TranHistoryItem tranHistory={item} key={index}/>
                                );
                            })}
                        </View>
                    </View>
                    <View style={styles.level}>
                        <Image source={images.walletLevel} style={styles.levelImg} />
                    </View>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('hello');
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Xem Lịch Sử Giao Dịch</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
    }
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

export default WalletDetail;

const styles = StyleSheet.create({
    container: {
    },
    linearGradient: {
        paddingHorizontal: 20,
        borderRadius: 20,
        // box shadow start
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 5,
        // box shadow end
    },
    // TOP
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingBottom: 12,
        paddingBottom: 6,
        // paddingTop: 14,
        paddingTop: 7,
    },
    topImgLeft: {
        width: 56,
        height: 56,
    },
    topImgRight: {
        width: 42,
        height: 42,
    },
    topText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        color: '#FFFFFF',
    },
    balance: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 36,
        color: '#FFFFFF',
    },
    newestTranHistory: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14,
        color: '#80FFA3',
    },
    // MIDDLE
    middle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    balanceView: {
        paddingBottom: 8,
    },
    balanceTitle: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    balanceNumber: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 21,
        color: 'white',

        paddingVertical: 3,
    },
    tranHistoryView: {
        paddingTop: 8,
    },
    tranHistoryTitle: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        color: 'rgba(255, 255, 255, 0.7)',

        paddingBottom: 10,
    },
    level: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelImg: {
        width: '100%',
        resizeMode: 'contain',
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 17,
        marginBottom: 8,
    },
    button: {
        width: '100%',
        // paddingVertical: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(28, 117, 188, 0.3)',
        borderRadius: 10,
        // box shadow start
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 0,
        // box shadow end
    },
    buttonText: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 21,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
