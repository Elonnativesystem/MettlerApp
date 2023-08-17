import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const VitalBtnHorizontal = ({icon, title, value}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{icon}</Text>
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default VitalBtnHorizontal;
