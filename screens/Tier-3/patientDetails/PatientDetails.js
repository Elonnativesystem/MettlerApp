import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  Button,
  VitalBtnHorizontal,
  VitalBtnVertical,
} from '../../../components';
import PatientDetails2 from './PatientDetails2';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PatientDetails = ({navigation, route}) => {
  const {patient} = route.params;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.arrow}>❮</Text>
        <Image
          source={require('../../../assets/images/avatar2.png')}
          resizeMode="contain"
          style={{width: 50, height: 40}}
        />
        <View style={{marginLeft: '5%'}}>
          <Text style={styles.pName}>{patient.username}</Text>
          <Text style={styles.pAge}>24 Yrs </Text>
        </View>
      </View>
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
      <View style={styles.q15Btn}>
        <TouchableOpacity
          // style={styles.q15Btn}
          onPress={() => {
            navigation.navigate('Q15', {patient});
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              textAlignVertical: 'top',
              marginHorizontal: 5,
            }}>
            <MCIcon name="clock-edit-outline" size={30} />
            Q15
          </Text>
        </TouchableOpacity>
      </View>

      <PatientDetails2 />
    </ScrollView>
  );
};

export default PatientDetails;
