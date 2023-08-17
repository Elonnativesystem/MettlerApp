import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    padding: 5,
    borderBottomColor: '#808080',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  outerBtn: {
    width: 150,
    height: 150,
    backgroundColor: '#EBF9EB',
    margin: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBtn: {
    backgroundColor: '#D3F2D3',
    width: 65,
    height: 69,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#6C9E6C',
  },
  bottomText: {
    color: '#6C9E6C',
    fontSize: 14,
    fontWeight: '600',
    marginTop: '5%',
  },
  meterView: {
    width: '90%',
    height: '40%',
    backgroundColor: '#EEF2F8',
    margin: '4%',
    alignItems: 'center',
  },
  topText: {
    fontSize: 18,
    marginTop: '5%',
  },
  meter: {
    width: '50%',
  },
  needle: {
    position: 'absolute',
    top: 90,
    left: 150,
    width: '15%',
  },
});
