import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import Loader from '../loader/Loader';

const Q15Row = ({onPressBox, hour, date}) => {
  const q15Config = useSelector(state => state.user.q15Config);
  const [loading, setLoading] = useState(true);
  const memoizedQ15Config = useMemo(() => q15Config, [q15Config]);
  const Year = date.getFullYear().toString();
  const Month = (date.getMonth() + 1).toString().padStart(2, '0');
  const Date = date.getDate().toString();
  const formattedDate = Year + Month + Date;
  // useEffect(() => {
  //   setLoading(true);
  //   // Simulate an asynchronous data update
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000); // Adjust the delay based on your actual data fetching
  //   // You can also update other local state here if needed
  // }, [memoizedQ15Config, hour, date]);
  // const filteredData = q15Config.filter(entry => entry.q15Time === hour);
  const data = [
    {
      id: '00',
      stamp: '0-15',
      code: 'A',
      mins: '00',
    },
    {
      id: '15',
      stamp: '15-30',
      code: 'B',
      mins: '15',
    },
    {
      id: '30',
      stamp: '30-45',
      code: 'C',
      mins: '30',
    },
    {
      id: '45',
      stamp: '45-60',
      code: 'D',
      mins: '45',
    },
  ];
  return (
    <View style={styles.boxView}>
      <View style={styles.hourColumn}>
        <Text style={styles.hourText}>{hour}:00</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.stampBoxContainer}
        renderItem={({item}) => (
          <View style={styles.stampBox}>
            <TouchableOpacity
              style={[
                styles.box,
                // loading
                //   ? null
                //   :
                memoizedQ15Config.some(
                  configItem =>
                    configItem.q15Slot === item.code + hour &&
                    // configItem.q15Time === `${hour}:00` &&
                    configItem.q15Date === formattedDate &&
                    configItem.location &&
                    configItem.activity,
                )
                  ? styles.boxWithData
                  : null,
              ]}
              activeOpacity={0.8}
              // onPress={async () => await onPressBox(item.code + hour, item.id)} // Use item.stamp here
              onPress={
                memoizedQ15Config.some(
                  configItem =>
                    configItem.q15Slot === item.code + hour &&
                    configItem.q15Date === formattedDate &&
                    configItem.location &&
                    configItem.activity,
                )
                  ? () =>
                      Alert.alert(
                        'MettlerHealthCare',
                        `The ${item.code + hour} Slot is already registered`,
                      )
                  : async () => await onPressBox(item.code + hour, item.id)
              }>
              {
                memoizedQ15Config.map(configItem => (
                  <View key={configItem.id}>
                    {configItem.q15Slot === item.code + hour &&
                      // configItem.q15Time === `${hour}:00` &&
                      configItem.q15Date === formattedDate && (
                        <Text style={{color: '#fff'}}>
                          {configItem.location}/{configItem.activity}
                        </Text>
                      )}
                  </View>
                ))
                // )
              }
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Q15Row;
