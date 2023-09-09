import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CalendarDate = ({date, day, bgColor, textColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.dateView}>
        <Text style={[styles.dateText, {color: textColor}]}>{date}</Text>
      </View>
      <View style={styles.dayView}>
        <Text style={[styles.dayText, {color: textColor}]}>{day}</Text>
      </View>
    </View>
  );
};

export default CalendarDate;
