import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const VitalBtnVertical = ({icon, header, data, bg1, bg2}) => {
  return (
    <View style={[styles.vitalBtn2, {backgroundColor: bg1}]}>
      <View style={[styles.vitalBtn2Icon, {backgroundColor: bg2}]}>
        <Text>{icon}</Text>
      </View>
      <Text style={styles.vitalBtn2Text}> {header}</Text>
      <Text style={styles.vitalBtn2Data}>{data}</Text>
    </View>
  );
};

export default VitalBtnVertical;
