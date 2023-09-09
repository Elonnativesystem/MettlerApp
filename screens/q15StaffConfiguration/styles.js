import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '2%',
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#FAF9FC',
    padding: 10,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendarHeader: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  halfInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputView: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: '#8d8d8d',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    fontSize: 20,
  },
  dropDownView: {
    alignItems: 'center',
    marginVertical: '5%',
  },
  dropDown: {
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 5,
    borderColor: '#8d8d8d',
    width: '91%',
  },
  flatList: {
    alignItems: 'center',
    marginVertical: '2%',
    marginHorizontal: '2%',
    padding: 20,
    backgroundColor: '#F9FAFC',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 0.2,
  },
  flatListContainer: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  partialRoomView: {
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    marginLeft: -180,
    marginTop: '5%',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8d8d8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
