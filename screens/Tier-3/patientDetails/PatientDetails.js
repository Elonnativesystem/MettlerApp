import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {VitalBtnHorizontal, VitalBtnVertical} from '../../../components';
import PatientDetails2 from './PatientDetails2';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const PatientDetails = ({navigation, route}) => {
  const {patient} = route.params;
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
              value="171.5(cm)"
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
              value="58(kg)"
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
              value="50 mg/dl"
            />
          </View>
        </View>
        <View style={styles.vitalBtn2View}>
          <VitalBtnVertical
            icon="temperature-celsius"
            size={30}
            header="Temp"
            data="97.7°C"
            bg1="#E1E3FF"
            bg2="#B3B6E0"
          />
          <VitalBtnVertical
            icon="blood-bag"
            size={30}
            header="BP"
            data="120/190"
            bg1="#D8F1D8"
            bg2="#A7DBA7"
          />
          <VitalBtnVertical
            icon="battery-heart-outline"
            size={30}
            header="Heart Rate"
            data="110 bpm"
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

        <PatientDetails2 />
      </ScrollView>
    </>
  );
};

export default PatientDetails;
