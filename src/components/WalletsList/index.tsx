import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { Wallet } from '../../models/Wallet';
import WalletItem from '../WalletItem';


export interface Props {
    walletList?: Wallet[],
}

const WalletList: FC<Props> = (props) => {
    const { walletList } = props;
    console.log(walletList);

    if (walletList && walletList.length > 0) {
        if (walletList.length > 3) {
            return (
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <View style={styles.container}>
                        {walletList?.map((item, index) => {
                            return <WalletItem wallet={item} key={index} />;
                        })}
                    </View>
                </ScrollView>
            );
        }
        return (
            <View style={styles.container}>
                {walletList?.map((item, index) => {
                    return <WalletItem wallet={item} key={index} />;
                })}
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>Loading ...</Text>
        </View>
    );
};

export default WalletList;

const styles = StyleSheet.create({
    scrollView: {},
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
