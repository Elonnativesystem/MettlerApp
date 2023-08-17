import {StyleSheet} from 'react-native';

export const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
  },
  addIcon: {
    backgroundColor: '#01CDFF',
    padding: 3,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIconText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  calenderView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  scheduleBtns: {
    alignItems: 'center',
    marginTop: '5%',
  },
  ECGview: {
    alignItems: 'center',
  },
});
