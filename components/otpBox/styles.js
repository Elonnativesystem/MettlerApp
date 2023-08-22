import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    width: '80%',
    marginHorizontal: 10,
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
    // marginRight: 10,
    marginHorizontal: 5,
  },
  otpBoxFilled: {
    borderColor: '#0f3995',
    borderWidth: 3, // Change color when filled
    borderRadius: 10,
  },
});
