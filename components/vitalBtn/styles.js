import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: wp('40%'),
    height: hp("20%"),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  txtStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
