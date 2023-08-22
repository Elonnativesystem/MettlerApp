import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 74,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.17,
    borderRadius: 10,
    borderColor: '#8d8d8d',
  },
  dateView: {
    height: '55%',
  },
  dateText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  dayView: {
    borderTopWidth: 1,
    width: '100%',
    borderColor: '#ccc',
  },
  dayText: {
    textAlign: 'center',
    fontWeight: '200',
    color: '#000',
  },
});
