/* eslint-disable no-control-regex */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Mystyles} from './Mystyles';

function RegForm(props) {

  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [phone, setPhone] = useState('');
  const [countryState, setCountrystate] = useState('');

  const [userData, setUserData] = useState([]);

  const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const passwordRegExp = /(.{6,})/;
  const phoneRegExp = /([0-9]{10})/;


  const fullNameHandler = (event) => {
    setFullname(event);
  };

  const emailHandler = (event) => {
    setEmail(event);
  };

  const passwordHandler = (event) => {
    setPassword(event);
  };

  const confirmPasswordHandler = (event) =>{
    setConfirmpassword(event);
  };

  const phoneHandler = (event) => {
    setPhone(event);
  };

  const countryStateHandler = (event) => {
    setCountrystate(event);
  };

  const SubmitHandler = () => {
    if (fullName === ''){
      Alert.alert('Mandatory Field', 'Please enter your full name', [{text: 'OK'}]);
    }
    else if (email === ''){
      Alert.alert('Mandatory Field', 'Please enter your E-mail', [{text: 'OK'}]);
    }
    else if (password === ''){
      Alert.alert('Mandatory Field', 'Please enter a password', [{text: 'OK'}]);
    }
    else if (confirmPassword === ''){
      Alert.alert('Mandatory Field', 'Please enter your password again', [{text: 'OK'}]);
    }
    else if (phone === ''){
      Alert.alert('Mandatory Field', 'Please enter your phone number', [{text: 'OK'}]);
    }
    else if (!emailRegExp.test(email)){
      Alert.alert('Invalid', 'Please enter a valid E-mail address', [{text: 'OK'}]);
    }
    else if (!passwordRegExp.test(password)){
      Alert.alert('Password', 'Enter 6 or more characters', [{text: 'OK'}]);
    }
    else if (!(password === confirmPassword)){
      Alert.alert('Invalid', 'Passwords do not match', [{text: 'Ok'}]);
    }
    else if (!phoneRegExp.test(phone)){
      Alert.alert('Invalid', 'Please enter a valid Phone number', [{text: 'OK'}]);
    }
    else {
      Alert.alert('Done',
      `Fullname : ${fullName}
Email: ${email}
Phone: ${phone}
State: ${countryState}
      `,[{text: 'OK'}]);

      const newUser = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
        countryState: countryState,
      };

     console.log(newUser);
     setUserData( prevUserData => {
       [newUser, ...prevUserData];
     });
     console.log(userData);


      setFullname('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');
      setPhone('');
      setCountrystate('');
    }
  };

  return (
    <ImageBackground source={require('./../Images/bg2.png')} style={Mystyles.bg}>
      <View style={Mystyles.page}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView style={Mystyles.inputcontainer}>
            <Text style={Mystyles.head}>SIGN UP</Text>
            <ScrollView>
              <TextInput
                style={Mystyles.input}
                placeholder="Full Name"
                placeholderTextColor="#FFFFFF"
                autoCapitalize={'words'}
                returnKeyType={'next'}
                value={fullName}
                onChangeText={fullNameHandler}
              />
              <TextInput
                style={Mystyles.input}
                placeholder="E-mail"
                placeholderTextColor="#FFFFFF"
                keyboardType={'email-address'}
                returnKeyType={'next'}
                value={email}
                onChangeText={emailHandler}
              />
              <TextInput
                style={Mystyles.input}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                autoCapitalize={'none'}
                autoCorrect={false}
                returnKeyType={'next'}
                value={password}
                onChangeText={passwordHandler}
              />
              <TextInput
                style={Mystyles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                autoCapitalize={'none'}
                autoCorrect={false}
                returnKeyType={'next'}
                value={confirmPassword}
                onChangeText={confirmPasswordHandler}
              />
              <TextInput
                style={Mystyles.input}
                placeholder="Phone"
                placeholderTextColor="#FFFFFF"
                keyboardType={'number-pad'}
                maxLength={10}
                returnKeyType={'next'}
                value={phone}
                onChangeText={phoneHandler}
              />
              <TextInput
                style={Mystyles.input}
                placeholder="State"
                placeholderTextColor="#FFFFFF"
                returnKeyType={'go'}
                value={countryState}
                onChangeText={countryStateHandler}
              />
              <TouchableOpacity
                style={Mystyles.buttoncontainer}
                onPress = {SubmitHandler}>
                <Text style={Mystyles.buttontext}>SUBMIT</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

export default RegForm;
