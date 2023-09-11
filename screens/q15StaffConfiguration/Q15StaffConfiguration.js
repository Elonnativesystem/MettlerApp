import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CalendarDate, ShiftTabs} from '../../components';
import DatePicker from 'react-native-date-picker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShiftComponent from './ShiftComponent';
import {getAllTodayShifts, getShiftTimes} from '../../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';

const Q15StaffConfiguration = () => {
  const dispatch = useDispatch();
  // const [duration, setDuration] = useState(null);
  // const [startTime, setStartTime] = useState(null);
  const AllShiftStaffs = useSelector(state => state.user.allShiftStaffs);
  const startTime = useSelector(state => state.user.startTime);
  const duration = useSelector(state => state.user.duration);
  const [date, setDate] = useState(new Date());
  const qYear = date.getFullYear().toString();
  const qMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const qDate = date.getDate().toString().padStart(2, '0');
  const RDate = qYear + qMonth + qDate;
  const [open, setOpen] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(3);
  const hoursArray = Array.from({length: 24}, (_, index) => index); // Create an array from 0 to 23
  const hoursSubarrays = [];
  for (let i = 0; i < hoursArray.length; i += 6) {
    hoursSubarrays.push(hoursArray.slice(i, i + 6));
  }
  const generateNextFourDates = () => {
    const today = new Date();
    const nextFourDates = [];
    for (let i = 0; i < 4; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(today.getDate() + i);
      nextFourDates.push(nextDate);
    }
    return nextFourDates;
  };
  const nextFourDates = generateNextFourDates();

  useEffect(() => {
    getShiftTimes(dispatch);
    getAllTodayShifts(dispatch, RDate);
  }, [RDate]);
  // useEffect(() => {
  //   getAllTodayShifts(dispatch, RDate);
  // }, [RDate]);
  // const getDurationAndStartTime = async () => {
  //   try {
  //     const storedDuration = await AsyncStorage.getItem('shiftDuration');
  //     const storedStartTime = await AsyncStorage.getItem('shiftStartTime');

  //     // Check if both values are available before setting the state
  //     if (storedDuration && storedStartTime) {
  //       setDuration(storedDuration);
  //       setStartTime(storedStartTime);
  //     } else {
  //       // Handle the case where either value is missing
  //       console.log('Missing duration or startTime in AsyncStorage');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDurationAndStartTime();
  // }, []);
  const endTime =
    (parseInt(startTime?.slice(0, 2)) + parseInt(duration))
      .toString()
      .padStart(2, '0') + ':00';
  const endTime1 =
    (parseInt(endTime?.slice(0, 2)) + parseInt(duration))
      .toString()
      .padStart(2, '0') + ':00';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Q15 Patient-Staff Configuration</Text>
      </View>
      {/* CALENDAR DATES */}
      <View style={styles.calendarHeader}>
        {nextFourDates.map((date1, index) => (
          <TouchableOpacity
            key={index}
            style={{borderWidth: 0}}
            activeOpacity={0.6}
            onPress={() => {
              setDate(date1);
              setSelectedDateIndex(index);
            }}>
            <CalendarDate
              bgColor={date.getDate() === date1.getDate() ? '#255ED6' : '#fff'} // Set background color conditionally
              textColor={date.getDate() === date1.getDate() ? '#fff' : '#000'} // Set background color conditionally
              date={date1.getDate()}
              day={date1
                .toLocaleString('default', {weekday: 'short'})
                .slice(0, 3)}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          <CalendarDate
            date={<MCIcon name="calendar-search" size={35} />}
            bgColor={selectedDateIndex > 5 ? '#2e6aea' : '#2e6aea'}
            textColor={'#fff'}
          />
        </TouchableOpacity>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date"
          modal
          open={open}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setSelectedDateIndex(100);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      {/* SHIFT TABS */}
      <ShiftTabs
        FirstRoute={() => (
          <ShiftComponent
            startTime={startTime ? startTime : 'Fetching'}
            endTime={endTime}
            date={RDate}
            shiftName="Shift-A"
            RNData={AllShiftStaffs[0]?.rnIncharge}
            SWData={AllShiftStaffs[0]?.schedule}
          />
        )}
        SecondRoute={() => (
          <ShiftComponent
            startTime={endTime}
            endTime={endTime1}
            date={RDate}
            shiftName="Shift-B"
            RNData={AllShiftStaffs[1]?.rnIncharge}
            SWData={AllShiftStaffs[1]?.schedule}
          />
        )}
        ThirdRoute={() => (
          <ShiftComponent
            startTime={endTime1}
            endTime={startTime}
            date={RDate}
            shiftName="Shift-C"
            RNData={AllShiftStaffs[2]?.rnIncharge}
            SWData={AllShiftStaffs[2]?.schedule}
          />
        )}
      />
    </View>
  );
};

export default Q15StaffConfiguration;
