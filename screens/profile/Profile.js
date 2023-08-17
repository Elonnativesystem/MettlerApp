import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../../redux/apiCalls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const username = useSelector(state => state.user.userInfo.username);
  // const jwt = useSelector(state => state.user.userInfo.jwt);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
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
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.9}
        onPress={() => alert('Stay Tuned')}>
        <View style={styles.start}>
          <Text style={styles.startIcon}>#</Text>
          <Text style={styles.startText}>My Profile</Text>
        </View>
        <View>
          <Text style={styles.EndIcon}>&gt;</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.9}
        onPress={() => alert('Stay Tuned')}>
        <View style={styles.start}>
          <Text style={styles.startIcon}>#</Text>
          <Text style={styles.startText}>Edit Profile</Text>
        </View>
        <View>
          <Text style={styles.EndIcon}>&gt;</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.9}
        onPress={() => alert('Stay Tuned')}>
        <View style={styles.start}>
          <Text style={styles.startIcon}>#</Text>
          <Text style={styles.startText}>Change Password</Text>
        </View>
        <View>
          <Text style={styles.EndIcon}>&gt;</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.9}
        onPress={handleSignout}>
        <View style={styles.start}>
          <Text style={styles.startIcon}>#</Text>
          <Text style={styles.startText}>Logout</Text>
        </View>
        <View>
          <Text style={styles.EndIcon}>&gt;</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
