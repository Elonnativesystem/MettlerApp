import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ScheduleBtn = ({icon, header, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{header}</Text>
        <Text style={styles.dataText}>{data}</Text>
      </View>
    </View>
  );
};

export default ScheduleBtn;
