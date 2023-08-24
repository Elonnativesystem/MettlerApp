import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const AdminConfiguration = () => {
  const getAPI = async () => {
    const result = await axios.get(
      'https://staffleaveapi.onrender.com/api/staff',
    );
    console.log(result.data);
    setLists(result.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const handleSave = async e => {
    e.preventDefault();
    try {
      const result = await axios.put(
        'https://staffleaveapi.onrender.com/api/staff/ramya',
        {
          Name: staffName,
          LeaveType: leaveType,
          StartDate: startdate,
          EndDate: enddate,
          Reason: reason,
          Command: command,
          Status: Status,
        },
      );
      console.log(result);
      getAPI();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Admin Page</Text>
    </View>
  );
};

export default AdminConfiguration;
