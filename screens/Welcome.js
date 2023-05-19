import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { assets } from "../constants";
import * as Animatable from "react-native-animatable";
import { useSelector, useDispatch } from "react-redux";
import { setUserCategories } from "../redux/actions";
import { async } from "@firebase/util";

const Welcome = () => {
  const navigator = useNavigation();
  const { userinfo } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [navigateToHome, setNavigateToHome] = useState(false)

  const setNavigation = () => {
    if (navigateToHome) {
      navigator.navigate('Home')
    } else {
      navigator.navigate('Categories')
    }
  }

  const loadUserCategoriesInfo = async () => {
    if(userinfo && userinfo[0] && userinfo[0].id) {
    let string = 'http://165.22.179.123/users-api/preferences?user_id=' + userinfo[0].id
      try {
        const response = await fetch(
          string
        );
        const json = await response.json();
        if (json && json["user_categories"] && Object.keys(json["user_categories"]) && Object.keys(json["user_categories"]).length > 0) {
          dispatch(setUserCategories(json["user_categories"]))
          navigator.navigate('Home')
        } else {
          navigator.navigate('Categories')
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigator.navigate('Home')
    }
  }

  useEffect(() => {
    loadUserCategoriesInfo()
  }, [])

  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ fontSize: '30' }}>Welcome to</Text>
      <Animatable.Image
        animation="zoomIn"
        source={assets.vpa}
        resizeMode="contain"
        style={{ height: '20%' }}
      />
      <View>
        <Text style={{ fontSize: '20' }}>{"\n"}Getting your profile ready...{"\n"}</Text>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    </View>
  );
};

export default Welcome;