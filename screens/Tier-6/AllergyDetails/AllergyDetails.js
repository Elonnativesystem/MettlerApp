import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const AllergyDetails = ({navigation, route}) => {
  const {item} = route.params;
  const Card = ({heading, value}) => {
    return (
      <View style={{margin: '5%'}}>
        <Text style={{color: '#737373', fontSize: 18}}>{heading}</Text>
        <Text style={{color: '#000', fontSize: 18, marginTop: '1%'}}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Card heading="Causative Agent :" value={item.causativeAgentName} />
      <Card
        heading="Reaction Date and Time :"
        value={item.observedDetails.reactionDateTime}
      />
      <Card heading="Severity :" value={item.allergySeverity} />
      <Card heading="Originator :" value={item.physicianName} />
      <Card heading="Orgination Date :" value={item.dateOfOnset} />
      <Card heading="Nature Of Reaction :" value={item.natureOfReaction} />
      {/* <Card heading="Symptoms :" value={item.symptoms} /> */}
    </View>
  );
};

export default AllergyDetails;
