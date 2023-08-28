import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {Button, Loader} from '../../../components';
import {
  PostQ15Entry,
  getAllPatients,
  getCompletedQ15,
  getIncompletedQ15,
  getQ15Activity,
  getQ15Location,
} from '../../../redux/apiCalls';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AllActiveQ15 = ({navigation}) => {
  const date = new Date();
  const [pid, setPid] = useState(null);
  const [pname, setPname] = useState(null);
  const [username, setUsername] = useState(null);
  const [ok, setOk] = useState(false);
  const [slot, setSlot] = useState(null);
  const [stamp1, setStamp1] = useState(null);
  const [stamp2, setStamp2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [complete, setComplete] = useState(false);
  const time = new Date();
  const dispatch = useDispatch();
  const {pending} = useSelector(state => state.user);
  const errorMsg = useSelector(state => state.user.error);
  const completedData = useSelector(state => state.user.q15Completed);
  const incompletedData = useSelector(state => state.user.q15Incompleted);
  const data1 = useSelector(state => state.user.allPatients);
  const {q15Location, q15Activity} = useSelector(state => state.user);
  const LocationData = q15Location ? [q15Location] : [];
  const ActivityData = q15Activity ? [q15Activity] : [];

  const transformedLocationData = LocationData[0]
    ? Object.entries(LocationData[0]).map(([key, value]) => ({
        label: `${value}`,
        value: `${key}`,
      }))
    : [];

  const transformedActivityData = ActivityData[0]
    ? Object.entries(ActivityData[0]).map(([key, value]) => ({
        label: `${value}`,
        value: `${key}`,
      }))
    : [];
  const calculateSlot = async time => {
    const username = await AsyncStorage.getItem('username');
    setUsername(username);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const quarter = Math.floor(minutes / 15) + 1; // 1, 2, 3, 4

    const slotCode = ['A', 'B', 'C', 'D'][Math.floor(minutes / 15)];

    const paddedHours = hours.toString().padStart(2, '0');

    const slotName = `${slotCode}${paddedHours}`;
    setSlot(slotName);

    const stamp1Hours = hours.toString().padStart(2, '0');
    const stamp1Minutes = (quarter - 1) * 15;
    const stamp1FormattedMinutes = stamp1Minutes.toString().padStart(2, '0');
    setStamp1(`${stamp1Hours}${stamp1FormattedMinutes}`);

    let stamp2Hours = hours.toString().padStart(2, '0');
    let stamp2Minutes = stamp1Minutes + 15;
    if (stamp2Minutes >= 60) {
      stamp2Minutes -= 60;
      stamp2Hours = (parseInt(stamp2Hours) + 1).toString().padStart(2, '0');
    }
    const stamp2FormattedMinutes = stamp2Minutes.toString().padStart(2, '0');
    setStamp2(`${stamp2Hours}${stamp2FormattedMinutes}`);
    console.log(stamp2);
  };

  useEffect(() => {
    getAllPatients(dispatch);
    getQ15Activity(dispatch);
    getQ15Location(dispatch);
  }, []);
  useEffect(() => {
    {
      errorMsg &&
        Toast.show(errorMsg, Toast.LONG, {backgroundColor: '#0f3995'});
    }
  }, [errorMsg]);
  useEffect(() => {
    calculateSlot(time);
    // getCompletedQ15(dispatch, slot, q15Date);
    // getIncompletedQ15(dispatch, slot, q15Date);
  }, [slot, q15Date, complete]);
  useEffect(() => {
    if (slot && q15Date) {
      getCompletedQ15(dispatch, slot, q15Date);
      getIncompletedQ15(dispatch, slot, q15Date);
    }
  }, [slot, q15Date, complete]);
  const handlePatientPress = async (id, name) => {
    try {
      setOk(true);
      calculateSlot(time);
      setPid(id);
      setPname(name);
    } catch (error) {
      console.log(error);
    }
  };
  const qYear = date.getFullYear().toString();
  const qMonth = (date.getMonth() + 1).toString().padStart(2, '0');
  const qDate = date.getDate().toString();
  const q15Date = qYear + qMonth + qDate;
  const stamp = `${stamp1}-${stamp2}`;
  const handleSubmit = async () => {
    try {
      if (value && value1) {
        await PostQ15Entry(
          pid,
          value,
          value1,
          q15Date,
          stamp,
          slot,
          username,
          dispatch,
        );
        setValue('');
        setValue1('');
        setOk(false);
        alert('Data Saved');
        setComplete(!complete);
      } else {
        alert('Please select the options');
        console.log(q15Slot);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Loader
        visible={pending}
        textContent="Fetching Data"
        color="#0f3995"
        textStyle={{color: '#0f3995'}}
      />
      {/* <RefreshControl style={{flex: 1}}> */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Q-15 Patient Check Round</Text>
        {/* <Text style={{fontSize: 30}}> 🔎</Text> */}
        <MIcon name="search" size={30} />
      </View>
      <View style={[styles.flatList, {height: '50%'}]}>
        <Text
          style={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: 20,
            lineHeight: 25,
            textDecorationStyle: 'double',
            color: '#fff',
            backgroundColor: '#5d8bef',
            padding: 10,
          }}>
          Pending
        </Text>
        {incompletedData.length <= 0 ? (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text>
              Every Active Patients Q15 Form is completed for {stamp1}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setComplete(!complete);
              }}
              activeOpacity={0.8}
              style={{
                backgroundColor: '#0f3995',
                padding: 10,
                marginVertical: 20,
                borderRadius: 10,
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>ReLoad</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={incompletedData}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.pBtn}
                onPress={() =>
                  handlePatientPress(
                    item.id,
                    item.basicDetails[0].name[0].given +
                      ' ' +
                      item.basicDetails[0].name[0].family,
                  )
                }>
                <View style={styles.patientView}>
                  {/* <Image
                    source={require('../../../assets/images/avatar2.png')}
                    resizeMode="contain"
                    style={{width: '10%', height: '100%'}}
                  /> */}
                  <MIcon name="no-accounts" size={30} color="#000" />
                  <View style={styles.nameView}>
                    <Text style={styles.patientUname}>{item.username}</Text>
                    <Text style={styles.patientName}>
                      {item.basicDetails[0].name[0].given +
                        ' ' +
                        item.basicDetails[0].name[0].family}
                    </Text>
                  </View>
                  {/* <View style={styles.orgView}>
                    <Text style={styles.orgName}>Room No : {index + 1}</Text>
                  </View> */}
                  <View style={styles.arrowView}>
                    {/* <Text style={styles.arrow}>＞</Text> */}
                    <MIcon name="arrow-forward-ios" size={25} color="#8d8d8d" />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      {/* </RefreshControl> */}
      <View style={[styles.flatList, {flex: 1}]}>
        <Text
          style={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: 20,
            lineHeight: 25,
            textDecorationStyle: 'double',
            color: '#fff',
            backgroundColor: '#5d8bef',
            padding: 10,
          }}>
          Completed
        </Text>
        <FlatList
          data={completedData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.pBtn}
              onPress={() =>
                handlePatientPress(
                  item.id,
                  item.basicDetails[0].name[0].given +
                    ' ' +
                    item.basicDetails[0].name[0].family,
                )
              }>
              <View style={styles.patientView}>
                {/* <Image
                    source={require('../../../assets/images/avatar2.png')}
                    resizeMode="contain"
                    style={{width: '10%', height: '100%'}}
                  /> */}
                <MIcon name="no-accounts" size={30} color="#000" />
                <View style={styles.nameView}>
                  <Text style={styles.patientUname}>{item.username}</Text>
                  <Text style={styles.patientName}>
                    {item.basicDetails[0].name[0].given +
                      ' ' +
                      item.basicDetails[0].name[0].family}
                  </Text>
                </View>
                {/* <View style={styles.orgView}>
                  <Text style={styles.orgName}>Room No : {index + 1}</Text>
                </View> */}
                <View style={styles.arrowView}>
                  {/* <Text style={styles.arrow}>＞</Text> */}
                  <MIcon name="arrow-forward-ios" size={25} color="#8d8d8d" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {ok && (
        <Modal
          transparent={true}
          visible={ok}
          onRequestClose={() => setOk(false)}>
          {/* Modal Component */}
          {/* <MyModal
            stamp1={stamp1}
            stamp2={stamp2}
            slot={slot}
            locationData={transformedLocationData}
            activityData={transformedActivityData}
            //   staffName={}
            OnCancelPress={() => {
              setOk(false);
            }}
            OnSavePress={handleSubmit}
            OnClosePress={() => {
              setOk(false);
            }}
          /> */}
          {/* Modal Component Ends */}

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
              <View
                style={{
                  backgroundColor: '#0f3995',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                  borderRadius: 20,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                  {pname}
                </Text>
              </View>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Enter Date and Time</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    setOk(false);
                  }}>
                  <MCIcon name="close-circle-outline" size={30} />
                </TouchableOpacity>
              </View>
              <Text style={{color: '#000'}}>Slot Name : {slot}</Text>

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
                      value={stamp1}
                      editable={false}
                    />
                  </View>
                  <View style={[styles.modalInputView, {width: '45%'}]}>
                    <TextInput
                      value={stamp2}
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
              <View
                style={[
                  styles.modalInputView,
                  {backgroundColor: '#fff', padding: 6},
                ]}>
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
              <View
                style={[
                  styles.modalInputView,
                  {backgroundColor: '#fff', padding: 6},
                ]}>
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

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'flex-end',
                }}>
                <Button
                  label="Cancel"
                  cancel
                  half
                  onPress={() => {
                    setOk(false);
                  }}
                />
                <Button label="Save" active half onPress={handleSubmit} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default AllActiveQ15;
