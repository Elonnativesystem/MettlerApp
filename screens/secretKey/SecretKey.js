import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast';
import {SecretKeyVerify} from '../../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {Loader, OtpBox} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecretKey = ({navigation}) => {
  const [enteredOtp, setEnteredOtp] = useState('');
  const {pending} = useSelector(state => state.user);
  const errorMsg = useSelector(state => state.user.error);
  const dispatch = useDispatch();
  const handleSecretKey = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
    SecretKeyVerify({secretKey: enteredOtp, jwt}, dispatch);
  };
  useEffect(() => {
    {
      errorMsg &&
        Toast.show(errorMsg, Toast.LONG, {backgroundColor: '#0f3995'});
    }
  }, [errorMsg]);
  const handleOtpChange = otp => {
    setEnteredOtp(otp);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Loader visible={pending} textContent="Loading" />
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoHeaderDark.png')}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </View>
      <View style={styles.secretKeyContainer}>
        <Image
          source={require('../../assets/images/secretKey.png')}
          resizeMode="contain"
        />
        <Text style={styles.subText}>Enter Your Passcode</Text>
        <OtpBox length={6} onOtpChange={handleOtpChange} />
        <TouchableOpacity
          style={styles.btnView}
          activeOpacity={0.7}
          onPress={handleSecretKey}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLink}
          onPress={() => navigation.navigate('ForgotSecretKey')}>
          <Text style={styles.btnLinkText}>Forgot Passcode?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecretKey;
