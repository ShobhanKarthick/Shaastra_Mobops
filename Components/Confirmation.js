import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Mystyles} from './Mystyles';

const Confirmation = props => {
  const HomeHandler = () => {
    props.navigation.goBack();
  };
  return (
    <View style={Mystyles.confirmPage}>
      <Text style={Mystyles.confirmText}>Submitted Succesfully!!!</Text>
      <TouchableOpacity style={Mystyles.homebutton} onPress={HomeHandler}>
        <Text style={Mystyles.buttontext}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;
