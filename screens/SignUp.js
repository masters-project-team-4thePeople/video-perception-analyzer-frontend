import { Text, View, Image, TextInput, useWindowDimensions, StyleSheet, Pressable, Dimensions, Alert } from 'react-native'
import { COLORS, FONTS, assets } from "../constants";
import { CustomButton, CustomInput } from '../components';
import { useState, useRef } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile, getAuth } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

const SignUp = () => {

  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [uppercase, setUpperCase] = useState(false);
  const [digit, setDigit] = useState(false);
  const [special, setSpecial] = useState(false);
  const [maximum, setMaximum] = useState(false);
  const [whitespace, setWhitespace] = useState(false);
  const [lowecase, setLowerCase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true)
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setdob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState("");
  const [date, setDate] = useState(new Date())
  const inputRef = useRef(null);
  const authCurr = getAuth();
  const baseUrlProfile = "http://68.183.20.147/users-api/profile/";

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setDate(date);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const checkValidation = (event) => {
    let pass = event.nativeEvent.text
    let white = /^(?=.*\s)/;
    setWhitespace(white.test(pass))
    let max = /^.{6,15}$/
    setMaximum(max.test(pass))
    let spec = /^[a-zA-Z0-9 ]*$/
    setSpecial(spec.test(pass))
    let num = /\d/
    setDigit(num.test(pass))
    let upper = /[A-Z]/
    let lower = /[a-z]/
    let upperVal = upper.test(pass)
    let lowerVal = lower.test(pass)
    setUpperCase(upperVal)
    setLowerCase(lowerVal)
  }

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    Moment.locale('en');
    let dateInFormat = Moment(date).format('YYYY-MM-DD')
    setdob(dateInFormat);
    hideDatePicker();
  };

  const validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  const validateAndSetPass = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  const callUserProfileApi = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email,
        first_name: username,
        last_name: lastname,
        email: email,
        password: password,
        birth_date: dob,
        notification_id: '' })
    };
    try {
      const response = await fetch('http://68.183.20.147/users-api/profile/', requestOptions);
      const json = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const onSignUpPressed = () => {
    if(!username || !email || !dob || !password || !confirmPassword || !lastname) {
      Alert.alert("Please fill the complete form");
    } else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(email)) {
      Alert.alert("Please fill a valid email address")
    } else if(!maximum || special || !digit || !uppercase || !lowecase || whitespace) {
      Alert.alert("Please enter a password that satisfies the conditions")
    } else if(password!==confirmPassword) {
      Alert.alert("Please verify the passwords")
    } else {
      // setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        sendEmailVerification(authCurr.currentUser)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            Alert.alert('Please check your email to activate your account.');
            callUserProfileApi();
          })
        });
        navigation.navigate('Login')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email already in use. Please login to continue.');
        }
      })
    }
  }

  const onLoginPressed = () => {
    navigation.navigate('Login')
  }

  const handleEmail = () => {

  }

  const toggleIsSecure = () => {
    setIsSecure(!isSecure);
  }

  const loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');
  const loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  return (

    <KeyboardAwareScrollView
      contentContainerStyle={{
        height: Dimensions.get("window").height * 2.25,
        width: '100%'
      }}
    >
      <View>
        <View style={{ marginTop: 30 }}>

          <DateTimePickerModal style={{ height: 200 }}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
          />
        </View>
        <View style={styles.root}>
          <Image
            source={assets.vpa}
            resizeMode="contain"
            style={[styles.logo, { height: height * 0.3 }]}
          />
          <Text style={styles.primary}>Create Account</Text>
          <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
          <CustomInput placeholder="First Name" value={username} setValue={setUsername} />
          <CustomInput placeholder="Last Name" value={lastname} setValue={setLastname} />
          {!dob ? (<CustomButton text="Date of Birth" onPress={showDatePicker} type='DOB' />) :
            (<CustomInput placeholder="Date of Birth" value={dob.toString()} setValue={setdob} />)}
          {/* <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/> */}
          <View style={styles.container}>
            <TextInput
              ref={inputRef}
              value={password}
              onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
              placeholder="Password"
              secureTextEntry={isSecure}
              maxLength={15}
              onChange={checkValidation}
            
              />
              {!isSecure ? <Icon onPress={toggleIsSecure}
              style={{left: '90%', bottom: '35%'}}
                name='eye'
                color='#000'
                size={14}
              /> : <Icon onPress={toggleIsSecure}
              style={{left: '90%', bottom: '35%'}}
                name='eye-slash'
                color='#000'
                size={14}
              />}
              
            <BarPasswordStrengthDisplay
              password={password}
              width={300}
              labelStyle={styles.label}
            />
          </View>
          {password.length > 0 ?
          <View>
            {maximum ? <Text><Icon name='check'></Icon> Between 6-15 Characters</Text> : <Text style={styles.red}><Icon name='close'></Icon> Between 6-15 characters</Text> }
            {!special ? <Text><Icon name='check'></Icon> Must include a special character</Text> : <Text style={styles.red}><Icon name='close'></Icon> Must include a special character</Text> }
            {digit ? <Text><Icon name='check'></Icon> Must include a number</Text> : <Text style={styles.red}><Icon name='close'></Icon> Must include a digit</Text> }
            {uppercase && lowecase ? <Text><Icon name='check'></Icon> Must include uppercase and lowercase</Text> : <Text style={styles.red}><Icon name='close'></Icon> Must include uppercase and lowercase</Text> }
            {!whitespace ? <Text><Icon name='check'></Icon> No whitespaces</Text> : <Text style={styles.red}><Icon name='close'></Icon> No whitespaces</Text> }
          </View> : null }
          <View style={styles.container}>
            <TextInput
              value={confirmPassword}
              onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
              placeholder="Confirm Password"
              secureTextEntry={true}
              maxLength={15}
              clearButtonMode="always"
            />

          </View>
          {validationMessage ? <Text style={styles.red}><Icon name='warning'></Icon>{validationMessage}</Text> : null}
          <CustomButton text="Sign Up" onPress={onSignUpPressed}/>
          <View style={styles.buttons}>
            <Text>Have an account? </Text>
            <Pressable><Text style={{ color: '#2196f3' }} onPress={onLoginPressed}>Login</Text></Pressable>
          </View>
        </View>
      </View>
      
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '80%', maxWidth: 500, marginBottom: 0
  },
  primary: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10
  },
  red: {
    color: 'red'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
export default SignUp
