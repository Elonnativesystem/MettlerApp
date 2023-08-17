import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const Patients = ({navigation}) => {
  const handleAssignedPatients = async () => {
    // alert('Assigned Patients = 007');
    navigation.navigate('AssignedPatients');
  };
  const handleAllPatients = async () => {
    // alert('All Patients = 008');
    navigation.navigate('AllPatients');
  };
  const handleCurrentPatients = async () => {
    // alert('Current Patients = 009');
    navigation.navigate('CurrentPatients');
  };
  const handleTodayPatients = async () => {
    // alert('Today Patients = 010');
    navigation.navigate('TodayAdmitted');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 30}}>👥</Text>
        <Text style={styles.headerText}> Patients</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleAssignedPatients}>
          <View style={styles.outerBtn}>
            <View style={styles.innerBtn}>
              <Text style={styles.centerText}>007</Text>
            </View>
            <Text style={styles.bottomText}>Assigned By Me</Text>
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
      <View style={styles.row}>
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
