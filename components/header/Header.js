import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = ({navigation}) => {
  return (
    <>
      {Platform.OS === 'ios' && (
        <View
          style={{
            width: '100%',
            height: 100, // For all devices, even X, XS Max
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#0f3995',
          }}
        />
      )}
      <StatusBar barStyle="light-content" backgroundColor="#0f3995" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.menuBtn}
          activeOpacity={0.7}
          onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuBtnText}>☰</Text>
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logoHeader.png')}
          style={{width: '40%', marginHorizontal: 40}}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{width: '100%', marginLeft: 20}}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            source={require('../../assets/images/avatar.png')}
            resizeMode="contain"
            style={{width: '10%'}}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Header;
