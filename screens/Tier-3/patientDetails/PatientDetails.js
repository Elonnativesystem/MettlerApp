import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  Button,
  VitalBtnHorizontal,
  VitalBtnVertical,
} from '../../../components';
import PatientDetails2 from './PatientDetails2';

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
          {/* <View>
            <Text>
              Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              {patient.basicDetails[0].name[0].given +
                ' ' +
                patient.basicDetails[0].name[0].family}
            </Text>
            <Text>
              Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
              {patient.basicDetails[0].gender}
            </Text>
            <Text>
              DOB
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              {patient.basicDetails[0].birthDate}
            </Text>
            <Text>
              Weight &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 58
              KG
            </Text>
            <Text>
              Height
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              171.5 CM
            </Text>
            <Text>Blood Group : B +ive</Text>
          </View> */}
          <VitalBtnHorizontal icon="#" title="Height" value="171.5(cm)" />
          <VitalBtnHorizontal icon="#" title="Blood" value="B +ive" />
          <VitalBtnHorizontal icon="#" title="Weight" value="58(kg)" />
          <VitalBtnHorizontal icon="#" title="DOB" value="31/02/1996" />
          <VitalBtnHorizontal icon="#" title="Gulucose" value="50 mg/dl" />
        </View>
      </View>
      <View style={styles.vitalBtn2View}>
        <VitalBtnVertical
          icon="&gt;"
          header="Temp"
          data="97.7°C"
          bg1="#E1E3FF"
          bg2="#B3B6E0"
        />
        <VitalBtnVertical
          icon="&gt;"
          header="BP"
          data="120/190"
          bg1="#D8F1D8"
          bg2="#A7DBA7"
        />
        <VitalBtnVertical
          icon="&gt;"
          header="Heart Rate"
          data="110 bpm"
          bg1="#FAE8DF"
          bg2="#F1C0A7"
        />
      </View>

      <View style={styles.q15Btn}>
        <Button
          label="📆 Q-15 Form"
          onPress={() => {
            navigation.navigate('Q15', {patient});
          }}
          active
        />
      </View>
      <PatientDetails2 />
    </ScrollView>
  );
};

export default PatientDetails;
