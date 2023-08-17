import {View, Text} from 'react-native';
import React from 'react';
import {styles2} from './styles2';
import {CalendarDate, HeartECG, ScheduleBtn} from '../../../components';

const PatientDetails2 = () => {
  return (
    <View style={styles2.container}>
      <View style={styles2.header}>
        <Text style={styles2.headerText}>Upcoming Schedule</Text>
        <View style={styles2.addIcon}>
          <Text style={styles2.addIconText}>+</Text>
        </View>
      </View>
      <View style={styles2.calenderView}>
        <CalendarDate date="Wed" day={16} />
        <CalendarDate date="Thu" day={17} />
        <CalendarDate date="Fri" day={18} />
        <CalendarDate date="Sat" day={19} />
      </View>
      <View style={styles2.scheduleBtns}>
        <ScheduleBtn icon="#" header="Yoga" data="07:30-08:30" />
        <ScheduleBtn icon="#" header="Generic Checkup" data="08:00-08:15" />
        <ScheduleBtn icon="#" header="Breakfast" data="08:30-09:00" />
      </View>
      <View style={styles2.ECGview}>
        <HeartECG />
      </View>
    </View>
  );
};

export default PatientDetails2;
