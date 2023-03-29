import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { assets } from "../constants";
import * as Animatable from "react-native-animatable";

const Welcome = () => {
    const navigator = useNavigation();
    setTimeout(() => {
        navigator.navigate('Categories')
    }, 3000)
    return (
        <View style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: '30'}}>Welcome to</Text>
            <Animatable.Image
            animation="zoomIn"
            source={assets.vpa}
            resizeMode="contain"
            style={{height: '20%'}}
          />
          <View>
            <Text style={{fontSize: '20'}}>{"\n"}Getting your profile ready...{"\n"}</Text>
            <ActivityIndicator size='large'></ActivityIndicator>
          </View>
        </View>
    );
};

export default Welcome;