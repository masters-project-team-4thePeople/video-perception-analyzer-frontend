import { Text, View, Image, TextInput, useWindowDimensions, StyleSheet, Pressable, Alert } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { CustomButton, CustomInput } from '../components';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authCurr = getAuth();
    
    const onSignInPressed = async() => {
        signInWithEmailAndPassword(auth, username, password)
        .then((user) => {
          console.log(user.user.displayName)
          if(!user.user.emailVerified) {
            Alert.alert("Please verify your email to login");
          } else {
            navigation.navigate('Home', {
              userDetails: user.user
            })
          }
        }, error => {
            if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
              Alert.alert('Your email or password was incorrect');
            } else {
              Alert.alert('There was a problem with your request');
            }
        })
    }

    const onForgotPasswordPressed = () => {
      navigation.navigate('ResetPassword')
    }

    const onSignUpPressed = () => {
      navigation.navigate('SignUp')
    }

    const {height} = useWindowDimensions();
    const navigation = useNavigation();


    const loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');
    const loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

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
