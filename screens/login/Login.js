import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {GetOrganization, Login2} from '../../redux/apiCalls';
import {styles} from './styles';
import {Loader} from '../../components';
import {Dropdown} from 'react-native-element-dropdown';
const Login = ({navigation}) => {
  const {pending} = useSelector(state => state.user);
  const errorMsg = useSelector(state => state.user.error);
  const OrgData = useSelector(state => state.user.organization);
  const dispatch = useDispatch();
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   GetOrganization(dispatch);
  // }, []);
  const data = OrgData.map(item => ({
    label: item.name, // Assuming 'name' is within 'organizationdetails'
    value: item.id,
  }));
  // const data = [
  //   {label: 'MHC-1', value: 'iganPg3GY9'},
  //   {label: 'MHC-2', value: 'ZHZYMHXi5E'},
  //   {label: 'MHC_2', value: 'tstGfLpPR2'},
  //   {label: 'Item 4', value: '4'},
  //   {label: 'Item 5', value: '5'},
  //   {label: 'Item 6', value: '6'},
  //   {label: 'Item 7', value: '7'},
  //   {label: 'Item 8', value: '8'},
  // ];

  const handleLogin = async () => {
    Login2(
      {username: uname, password: pwd, organization: value},
      dispatch,
      navigation,
    );
  };
  useEffect(() => {
    {
      errorMsg &&
        Toast.show(errorMsg, Toast.LONG, {backgroundColor: '#0f3995'});
    }
  }, [errorMsg]);
  const darkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.mainContainer, darkMode && {backgroundColor: '#000'}]}>
      <Loader
        visible={pending}
        textContent="Loading"
        color="#0f3995"
        textStyle={{color: '#0f3995'}}
      />
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.topContainer}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logoHeader.png')}
            resizeMode="contain"
            style={styles.headerImage}
          />
        </View>
      </ImageBackground>

      <View
        style={[styles.loginContainer, darkMode && {backgroundColor: '#000'}]}>
        <Text style={[styles.helloText, darkMode && {color: '#fff'}]}>
          Hello!
        </Text>
        <Text style={[styles.subText, darkMode && {color: '#fff'}]}>
          Login to your account
        </Text>
        {/* {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>} */}

        <View style={[styles.inputView, darkMode && {borderColor: '#fff'}]}>
          <Image
            source={require('../../assets/images/profile.png')}
            resizeMode="contain"
            style={[styles.inputIcon, darkMode && {tintColor: '#fff'}]}
          />
          <TextInput
            placeholder="Username"
            style={[styles.input, darkMode && {color: '#fff'}]}
            value={uname}
            onChangeText={text => setUname(text)}
          />
        </View>
        <View style={[styles.inputView, darkMode && {borderColor: '#fff'}]}>
          <Image
            source={require('../../assets/images/key.png')}
            resizeMode="contain"
            style={[styles.inputIcon, darkMode && {tintColor: '#fff'}]}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={show}
            style={[styles.input, darkMode && {color: '#fff'}]}
            value={pwd}
            onChangeText={text => setPwd(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShow(!show)}
            activeOpacity={0.8}>
            <Image
              source={require('../../assets/images/eye.png')}
              resizeMode="contain"
              style={[darkMode && {tintColor: '#fff'}]}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.inputView, darkMode && {borderColor: '#fff'}]}>
          {/* <Image
            source={require('../../assets/images/organization.png')}
            resizeMode="contain"
            style={[styles.inputIcon, darkMode && {tintColor: '#fff'}]}
          /> */}
          {/* <TextInput
            placeholder="Organization"
            value="MHC-1 (Can't Change)"
            aria-disabled
            style={[styles.input, darkMode && {color: '#fff'}]}
          /> */}
          <Dropdown
            style={[styles.input, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={{marginLeft: '3%'}}
            selectedTextStyle={{marginLeft: '3%'}}
            iconStyle={{marginRight: '-10%'}}
            data={data}
            maxHeight={300}
            search
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select an Organization' : 'Select...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => {
              setIsFocus(true);
              GetOrganization(dispatch);
            }}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
              console.log(item.value);
            }}
            renderLeftIcon={() => (
              <Image
                source={require('../../assets/images/organization.png')}
                resizeMode="contain"
                style={[styles.inputIcon, darkMode && {tintColor: '#fff'}]}
              />
            )}
          />
        </View>
        <View style={styles.subLoginContainer}>
          {/* <TouchableOpacity></TouchableOpacity> */}
          <Text style={darkMode && {color: '#fff'}}>Remember Me</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={darkMode && {color: '#fff'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnView}
          activeOpacity={0.7}
          onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
