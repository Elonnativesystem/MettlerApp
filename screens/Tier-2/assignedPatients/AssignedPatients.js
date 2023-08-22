import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {Loader} from '../../../components';
import {getAllPatients} from '../../../redux/apiCalls';
import MIcon from 'react-native-vector-icons/MaterialIcons';
const AssignedPatients = ({navigation}) => {
  const dispatch = useDispatch();
  const {pending} = useSelector(state => state.user);
  const errorMsg = useSelector(state => state.user.error);
  const data = useSelector(state => state.user.allPatients);

  useEffect(() => {
    getAllPatients(dispatch);
  }, []);
  useEffect(() => {
    {
      errorMsg &&
        Toast.show(errorMsg, Toast.LONG, {backgroundColor: '#0f3995'});
    }
  }, [errorMsg]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Loader
        visible={pending}
        textContent="Fetching Data"
        color="#0f3995"
        textStyle={{color: '#0f3995'}}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Assigned by me</Text>
        {/* <Text style={{fontSize: 30}}> 🔎</Text> */}
        <MIcon name="search" size={30} />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.pBtn}
              onPress={() =>
                navigation.navigate('PatientDetails', {patient: data[index]})
              }>
              <View style={styles.patientView}>
                {/* <Image
                  source={require('../../../assets/images/avatar2.png')}
                  resizeMode="contain"
                  style={{width: '10%', height: '100%'}}
                /> */}
                <MIcon name="no-accounts" size={60} />
                <View style={styles.nameView}>
                  <Text style={styles.patientUname}>{item.username}</Text>
                  <Text style={styles.patientName}>
                    {item.basicDetails[0].name[0].given +
                      ' ' +
                      item.basicDetails[0].name[0].family}
                  </Text>
                </View>
                <View style={styles.orgView}>
                  <Text style={styles.orgName}>{item.organization}</Text>
                </View>
                <View style={styles.arrowView}>
                  {/* <Text style={styles.arrow}>＞</Text> */}
                  <MIcon name="arrow-forward-ios" size={25} color="#8d8d8d" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default AssignedPatients;
