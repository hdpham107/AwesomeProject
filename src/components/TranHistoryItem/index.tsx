import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { TranHistory } from '../../models/TranHistory';

export interface Props {
    tranHistory?: TranHistory,
}

const TranHistoryItem: FC<Props> = (props) => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <View style={styles.tranHistoryItem}>
            <Text style={styles.tranHistoryDate}>
                9:00 12/11
            </Text>
            <Text style={styles.tranHistoryMoney}>
                +500.000
            </Text>
        </View>
    );
};

export default TranHistoryItem;

const styles = StyleSheet.create({
    tranHistoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
    },
    tranHistoryDate: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12,
        color: 'white',
    },
    tranHistoryMoney: {
        fontFamily: 'Tahoma',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 12,
        color: 'white',
    },
});
