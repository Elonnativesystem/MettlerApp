import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AllPatients,
  AssignedPatients,
  CurrentPatients,
  PatientDetails,
  Patients,
  Q15,
  TodayAdmitted,
} from '../../screens';
const Stack = createNativeStackNavigator();
const PatientsStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen
        name="AssignedPatients"
        component={AssignedPatients}
        options={{header: () => null}}
      />
      <Stack.Screen name="AllPatients" component={AllPatients} />
      <Stack.Screen name="CurrentPatients" component={CurrentPatients} />
      <Stack.Screen name="TodayAdmitted" component={TodayAdmitted} />
      <Stack.Screen name="PatientDetails" component={PatientDetails} />
      <Stack.Screen name="Q15" component={Q15} />
    </Stack.Navigator>
  );
};

export default PatientsStacks;
