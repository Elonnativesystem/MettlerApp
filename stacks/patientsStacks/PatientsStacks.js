import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddAllergy,
  AdmitPatient,
  AllActiveQ15,
  AllPatients,
  Allergy,
  AllergyDetails,
  AssignedPatients,
  CurrentPatients,
  Immunization,
  OverView,
  PatientData,
  PatientDetails,
  PatientProblem,
  PatientVitals,
  Patients,
  Q15,
  Reports,
  TodayAdmitted,
  TreatmentPlan,
} from '../../screens';
const Stack = createNativeStackNavigator();
const PatientsStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Patients">
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen
        name="AssignedPatients"
        component={AssignedPatients}
        options={{header: () => null}}
      />
      <Stack.Screen name="AllPatients" component={AllPatients} />
      <Stack.Screen name="CurrentPatients" component={CurrentPatients} />
      <Stack.Screen name="TodayAdmitted" component={TodayAdmitted} />
      <Stack.Screen name="AllActiveQ15" component={AllActiveQ15} />
      <Stack.Screen name="PatientDetails" component={PatientDetails} />
      <Stack.Screen name="Q15" component={Q15} />

      {/* Tier-4 */}
      <Stack.Screen name="Overview" component={OverView} />
      <Stack.Screen name="AdmitPatient" component={AdmitPatient} />
      <Stack.Screen name="PatientData" component={PatientData} />
      <Stack.Screen name="TreatmentPlan" component={TreatmentPlan} />
      <Stack.Screen name="Reports" component={Reports} />
      {/* Tier-5 */}
      <Stack.Screen name="Allergy" component={Allergy} />
      <Stack.Screen name="PatientProblem" component={PatientProblem} />
      <Stack.Screen name="PatientVitals" component={PatientVitals} />
      <Stack.Screen name="Immunization" component={Immunization} />
      {/* Tier-6 */}
      <Stack.Screen name="AllergyDetails" component={AllergyDetails} />
      <Stack.Screen name="AddAllergy" component={AddAllergy} />
    </Stack.Navigator>
  );
};

export default PatientsStacks;
