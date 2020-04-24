/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import UserData from '../Components/UserData';
import Header from '../Components/Header';

const screens = {
  Backend: {
    screen: UserData,
    navigationOptions: (props) => {
      return {
        headerTitle: () => <Header title="User Data" navigation={props.navigation} />,
      };
    },
  },
};

const BackEndStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#232323',
      height: 65,
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default BackEndStack;
