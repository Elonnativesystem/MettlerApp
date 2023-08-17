import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  ForgotSecretKey,
  Login,
  OtpInput,
  OtpSuccess,
  ResetPassword,
  ResetSecretKeySuccess,
  ResetSuccess,
  SecretKey,
} from '../screens';
import {GetOrganization, RetriveLogin} from '../redux/apiCalls';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Authstack = () => {
  // const [initialRoute, setInitialRoute] = useState('Login');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await RetriveLogin(dispatch);
  //     const retrive = await AsyncStorage.getItem('retrive');
  //     setInitialRoute(retrive === 'true' ? 'SecretKey' : 'Login');
  //   };

  //   fetchData();
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={initialRoute}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SecretKey" component={SecretKey} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpSuccess" component={OtpSuccess} />
      <Stack.Screen name="OtpInput" component={OtpInput} />
      <Stack.Screen name="ForgotSecretKey" component={ForgotSecretKey} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
      <Stack.Screen
        name="ResetSecretKeySuccess"
        component={ResetSecretKeySuccess}
      />
    </Stack.Navigator>
  );
};

export default Authstack;
