import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, images } from '../../constants';
import Banner2 from '../../components/Banner2';
import MyOrder from '../../components/MyOrder';
import { Wallet } from '../../models/Wallet';
import WalletDetail from '../../components/WalletDetail';
import WalletList from '../../components/WalletsList';

const walletData: Wallet[] = [
  {
    id: 1,
    name: 'Ví tiền mặt',
    iconUri: `${images.cashWallet}`,
    btnLabel: 'Nạp tiền',
    walletDetail: {
      balance: 5000000,
      tranHistory: [
        { id: 1, time: '2023-04-18T08:20:13.436Z', money: 500000 },
        { id: 2, time: '2023-04-18T08:21:13.436Z', money: -500000 },
        { id: 3, time: '2023-04-18T08:22:13.436Z', money: -500000 },
      ],
    },
  },
  {
    id: 2,
    name: 'Ví hoa hồng',
    iconUri: `${images.commissionWallet}`,
    btnLabel: 'Marketting',
    walletDetail: {
      balance: 1000000,
      tranHistory: [
        { id: 1, time: '2023-04-18T08:20:13.436Z', money: 500000 },
        { id: 2, time: '2023-04-18T08:21:13.436Z', money: -500000 },
        { id: 3, time: '2023-04-18T08:22:13.436Z', money: -500000 },
      ],
    },
  },
  {
    id: 3,
    name: 'Ví thưởng',
    iconUri: `${images.bonusWallet}`,
    btnLabel: 'Voucher',
    walletDetail: {
      balance: 1000000,
      tranHistory: [
        { id: 1, time: '2023-04-18T08:20:13.436Z', money: 500000 },
        { id: 2, time: '2023-04-18T08:21:13.436Z', money: -500000 },
        { id: 3, time: '2023-04-18T08:22:13.436Z', money: -500000 },
      ],
    },
  },
  {
    id: 4,
    name: 'Ví cổ phiếu',
    iconUri: `${images.shareWallet}`,
    btnLabel: 'Đầu tư',
    walletDetail: {
      balance: 1000000,
      tranHistory: [
        { id: 1, time: '2023-04-18T08:20:13.436Z', money: 500000 },
        { id: 2, time: '2023-04-18T08:21:13.436Z', money: -500000 },
        { id: 3, time: '2023-04-18T08:22:13.436Z', money: -500000 },
      ],
    },
  },
];

const HomeScreen2 = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [walletDetail, setWalletDetail] = useState<Wallet>(wallets[0]);

  useEffect(() => {
    setWallets(walletData);
    return () => { };
  }, []);

  useEffect(() => {
    setWalletDetail(wallets[0]);
  }, [wallets]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Banner2 />
      </View>
      <View style={styles.content}>
        <View style={styles.walletList}>
          <WalletList walletList={wallets} />
        </View>
        <View style={styles.walletDetail}>
          <WalletDetail walletDetail={walletDetail} />
        </View>
        <View style={styles.myOrder}>
          <MyOrder />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundHome,
    justifyContent: 'space-between',
  },
  banner: {},
  content: {
    width: '100%',
    position: 'absolute',
    top: 104,
    left: 0,
  },
  walletList: {
  },
  walletDetail: {
    margin: 5,
    marginBottom: 0,
    padding: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  myOrder: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 7,
  },
});
