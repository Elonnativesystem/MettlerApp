import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MCicon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const VitalBtn = ({label, icon, color, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <MCicon name={icon} size={30} color={color} />
      <Text style={styles.txtStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default VitalBtn;
