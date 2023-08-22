import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#0f3995',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 30,
  },
  pName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  pAge: {
    color: '#fff',
  },
  pDetails: {
    flexDirection: 'row',
    height: 400,
    alignItems: 'center',
  },
  pVitals: {
    padding: 5,
    justifyContent: 'center',
    margin: 10,
  },
  vitalBtn2View: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  q15Btn: {
    alignItems: 'center',
    marginBottom: '10%',
  },
});
