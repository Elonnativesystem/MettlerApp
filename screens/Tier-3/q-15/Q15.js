import {
  View,
  Text,
  FlatList,
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
import {Button, Q15Row} from '../../../components';
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
  const q15Location = useSelector(state => state.user.q15Location);
  const q15Activity = useSelector(state => state.user.q15Activity);
  const q15Load = useSelector(state => state.user.q15Load);
  const username = useSelector(state => state.user.userInfo.username);
  const LocationData = [q15Location];
  const ActivityData = [q15Activity];
  const transformedLocationData = Object.entries(LocationData[0]).map(
    ([key, value], index) => ({
      label: `${key}-${value}`,
      value: `${key}`, // Or any unique value you want to assign
    }),
  );
  const transformedActivityData = Object.entries(ActivityData[0]).map(
    ([key, value], index) => ({
      label: `${key}-${value}`,
      value: `${key}`, // Or any unique value you want to assign
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

  const handleSubmit = async () => {
    const qYear = date.getFullYear().toString();
    const qMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const qDate = date.getDate().toString();
    const q15Date = qYear + qMonth + qDate;
    const q15Time = hours + `:${boxNo}`;
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
  const hoursArray = Array.from({length: 24}, (_, index) => index); // Create an array from 0 to 23
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          resizeMode="contain"
          style={{width: '20%'}}
        />
        <View>
          <Text style={styles.pName}>{patient.username}</Text>
          <Text>24 Yrs </Text>
        </View>
      </View>
      <View style={styles.calendarHeader}>
        {/* <Text>Calendar</Text> */}
        <Button
          label={`📆 (${date.getDate()} - ${date.toLocaleString('default', {
            month: 'short',
          })}) change date`}
          onPress={() => setOpen(true)}
          active
        />
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
            date={date} // Convert to 2-digit format
            onPressBox={async (stamp, id) => {
              await AsyncStorage.setItem('stamp', stamp);
              setStamp1(stamp);
              setBoxNo(id);
              setHours(hour.toString().padStart(2, '0')); // Convert to 2-digit format
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
            activeOpacity={1}
            // onPress={() => setShowModal(false)} // Close modal when touching the overlay
          >
            {/* Your modal content */}
            <View
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                width: '90%',
                // top: '20%',
                left: '5%',
                padding: '5%',
                borderWidth: 1,
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{patient.username} Q-15 Entry</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setShowModal(false)}
                  style={{borderRadius: 10}}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
              <Text>Date 📅</Text>
              <View
                style={{
                  borderWidth: 0.6,
                  padding: 10,
                  marginBottom: 5,
                  borderRadius: 6,
                }}>
                <TextInput value={date.toLocaleDateString()} editable={false} />
              </View>
              <Text>Entered By</Text>
              <View
                style={{
                  borderWidth: 0.6,
                  padding: 10,
                  marginBottom: 5,
                  borderRadius: 6,
                }}>
                <TextInput value={username} editable={false} />
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  padding: 10,
                  marginTop: 15,
                  borderRadius: 6,
                }}>
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

              <View
                style={{
                  borderWidth: 0.6,
                  padding: 10,
                  marginVertical: 15,
                  borderRadius: 6,
                }}>
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
              <View style={{flexDirection: 'row', gap: 40}}>
                <TextInput
                  value={hours}
                  style={{borderWidth: 1, width: '20%', padding: 5}}
                  editable={false}
                />
                <TextInput
                  value={stamp1}
                  style={{borderWidth: 1, width: '20%', padding: 5}}
                  editable={false}
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
