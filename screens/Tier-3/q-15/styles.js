// styles.js
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    padding: 10,
  },
  pName: {
    fontSize: 20,
    fontWeight: '500',
  },
  timeColumn: {
    marginRight: 10,
    position: 'absolute',
    top: 100,
  },
  calendarHeader: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stampBox: {
    alignItems: 'center',
  },
  stampTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 30,
    marginBottom: 10,
  },
  stampText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxView: {
    marginLeft: 55,
  },
  box: {
    width: 65,
    height: 65,
    backgroundColor: '#ccc',
    borderColor: '#808080',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#000',
  },
  modalContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '90%',
    left: '5%',
    padding: '5%',
    borderWidth: 1,
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontWeight: 'bold',
    color: '#000',
  },
  modalDate: {
    marginVertical: 5,
  },
  modalLabel: {
    fontWeight: '300',
    color: '#000',
  },
  modalInputView: {
    borderWidth: 0.6,
    padding: 8,
    marginBottom: 5,
    borderRadius: 3,
    backgroundColor: '#DBE5F2',
  },
  modalTime: {},
  modalStaff: {},
  modalLocation: {},
  modalCondition: {},
});
