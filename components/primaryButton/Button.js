import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Button = ({onPress, label, active, disabled}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnView,
        active ? {backgroundColor: '#0f3995'} : {backgroundColor: '#E0E7F4'},
      ]}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
