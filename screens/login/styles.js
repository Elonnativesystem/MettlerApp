import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    marginTop: '10%',
    alignItems: 'center',
  },
  headerImage: {
    width: '70%',
    height: '60%',
  },
  topContainer: {
    height: '82%',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  loginContainer: {
    position: 'absolute',
    height: '50%',
    width: '90%',
    top: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  helloText: {
    fontWeight: '700',
    color: 'rgb(65, 80, 118)',
    fontSize: 30,
    marginTop: '7%',
  },
  subText: {
    fontSize: 20,
    marginTop: '4%',
    marginBottom: '10%',
    color: 'rgb(65, 80, 118)',
  },
  inputView: {
    borderWidth: 0.6,
    padding: 2,
    // height: '15%',
    maxHeight: 80,
    marginTop: 15,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputIcon: {
    marginHorizontal: 5,
  },
  eyeIcon: {
    position: 'absolute',
    right: '4%',
    top: '30%',
  },

  input: {
    fontSize: 20,
    width: '90%',
  },
  subLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnView: {
    backgroundColor: '#0f3995',
    padding: '5%',
    maxHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 20,
    borderRadius: 6,
    position: 'relative',
  },

  btnText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 15,
  },
  errorText: {
    color: 'red',
  },
});
