import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  PostQ15Entry,
  getQ15Activity,
  getQ15Config,
  getQ15Location,
} from '../../../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';
import {Button, CalendarDate, Q15Row} from '../../../components';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Q15 = ({navigation, route}) => {
  const {patient} = route.params;
  const [showModal, setShowModal] = useState(false);
  const [stamp1, setStamp1] = useState('');
  const [hours, setHours] = useState('00');
  const [boxNo, setBoxNo] = useState('');
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const {q15Load, q15Location, q15Activity} = useSelector(state => state.user);
  const username = useSelector(state => state.user.userInfo.username);
  const LocationData = [q15Location];
  const ActivityData = [q15Activity];
  const transformedLocationData = Object.entries(LocationData[0])?.map(
    ([key, value]) => ({
      label: `${key}-${value}`,
      value: `${key}`,
    }),
  );
  const transformedActivityData = Object.entries(ActivityData[0]).map(
    ([key, value]) => ({
      label: `${key}-${value}`,
      value: `${key}`,
    }),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    getQ15Location(dispatch);
    getQ15Activity(dispatch);
  }, []);
  useEffect(() => {
    getQ15Config(dispatch, patient.id);
  }, [q15Load]);

  const q15Slot = stamp1;
  const q15Time = hours + `:${boxNo}`;
  const handleSubmit = async () => {
    const qYear = date.getFullYear().toString();
    const qMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const qDate = date.getDate().toString();
    const q15Date = qYear + qMonth + qDate;

    const pid = patient.id;
    if (value && value1) {
      await PostQ15Entry(
        pid,
        value,
        value1,
        q15Date,
        q15Time,
        q15Slot,
        username,
        dispatch,
      );
      setValue('');
      setValue1('');
      setShowModal(false);
      alert('Data Saved');
    } else {
      alert('Please select the options');
      console.log(q15Slot);
    }
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(3);
  const hoursArray = Array.from({length: 24}, (_, index) => index); // Create an array from 0 to 23
  const generateNextFourDates = () => {
    const today = new Date();
    const nextFourDates = [];
    for (let i = 0; i < 4; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(today.getDate() - i);
      nextFourDates.push(nextDate);
    }
    return nextFourDates;
  };

  const nextFourDates = generateNextFourDates();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/avatar2.png')}
          resizeMode="contain"
          style={{width: 50, height: 40}}
        />
        <View>
          <Text style={styles.pName}>{patient.username}</Text>
          <Text>24 Yrs </Text>
        </View>
      </View>
      <View style={styles.calendarHeader}>
        {nextFourDates.reverse().map((date1, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            onPress={() => {
              setDate(date1);
              setSelectedDateIndex(index);
            }}>
            <CalendarDate
              bgColor={selectedDateIndex === index ? '#0f3995' : undefined} // Set background color conditionally
              textColor={selectedDateIndex === index ? '#fff' : undefined} // Set background color conditionally
              date={date1.getDate()}
              day={date1
                .toLocaleString('default', {weekday: 'short'})
                .slice(0, 3)}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => setOpen(true)}>
          <CalendarDate date="📆" day="Change" />
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
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={styles.stampTextContainer}>
        <Text style={styles.stampText}>0-15</Text>
        <Text style={styles.stampText}>15-30</Text>
        <Text style={styles.stampText}>30-45</Text>
        <Text style={styles.stampText}>45-60</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {hoursArray.map(hour => (
          <Q15Row
            key={hour}
            hour={hour.toString().padStart(2, '0')}
            date={date}
            onPressBox={async (stamp, id) => {
              await AsyncStorage.setItem('stamp', stamp);
              setStamp1(stamp);
              setBoxNo(id);
              setHours(hour.toString().padStart(2, '0'));
              setShowModal(true);
              console.log(stamp1);
            }}
          />
        ))}
      </ScrollView>
      {showModal && (
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay color
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={1}>
            {/* Your modal content */}
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Enter Date and Time</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setShowModal(false)}>
                  <Text>❌</Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: '#000'}}>Slot Name : {stamp1}</Text>
              <View style={styles.modalDate}>
                <Text style={styles.modalLabel}>Date </Text>
                <View style={styles.modalInputView}>
                  <TextInput
                    value={date.toLocaleDateString()}
                    editable={false}
                    style={{color: '#000'}}
                  />
                </View>
              </View>
              <View style={{marginVertical: 5}}>
                <Text style={styles.modalLabel}>Time Period</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={[styles.modalInputView, {width: '45%'}]}>
                    <TextInput
                      style={{color: '#000'}}
                      value={q15Time}
                      editable={false}
                    />
                  </View>
                  <View style={[styles.modalInputView, {width: '45%'}]}>
                    <TextInput
                      value={`${q15Time.slice(0, 2)}:${parseInt(boxNo) + 14}`}
                      editable={false}
                      style={{color: '#000'}}
                    />
                  </View>
                </View>
              </View>

              <Text style={styles.modalLabel}>Entered By</Text>
              <View style={styles.modalInputView}>
                <TextInput
                  value={username}
                  editable={false}
                  style={{color: '#000'}}
                />
              </View>
              <Text style={styles.modalLabel}>Location</Text>
              <View style={[styles.modalInputView, {backgroundColor: '#fff'}]}>
                <Dropdown
                  data={transformedLocationData}
                  search
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Location' : 'Select...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => {
                    setIsFocus(true);
                  }}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
              <Text style={styles.modalLabel}>Condition</Text>
              <View style={[styles.modalInputView, {backgroundColor: '#fff'}]}>
                <Dropdown
                  data={transformedActivityData}
                  search
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus1 ? 'Select Activity' : 'Select...'}
                  searchPlaceholder="Search..."
                  value={value1}
                  onFocus={() => {
                    setIsFocus1(true);
                  }}
                  onBlur={() => setIsFocus1(false)}
                  onChange={item => {
                    setValue1(item.value);
                    setIsFocus1(false);
                    console.log(stamp1);
                  }}
                />
              </View>

              <View style={{alignItems: 'center'}}>
                <Button label="Submit" active onPress={handleSubmit} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default Q15;
