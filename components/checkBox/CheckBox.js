import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"

const CheckBox = ({label, onPress, checked}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={[styles.box, checked && {backgroundColor: '#0f3995'}]}>
        <MCIcon name="check-bold" size={20} color="#FFF" />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;




