import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CalendarDate = ({date, day}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{day}</Text>
      </View>
      <View style={styles.dayView}>
        <Text style={styles.dayText}>{date}</Text>
      </View>
    </View>
  );
};

export default CalendarDate;
