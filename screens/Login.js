import { Text, View, Image, TextInput, useWindowDimensions, StyleSheet, Pressable, Alert } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { CustomButton, CustomInput } from '../components';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import {AccessToken, AuthenticationToken, LoginButton, LoginManager} from 'react-native-fbsdk-next'
import { auth } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setUserName } from "../redux/actions";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authCurr = getAuth();

    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {name} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();
    
    const onSignInPressed = async() => {
        signInWithEmailAndPassword(auth, username, password)
        .then((user) => {
          dispatch(setUserName(user.user.displayName));
          if(!user.user.emailVerified) {
            Alert.alert("Please verify your email to login");
          } else {
            fetchUserDetails();
          }
        }, error => {
            if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
              Alert.alert('Your email or password was incorrect');
            } else {
              Alert.alert('There was a problem with your request');
            }
        })
    }

    const fetchUserDetails = async () => {
      let string = 'http://68.183.20.147/users-api/profile?username=' + username
      try {
        const response = await fetch(
          string
        );
        const json = await response.json();
        dispatch(setUserInfo([json]))
        persistLogin(json);
        return json;
      } catch (error) {
        console.error(error);
      }
    }

    const onForgotPasswordPressed = () => {
      navigation.navigate('ResetPassword')
    }

    const onSignUpPressed = () => {
      navigation.navigate('SignUp')
    }

    const {height} = useWindowDimensions();
    const navigation = useNavigation();


    const loginWithFacebook = async() => {
        // const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        // if (result.isCancelled) {
        //   throw 'User cancelled the login process';
        // }

        // // Once signed in, get the users AccesToken
        // const data = await AccessToken.getCurrentAccessToken();

        // if (!data) {
        //   throw 'Something went wrong obtaining access token';
        // }

        // // Create a Firebase credential with the AccessToken
        // const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
        // const user = await signInWithCredential(auth, facebookCredential);
        // // Sign-in the user with the credential
        // console.log(user);
    }

    const loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

    const persistLogin = (credentials) => {
      AsyncStorage.setItem('vpaCredentials', JSON.stringify(credentials))
      .then(() => {
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.error(error);
      })
    }

    return (
      <ScrollView>
        <View style={styles.root}>
          <Image
            source={assets.vpa}
            resizeMode="contain"
            style={[styles.logo, {height: height *0.3}]}
          />
          <CustomInput placeholder="Email" value={username} setValue={setUsername}/>
          <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
          <CustomButton text="Log In" onPress={onSignInPressed}/>
          <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
          <View>
            <Text style={styles.primary}>OR</Text>
          </View>
          <View style={styles.buttons}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={loginWithFacebook}
              {...iconStyles}
            >
              Login with Facebook
            </Icon.Button>
            <View style={styles.space}/> 
            <Icon.Button
              name="google"
              backgroundColor="#DD4B39"
              onPress={loginWithGoogle}
              {...iconStyles}
            >
              Login with Google
            </Icon.Button>
          </View>
          <View style={styles.buttons}>
            <Text>Don't have an account? </Text>
            <Pressable><Text style={{color: '#2196f3'}} onPress={onSignUpPressed}>Sign Up</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '80%', maxWidth: 500, marginBottom: 30
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    marginBottom: 30,
    
  },
  space: {
    width: 5, // or whatever size you need
    height: 20,
  },
  primary: {
    fontFamily: FONTS.semiBold,
    color: COLORS.secondary,
  }
})

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 }
};
export default Login
