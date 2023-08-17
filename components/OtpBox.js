import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const OtpBox = ({length = 6, onOtpChange}) => {
  const [otp, setOtp] = useState(Array.from({length}, () => ''));
  const otpBoxes = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== '') {
      if (index < length - 1) {
        otpBoxes.current[index + 1].focus();
      }
    }

    setOtp(newOtp);

    // Pass the entered OTP to the parent component
    onOtpChange(newOtp.join(''));
  };

  const handleBackspace = (index, value) => {
    if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';

      if (index > 0) {
        otpBoxes.current[index - 1].focus();
      }

      setOtp(newOtp);

      // Pass the entered OTP to the parent component
      onOtpChange(newOtp.join(''));
    }
  };
  useEffect(() => {
    // Automatically focus on the first input when the component renders
    otpBoxes.current[0].focus();
  }, []);

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={[styles.otpBox, value !== '' && styles.otpBoxFilled]}
          value={value}
          onChangeText={text => handleOtpChange(index, text)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index, value);
            }
          }}
          keyboardType="number-pad"
          maxLength={1}
          ref={ref => (otpBoxes.current[index] = ref)}
        />
      ))}
      {/* <Button title="Get PIN" onPress={() => onOtpChange(otp.join(''))} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  otpBox: {
    width: 50,
    height: 50,
    // width: '15%',
    // height: '160%',
    borderWidth: 1,

    borderColor: 'black',
    textAlign: 'center',
    fontSize: 22,
    marginRight: 10,
  },
  otpBoxFilled: {
    borderColor: '#0f3995',
    borderWidth: 3, // Change color when filled
    borderRadius: 10,
  },
});

export default OtpBox;
