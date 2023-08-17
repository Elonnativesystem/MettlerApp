// styles.js
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  header: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
  },
  pName: {
    fontSize: 20,
    fontWeight: '500',
  },
  timeColumn: {
    marginRight: 10,
    position: 'absolute',
    top: 100,
    // justifyContent: 'space-between',
    // flex: 1,
  },
  calendarHeader: {
    marginBottom: 10,
    alignItems: 'center',
  },
  stampBox: {
    alignItems: 'center',
    // marginRight: 20, // Adjust this value to control spacing between stamp and box
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
    // marginLeft:10
  },
  boxText: {
    color: '#000',
  },
});
