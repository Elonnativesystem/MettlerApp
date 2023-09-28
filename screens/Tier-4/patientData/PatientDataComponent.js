import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
const PatientDataComponent = ({navigation, patient}) => {
  const menuData = [
    {
      name: 'Allergy',
      color: '#E07F82',
      bg: '#FDF6F8',
      mIcon: 'allergy',
      destination: 'Allergy',
    },
    {
      name: 'Patient Problem',
      color: '#3972ED',
      bg: '#E9F1FD',
      mIcon: 'emoticon-sick',
      destination: 'PatientProblem',
    },
    {
      name: 'Patient Vitals',
      color: '#E9A960',
      bg: '#FCF6F0',
      mIcon: 'notebook',
      destination: 'PatientVitals',
    },
    {
      name: 'Immunization',
      color: '#6BB4A6',
      bg: '#EBF9EB',
      mIcon: 'hospital',
      destination: 'Immunization',
    },
  ];
  return (
    <View style={{backgroundColor: '#fff', width: '90%', height: '80%'}}>
      <View style={styles.flatList}>
        <FlatList
          data={menuData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.pBtn}
              onPress={() => navigation.navigate(item.destination, {patient})}>
              <View style={styles.patientView}>
                <View
                  style={{
                    backgroundColor: item.bg,
                    padding: 9,
                    borderRadius: 20,
                  }}>
                  <MCIcon name={item.mIcon} size={30} color={item.color} />
                </View>
                <View style={styles.nameView}>
                  <Text style={styles.patientName}>{item.name}</Text>
                </View>
                <View style={styles.arrowView}>
                  {/* <Text style={styles.arrow}>＞</Text> */}
                  <MIcon name="arrow-forward-ios" size={25} color="#8d8d8d" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default PatientDataComponent;
