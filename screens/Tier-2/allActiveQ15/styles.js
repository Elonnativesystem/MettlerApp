import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    padding: 10,
    borderBottomColor: '#808080',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
  },
  patientView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Added alignItems to center content vertically
    marginVertical: 10, // Adjust margin as needed
    paddingVertical: 5, // Added padding to create space between items
    borderBottomWidth: 0.8,
    borderBottomColor: '#ccc',
  },

  nameView: {
    flex: 1, // Allow the nameView to take remaining horizontal space
    marginLeft: 10, // Adjust margin as needed
  },
  pBtn: {
    maxHeight: 60,
    width: '90%',
  },
  patientUname: {
    fontSize: 15,
    fontWeight: '200',
  },
  patientName: {
    fontSize: 19,
    color: '#000',
  },
  orgView: {
    backgroundColor: '#ffe6e6',
    height: '60%',
    justifyContent: 'center',
    padding: 3,
    marginTop: 10,
    maxWidth: '30%',
  },
  orgName: {
    color: '#ff4d4d',
  },
  arrowView: {
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 30,
    fontWeight: '400',
  },
  flatList: {
    // marginBottom: '10%',
    // flex: 1,
    paddingVertical: 10,
    // flex: 1,
    // height:"75%"
  },
  modalContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '90%',
    left: '5%',
    padding: '7%',
    borderRadius: 15,
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
    // padding: 2,
    marginVertical: '2%',
    borderRadius: 3,
    backgroundColor: '#DBE5F2',
    borderColor: '#999999',
  },
});
