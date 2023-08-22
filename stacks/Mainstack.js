import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {
  AdminConfiguration,
  OrganizationDetails,
  PatientManagement,
  PatientStaffAssign,
  Profile,
} from '../screens';
import StaffDetails from '../screens/staffDetails/StaffDetails';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import PatientsStacks from './PatientsStacks';
import {Alert, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logout} from '../redux/apiCalls';
import {Button, Header, CustomDrawer} from '../components';

const Drawer = createDrawerNavigator();
const Mainstack = ({navigation}) => {
  const [role, setRole] = useState('');
  const errorMsg = useSelector(state => state.user.error);
  useEffect(() => {
    {
      errorMsg &&
        Toast.show(errorMsg, Toast.LONG, {backgroundColor: '#0f3995'});
    }
  }, [errorMsg]);
  const username = useSelector(state => state.user.userInfo.username);
  const jwt = useSelector(state => state.user.userInfo.jwt);
  const dispatch = useDispatch();
  const checkSessionExpiration = async () => {
    const expirationTime = await AsyncStorage.getItem('expireTime');

    if (expirationTime) {
      const currentTime = new Date();
      const expirationDate = new Date(expirationTime);

      if (currentTime > expirationDate) {
        Alert.alert('Mettler Health Care', 'oopss...Session Expired');
        Logout({username, jwt}, dispatch, navigation);
      }
    }
  };
  // useEffect(() => {
  //   const interval = setInterval(checkSessionExpiration, 300000); // Check every 15 mins

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const handleSignout = async () => {
    Alert.alert('MettlerHealthCare', 'Are You sure to Sign out ?', [
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => {
          Logout({username, jwt}, dispatch, navigation);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };
  const getRoleAndResetCount = async () => {
    try {
      const role = await AsyncStorage.getItem('role');
      const count = await AsyncStorage.getItem('resetCount');
      setRole(role);
      console.log(role, count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoleAndResetCount();
  }, []);
  return (
    <>
      {role === 'Staff' ? (
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
            drawerActiveBackgroundColor: '#2e6aea',
            drawerActiveTintColor: '#fff',
            header: ({navigation}) => <Header navigation={navigation} />,
            drawerLabelStyle: {marginLeft: -15},
          }}>
          <Drawer.Screen
            name="Dashboard"
            component={PatientsStacks}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ⌘
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="Patients1"
            component={PatientsStacks}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  💉
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="StaffDetails"
            component={StaffDetails}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ＃
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="OrganizationDetails"
            component={OrganizationDetails}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ☖
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="PatientManagement"
            component={PatientManagement}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ✓
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="PatientStaffAssign"
            component={PatientStaffAssign}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ➼
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="AdminConfiguration"
            component={AdminConfiguration}
            options={{
              drawerIcon: ({focused, size, color}) => (
                <Text style={{color: focused ? '#fff' : '#000', fontSize: 20}}>
                  ⧆
                </Text>
              ),
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              drawerLabel: () => null,
              drawerActiveBackgroundColor: '#fff',
              drawerItemStyle: {opacity: 0, height: 0, margin: 0},
            }}
          />
        </Drawer.Navigator>
      ) : (
        <SafeAreaView>
          <Text>Stay Tuned.... Patient View is on Progress</Text>
          <Button label="Signout" active onPress={handleSignout} />
        </SafeAreaView>
      )}
    </>
  );
};

export default Mainstack;
