import React, { useState, useContext, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text, Button , Icon, Alert} from "react-native";
import { NFTCard, FocusedStatusBar, CustomButton, CircleButton } from "../components";
import { COLORS, CategoriesData, assets } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import CategoriesHeader from "../components/CategoriesHeader";
import CategoriesList from "../components/CategoriesList";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { setUserName, setSelectedCategories } from "../redux/actions";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState(CategoriesData);
  const navigation = useNavigation();
  const [paused, setPaused] = useState(false);
  const [positionStart, setPositionStart] = useState(null)
  const [positionEnd, setPositionEnd] = useState(null)
  const {width} = Dimensions.get("window");
  const THRESHOLD = 1800;
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const {user} = storedCredentials ? storedCredentials : {};
  const {category} = useSelector(state=>state.userReducer);
  const {userinfo} = useSelector(state=>state.userReducer);


  const navigateToHome = async () => {
    if(category.length >= 3) {
      var obj = {};
      category.forEach(function(e) {
        obj[e.id] = e.name
      })
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: userinfo[0].id,
          user_categories: obj})
      };
      try {
        fetch('http://68.183.20.147/users-api/preferences/', requestOptions)
        .then(response => {
          const json = response.json();
          navigation.navigate('Home')
        })
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert('Please select atleast 3 categories')
    }
  }

  const handleScroll = (e) => {
    // console.log('scroll' + e.nativeEvent.contentOffset.y)
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition > positionStart && scrollPosition < positionEnd && paused) {
      setPaused(false)
    } else if ((scrollPosition > positionEnd || scrollPosition < positionStart) && !paused) {
      setPaused(true);
    }
  }


  const renderIem = ({item, index}) => {
    return <CategoriesList item={item} index={index}/>
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <CategoriesHeader/>
      <View style={{alignItems: 'flex-end', alignContent: 'flex-end', marginLeft: '60%'}}><CustomButton text="Next" type="SECONDARY" onPress={navigateToHome}></CustomButton></View>
      <FlatList
            style={{marginHorizontal: 2}}
            numColumns={2}
            onScroll={handleScroll}
            data={categoriesData}
            renderItem={renderIem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}/>
          
    </SafeAreaView>
  );
};

export default Categories;
