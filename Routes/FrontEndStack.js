/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import RegForm from '../Components/RegForm';
import Confirmation from '../Components/Confirmation';
import Header from '../Components/Header';

const screens = {
  Home: {
    screen: RegForm,
    navigationOptions: props => {
      return {
        headerTitle: () => <Header title="Register" navigation={props.navigation} />,
      };
    },
  },
  Confirmation: {
    screen: Confirmation,
  },
};

const FrontEndStack = createStackNavigator(screens, {
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

export default FrontEndStack;
