import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../redux/apiCalls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const username = useSelector(state => state.user.userInfo.username);
  // const jwt = useSelector(state => state.user.userInfo.jwt);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
    Logout({username, jwt}, dispatch, props.navigation);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            source={require('../assets/images/logoHeaderDark.png')}
            style={{width: '70%'}}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={{justifyContent: 'center'}}
            activeOpacity={0.7}>
            <Text style={{fontSize: 20}}>&lt;☰</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          marginBottom: 40,
          marginLeft: 10,
          borderTopWidth: 1,
          borderTopColor: '#808080',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSignout}
          style={{
            backgroundColor: '#ff0000',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            marginVertical: 10,
          }}>
          <Text style={{color: '#fff'}}>Signout</Text>
        </TouchableOpacity>
        {/* <Button title="Signout" onPress={handleSignout} /> */}
      </View>
    </View>
  );
};

export default CustomDrawer;
