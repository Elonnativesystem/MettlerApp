import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  stampBox: {
    alignItems: 'center',
    // marginRight: 20, // Adjust this value to control spacing between stamp and box
  },
  stampBoxContainer: {
    marginLeft: 20,
    width: '100%',
  },
  stampText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  boxView: {
    // marginLeft: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  boxWithData: {
    backgroundColor: '#BCD3F5',
    borderWidth:0
  },
  hourColumn: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  hourText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  box: {
    width: 79,
    height: 58,
    backgroundColor: '#F8FAFB',
    borderColor: '#6581BC',
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  boxText: {
    color: '#000',
  },
});
