import React from 'react';
import {Text, View} from 'react-native';
import {Mystyles} from './Mystyles';

const UserData = props => {
  return (
    <View style={Mystyles.confirmPage}>
      <Text style={Mystyles.confirmText}>User Data</Text>
    </View>
  );
};

export default UserData;
