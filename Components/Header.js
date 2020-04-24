import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {Mystyles} from './Mystyles';

function Header({title, navigation}) {
  const drawerOpen = () => {
    navigation.openDrawer();
  };

  return (
    <View style={Mystyles.header}>
      <TouchableOpacity onPress={drawerOpen}>
        <Image source={require('./../Images/menu.png')} />
      </TouchableOpacity>
      <View>
        <Text style={Mystyles.headertext}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;
