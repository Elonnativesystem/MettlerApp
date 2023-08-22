import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    height: 100, // For all devices, even X, XS Max
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0f3995',
  },
  container: {
    backgroundColor: '#0f3995',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  menuBtn: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  menuBtnText: {
    fontSize: 40,
    color: '#fff',
  },
  logoImage: {
    width: '40%',
    marginHorizontal: 40,
  },
  profileBtn: {
    width: '100%',
    marginLeft: 20,
  },
  profileImage: {
    width: '10%',
  },
});