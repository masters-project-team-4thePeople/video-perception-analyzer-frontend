import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Login from './screens/Login';
import Details from './screens/Details';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import { MenuProvider } from 'react-native-popup-menu';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
}

const App = () => {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  const checkLoginCredentials = () => {
    AsyncStorage
    .getItem('vpaCredentials')
    .then((result) => {
      if(result!==null) {
        setStoredCredentials(JSON.parse(result));
      } else {
        setStoredCredentials(null);
      }
    })
    .catch(error=> console.error(error))
  }

  if(!loaded) return null;
  if(!appReady) {
    return <AppLoading
    startAsync={checkLoginCredentials}
    onFinish={()=>setAppReady(true)}
    onError={console.warn}
    />
  }
  return (
    <MenuProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Details' component={Details}/>
          <Stack.Screen name='ResetPassword' component={ResetPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

export default App;