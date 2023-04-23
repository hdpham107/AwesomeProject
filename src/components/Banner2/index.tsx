import { Alert, Image, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { images } from '../../constants';
import CustomInput from '../CustomElement/CustomInput';

export interface Props {

}

const Banner2: FC<Props> = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.banner}
                resizeMode="cover"
                style={styles.imgBackground}
            >
                <View style={styles.content}>
                    <View style={styles.inputView}>
                        <CustomInput />
                    </View>
                    <View style={styles.iconView}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('hello');
                            }}
                        >
                            <Image style={styles.iconItem} source={images.bell} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('hello');
                            }}
                        >
                            <Image style={styles.iconItem} source={images.scanner} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('hello');
                            }}
                        >
                            <Image style={styles.iconItem} source={images.avatar} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Banner2;

const styles = StyleSheet.create({
    container: {
        height: 145,
    },
    imgBackground: {
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
        marginHorizontal: 5,
    },
    inputView: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 13,
    },
    iconView: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconItem: {},
});
