import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

export interface Props {

}

const Wallet: FC<Props> = (props) => {
  console.log('====================================');
  console.log(props);
  console.log('====================================');
  return (
    <>
      <View style={styles.walletList}>
        {/* <WalletItem title={'Ví tiền mặt'} iconUri={images.cashWallet} balance={'5.000.000'} btnLabel={'Nạp tiền'} />
        <WalletItem title={'Ví hoa hồng'} iconUri={images.commissionWallet} balance={'1.000.000'} btnLabel={'Marketing'} />
        <WalletItem title={'Ví thưởng'} iconUri={images.bonusWallet} balance={'1.000.000'} btnLabel={'Voucher'} /> */}
      </View>
      <View style={styles.walletDetail}>
        {/* <WalletDetail title={'Ví tiền mặt'} iconUri={images.cashWallet} balance={'5.000.000'} newestTranHistory={'500.000'} /> */}
      </View>
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  walletList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  walletDetail: {},
});
