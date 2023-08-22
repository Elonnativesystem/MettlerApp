import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logout} from '../../redux/apiCalls';
import {styles} from './styles';

const CustomDrawer = props => {
  const username = useSelector(state => state.user.userInfo.username);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
    Logout({username, jwt}, dispatch, props.navigation);
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logoHeaderDark.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={styles.closeBtn}
            activeOpacity={0.7}>
            <Text style={styles.closeBtnText}>&lt;☰</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerDown}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSignout}
          style={styles.signOutBtn}>
          <Text style={styles.signOutBtnText}>Signout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
