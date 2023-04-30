import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from "react-native";
import { NFTCard, HomeHeader, FocusedStatusBar, CustomButton } from "../components";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { CategoriesData } from "../constants";
import { ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from '@react-navigation/native';
import Footer from "../components/Footer";
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const EditCategories = () => {
  const navigation = useNavigation();
  const { category } = useSelector(state => state.userReducer);
  const [categoriesData, setCategoriesData] = useState(CategoriesData);
  const [differenceCategoriesData, setDifferenceCategoriesData] = useState([])
  const [positionStart, setPositionStart] = useState(null);
  const [positionEnd, setPositionEnd] = useState(null);
  const [paused, setPaused] = useState(false);
  const [positionStart2, setPositionStart2] = useState(null);
  const [positionEnd2, setPositionEnd2] = useState(null);
  const [paused2, setPaused2] = useState(false);

  const [dummyCat, setDummyCat] = useState([{
    id: "1",
    name: "Film and Animation",
    selected: false
  },
  {
    id: "2",
    name: "Autos and Vehicles",
    selected: false
  }, {
    id: "3",
    name: "Music",
    selected: false
  }, {
    id: "4",
    name: "Pets & Animals",
    selected: false
  },{
    id: "5",
    name: "Sports",
    selected: false
  }])

  const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];

  useEffect(() => {
    addCatData()
  }, [])

  const addCatData = () => {
    let data = categoriesData.filter(a => dummyCat.every(c => c.id !== a.id))
    setDifferenceCategoriesData(data)
  }

  const handlePressCross = (item) => {
    let data = [...differenceCategoriesData]
    data.splice(0, 0, item)
    let addData = [...dummyCat]
    let ind = addData.indexOf(item)
    addData.splice(ind, 1)
    setDummyCat(addData)
    setDifferenceCategoriesData(data)
  }

  const handlePress = (item) => {
    let data = [...dummyCat]
    data.splice(0, 0, item)
    let addData = [...differenceCategoriesData]
    let ind = addData.indexOf(item)
    addData.splice(ind, 1)
    setDummyCat(data)
    setDifferenceCategoriesData(addData)
  }

  const saveChanges = () => {
    if(dummyCat.length >= 3) {
      Alert.alert('Success', 'Your changes were saved', [
        {
          text: 'Cancel'
        },
        {text: 'Go to home', onPress: () => navigation.navigate('Home')},
      ]);
  
    } else {
      Alert.alert('Please select atleast 3 categories')
    }
  }

  const renderIem = ({ item, index }) => {
    return <>
      <Pressable flex style={{ backgroundColor: COLORS.primary, margin: 55 }}>
        <TouchableOpacity
          style={styles.selectedCategories}
          onPress={() => handlePressCross(item)}>
          <Text style={{ color: COLORS.white, textAlign: 'center' }}>{item.name}</Text>
          <Image
            source={assets.error}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 70,
              right: 0,
            }}
          />
        </TouchableOpacity>
      </Pressable>
    </>
  }

  const renderIemFull = ({ item, index }) => {
    return <>
      <View flex style={{ backgroundColor: COLORS.primary, margin: 55 }}>
        <TouchableOpacity
          style={styles.selectedCategories}
          onPress={() => handlePress(item)}>
          <Text style={{ color: COLORS.white, textAlign: 'center' }}>{item.name}</Text>
          <Image
            source={assets.plus}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 70,
              right: 0,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>
        <HomeHeader searchBar={false} />
        <View style={{alignItems: 'flex-end', alignContent: 'flex-end', marginLeft: '60%'}}><CustomButton text="Save Changes" type="SECONDARY" onPress={saveChanges}></CustomButton></View>
        <ScrollView>
          <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                alignContent: 'center',
                textAlign: 'center',
                paddingTop: 20,
                marginLeft: 130
              }}
            >
              Your Categories 
            </Text>
            <Image
              source={assets.collapse}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginTop: 20
              }}
            />
          </View>
          <FlatList
            style={{ marginHorizontal: 2 }}
            numColumns={2}
            data={dummyCat}
            renderItem={renderIem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true} 
            contentContainerStyle={{ paddingBottom: 50 }}
          />
          <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                alignContent: 'center',
                textAlign: 'center',
                paddingTop: 20,
                marginLeft: 130
              }}
            >
              Add Categories
            </Text>
            <Image
              source={assets.collapse}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginTop: 20
              }}
            />
          </View>
          <FlatList
            style={{ marginHorizontal: 2 }}
            numColumns={2}
            data={differenceCategoriesData}
            renderItem={renderIemFull}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ paddingBottom: 80 }}/>
        </ScrollView>
        <View>
        <Footer/>
        </View>
    </SafeAreaView>
  );
};

export default EditCategories;


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  },
  originalCategories: {
    width: 95,
    height: 95,
    backgroundColor: COLORS.primary,
    position: "absolute",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
    borderColor: '#FF7A7A',
    borderWidth: 5
  },
  selectedCategories: {
    width: 95,
    height: 95,
    backgroundColor: COLORS.secondary,
    position: "absolute",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light
  },
});