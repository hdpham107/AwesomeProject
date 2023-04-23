import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';

export interface Props {
    color: string;
    borderStyle: string;
}

const Devider: FC<Props> = (props) => {
    return (
        <View style={styles(props).devider} />
    );
};

export default Devider;

const styles = (props: Props) => StyleSheet.create({
    devider: {
        borderBottomWidth: 1,
        width: '100%',
        borderBottomColor: props.color,
        borderStyle: props.borderStyle === 'solid' ? 'solid' : (props.borderStyle === 'dotted' ? 'dotted' : 'dashed'),
    },
});
