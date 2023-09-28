import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, CheckBox, PatientHeader} from '../../../components';
const AddAllergy = ({navigation, route}) => {
  const {patient} = route.params;
  const [values, setValues] = useState(Array(mappedData?.length).fill(null));
  const [isFocusArray, setIsFocusArray] = useState(
    Array(mappedData?.length).fill(false),
  );

  const mappedData = [
    {
      placeholder: 'Originitaor',
      data: [{label: 'Origainator AAAA', value: '001'}],
    },
    {
      placeholder: 'Causative Agent',
      data: [{label: 'Agent AAAA', value: '002'}],
    },
    {
      placeholder: 'Originitaor Date',
      data: [{label: 'Date AAAA', value: '003'}],
    },
    {
      placeholder: 'Reaction Date/Time',
      data: [{label: 'Date BBB', value: '004'}],
    },
    {
      placeholder: 'Nature Of Reaction',
      data: [{label: 'Nature AAAA', value: '005'}],
    },
    {placeholder: 'Severity', data: [{label: 'Severe AAAA', value: '006'}]},
    {placeholder: 'Symptoms', data: [{label: 'Symp AAAA', value: '0067'}]},
  ];

  return (
    <View style={styles.container}>
      <PatientHeader
        onBack={() => navigation.goBack()}
        patientAge="24 Yrs"
        patientName={patient.username}
      />
      <View
        style={{
          width: wp(100),
          alignItems: 'center',
          flex: 1,
          //   justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <CheckBox circled label="Obeserved" checked />
          <CheckBox circled label="Historical" />
        </View>
        <FlatList
          data={mappedData}
          renderItem={({item, index}) => (
            <View style={styles.inputView}>
              <Dropdown
                // mode='modal'

                style={[styles.input, {padding: 3}]}
                placeholderStyle={{
                  marginLeft: wp(2),
                  fontSize: hp(2.5),
                  color: '#8d8d8d',
                }}
                selectedTextStyle={{marginLeft: '3%'}}
                iconStyle={{marginRight: '-10%'}}
                data={item.data}
                maxHeight={300}
                search
                labelField="label"
                valueField="value"
                placeholder={item.placeholder}
                searchPlaceholder="Search..."
                value={values[index]} // Use values[index] for the initial value
                onFocus={() => {
                  setIsFocusArray(prevState =>
                    prevState.map((isFocused, i) =>
                      i === index ? true : isFocused,
                    ),
                  );
                  // GetOrganization(dispatch);
                }}
                onBlur={() => {
                  setIsFocusArray(prevState =>
                    prevState.map((isFocused, i) =>
                      i === index ? false : isFocused,
                    ),
                  );
                }}
                onChange={selectedItem => {
                  // Create a copy of the current values array
                  const newValues = [...values];
                  // Update the value for the current index
                  newValues[index] = selectedItem.value;
                  // Set the updated values state
                  setValues(newValues);
                  console.log(values);
                }}
              />
            </View>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            marginLeft: 100,
            marginBottom: 10,
          }}>
          <Button
            active
            cancel
            half
            label="Cancel"
            onPress={() => navigation.goBack()}
          />
          <Button active half label="Save" onPress={() => alert('hey')} />
        </View>
      </View>
    </View>
  );
};

export default AddAllergy;
