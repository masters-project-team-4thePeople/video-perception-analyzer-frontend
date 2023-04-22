import { useFonts } from 'expo-font';
import RootStack from './navigators/RootStack';
import { MenuProvider } from 'react-native-popup-menu';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { CredentialsContext } from './components/CredentialsContext';
import React, {useMemo, useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons'
import { MediaType, Asset } from 'expo-media-library';

import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

// const Stack = createStackNavigator();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "white"
//   }
// }

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

  const fetchVideoUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  }
  const uploadFile = async (file) => {
    const vid = await fetchVideoUri(file.uri);
    return Storage.put(`my-video-filename${Math.random()}.mp4`,vid, {
      level:'public',
      contentType:file.type,
      progressCallback(uploadProgress){
        console.log('PROGRESS--', uploadProgress.loaded + '/' + uploadProgress.total);
      }
    })
    .then((res) => {
      Storage.get(res.key)
      .then((result) => {
        console.log('RESULT --- ', result);
        let awsImageUri = result.substring(0,result.indexOf('?'))
        console.log('RESULT AFTER REMOVED URI --', awsImageUri)
        setIsLoading(false)
      })
      .catch(e => {
        console.log(e);
      })
    }).catch(e => {
      console.log(e);
    })
  }

  // if(!loaded) return null;

  if(!appReady) {
    return <AppLoading
    startAsync={checkLoginCredentials}
    onFinish={() => setAppReady(true)}
    onError={console.log("App not ready")}
    />
  }

  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <MenuProvider>
        <Provider store={Store}>
          <RootStack/>
        </Provider>
      </MenuProvider>
    </CredentialsContext.Provider>
  );
 
  }

export default App;