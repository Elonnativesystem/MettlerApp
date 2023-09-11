import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {VitalBtnHorizontal, VitalBtnVertical} from '../../../components';
import PatientDetails2 from './PatientDetails2';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {getVitalByPatientId} from '../../../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';

const PatientDetails = ({navigation, route}) => {
  const {patient} = route.params;
  const dispatch = useDispatch();
  const VitalsData = useSelector(state => state.user.patientVitals);
  useEffect(() => {
    getVitalByPatientId(dispatch, patient.id);
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <MIcon name="arrow-back" size={30} color="#fff" />
          <View
            style={{backgroundColor: '#8218', padding: 5, borderRadius: 15}}>
            <MCIcon name="account" size={30} color="#fff" />
          </View>
        </Pressable>

        <View style={{marginLeft: '5%'}}>
          <Text style={styles.pName}>{patient.username}</Text>
          <Text style={styles.pAge}>24 Yrs </Text>
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.pDetails}>
          <Image
            source={require('../../../assets/images/body.png')}
            resizeMode="contain"
            style={{width: '40%', marginTop: 0}}
          />

          <View style={styles.pVitals}>
            <VitalBtnHorizontal
              icon="human-male-height"
              size={30}
              title="Height"
              value={
                VitalsData.length > 0 &&
                `${VitalsData?.height.value} (${VitalsData?.height.unit})`
              }
            />
            <VitalBtnHorizontal
              icon="blood-bag"
              size={30}
              title="Blood"
              value="B +ive"
            />
            <VitalBtnHorizontal
              icon="weight-kilogram"
              size={30}
              title="Weight"
              value={
                VitalsData.length > 0 &&
                `${VitalsData?.weight.value} (${VitalsData?.weight.unit})`
              }
            />
            <VitalBtnHorizontal
              icon="calendar-multiselect"
              title="DOB"
              value="31/02/1996"
              size={30}
            />
            <VitalBtnHorizontal
              icon="note-edit-outline"
              title="Gulucose"
              size={30}
              value={
                VitalsData.length > 0 &&
                `${VitalsData?.bloodGlucoseLevel.value} (${VitalsData?.bloodGlucoseLevel.unit})`
              }
            />
          </View>
        </View>
        <View style={styles.vitalBtn2View}>
          <VitalBtnVertical
            icon="temperature-celsius"
            size={30}
            header="Temp"
            data={VitalsData.length > 0 && VitalsData?.bodyTemperature.value}
            bg1="#E1E3FF"
            bg2="#B3B6E0"
          />
          <VitalBtnVertical
            icon="blood-bag"
            size={30}
            header="BP"
            data={
              VitalsData.length > 0 &&
              `${VitalsData?.bloodPressure.systolicValue}/${VitalsData?.bloodPressure.diastolicValue} ${VitalsData?.bloodPressure.unit}`
            }
            bg1="#D8F1D8"
            bg2="#A7DBA7"
          />
          <VitalBtnVertical
            icon="battery-heart-outline"
            size={30}
            header="Heart Rate"
            data={
              VitalsData.length > 0 &&
              `${VitalsData?.heartRate.value} ${VitalsData?.heartRate.unit}`
            }
            bg1="#FAE8DF"
            bg2="#F1C0A7"
          />
        </View>
        {/* <View style={styles.q15Btn}> */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.q15Btn}
          onPress={() => {
            navigation.navigate('Q15', {patient});
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <MCIcon name="clock-edit-outline" size={25} color="#fff" />
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                textAlign: 'center',
                textAlignVertical: 'top',
                marginHorizontal: 5,
              }}>
              &nbsp;Q15 - Form
            </Text>
          </View>
          <MCIcon name="arrow-right-circle-outline" size={25} color="#fff" />
        </TouchableOpacity>
        {/* </View> */}

        {/* <PatientDetails2 /> */}
      </ScrollView>
    </>
  );
};

export default PatientDetails;
