import { StyleSheet, TextInput, View } from 'react-native';
import React, { FC, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface Props {
  placeholder?: string,
  iconName?: string;
}

const CustomInput: FC<Props> = ({ placeholder = '', iconName = undefined }) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      {iconName ? <Icon name={iconName} size={13} style={styles.icon} /> : ''}
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    padding: 10,
    position: 'absolute',
    left: 0,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 36,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 34,
    color: 'white',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
});
