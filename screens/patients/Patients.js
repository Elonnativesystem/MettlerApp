import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import DeviceInfo from 'react-native-device-info';

const Patients = ({navigation}) => {
  // const version = DeviceInfo.getVersion()
  const handleAssignedPatients = async () => {
    navigation.navigate('AssignedPatients');
  };
  const handleAllPatients = async () => {
    navigation.navigate('AllPatients');
  };
  const handleCurrentPatients = async () => {
    navigation.navigate('CurrentPatients');
  };
  const handleTodayPatients = async () => {
    navigation.navigate('TodayAdmitted');
  };
  const handleActiveQ15 = async () => {
    navigation.navigate('AllActiveQ15');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={{fontSize: 30}}>👥</Text> */}
        <MIcon name="people-outline" size={30} />
        <Text style={styles.headerText}> Patients</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'center', width: '100%'}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleActiveQ15}
          style={{width: '100%', alignItems: 'center'}}>
          <View
            style={[
              styles.outerBtn,
              {backgroundColor: '#FAECDB', width: '90%'},
            ]}>
            <View
              style={[
                styles.innerBtn,
                {backgroundColor: '#EFDAC0', width: '75%'},
              ]}>
              <Text style={[styles.centerText, {color: '#925D1E'}]}>Q-15</Text>
            </View>
            <Text style={[styles.bottomText, {color: '#925D1E'}]}>
              Q-15 Patient Check
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, {justifyContent: 'center'}]}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAssignedPatients}>
          <View style={styles.outerBtn}>
            <View style={styles.innerBtn}>
              <Text style={styles.centerText}>007</Text>
            </View>
            <Text style={styles.bottomText}>My Patients</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAllPatients}>
          <View style={[styles.outerBtn, {backgroundColor: '#E6E1F9'}]}>
            <View style={[styles.innerBtn, {backgroundColor: '#D1CBEA'}]}>
              <Text style={[styles.centerText, {color: '#6B5F9E'}]}>008</Text>
            </View>
            <Text style={[styles.bottomText, {color: '#6B5F9E'}]}>
              All Patients
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, {justifyContent: 'center'}]}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleCurrentPatients}>
          <View style={[styles.outerBtn, {backgroundColor: '#EDF1FA'}]}>
            <View style={[styles.innerBtn, {backgroundColor: '#D9E2F5'}]}>
              <Text style={[styles.centerText, {color: '#617DBB'}]}>009</Text>
            </View>
            <Text style={[styles.bottomText, {color: '#617DBB'}]}>
              Current Patients
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleTodayPatients}>
          <View style={[styles.outerBtn, {backgroundColor: '#FAECDB'}]}>
            <View style={[styles.innerBtn, {backgroundColor: '#EFDAC0'}]}>
              <Text style={[styles.centerText, {color: '#925D1E'}]}>010</Text>
            </View>
            <Text style={[styles.bottomText, {color: '#925D1E'}]}>
              Today Admitted
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.meterView}>
        <Text style={styles.topText}>Bed Availability</Text>
        <Image
          source={require('../../assets/images/meter.png')}
          resizeMode="contain"
          style={styles.meter}
        />
        <Image
          source={require('../../assets/images/meterNeedle.png')}
          resizeMode="contain"
          style={styles.needle}
        />
      </View>
    </ScrollView>
  );
};

export default Patients;
