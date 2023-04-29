import React, { useState } from "react";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { CategoriesData } from "../constants";

const EditCategories = () => {
  const { category } = useSelector(state => state.userReducer);
  const [categoriesData, setCategoriesData] = useState(CategoriesData);
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
  }])

  // const handleScroll = (e) => {
  //   // console.log('scroll' + e.nativeEvent.contentOffset.y)
  //   const scrollPosition = e.nativeEvent.contentOffset.y;
  //   if (scrollPosition > positionStart && scrollPosition < positionEnd && paused) {
  //     setPaused(false)
  //   } else if ((scrollPosition > positionEnd || scrollPosition < positionStart) && !paused) {
  //     setPaused(true);
  //   }
  // }
  // const handleScrollSecond = (e) => {
  //   // console.log('scroll' + e.nativeEvent.contentOffset.y)
  //   const scrollPosition = e.nativeEvent.contentOffset.y + 100;
  //   if (scrollPosition > positionStart2 && scrollPosition < positionEnd2 && paused2) {
  //     setPaused2(false)
  //   } else if ((scrollPosition > positionEnd2 || scrollPosition < positionStart2) && !paused2) {
  //     setPaused2(true);
  //   }
  // }


  const renderIem = ({ item, index }) => {
    return <>
      <View flex style={{ backgroundColor: COLORS.primary, margin: 55 }}>
        <TouchableOpacity
          style={styles.selectedCategories}
          onPress={() => handlePress(item)}>
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
      </View>
    </>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <HomeHeader searchBar={false} />
        <View>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              alignContent: 'center',
              textAlign: 'center',
              marginTop: 20
            }}
          >
            Your Categories
          </Text>
          <FlatList
            style={{ marginHorizontal: 2 }}
            numColumns={2}
            data={dummyCat}
            renderItem={renderIem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true} />

        </View>
        <View>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            Add Categories
          </Text>
          <FlatList
            style={{ marginHorizontal: 2 }}
            numColumns={2}
            data={categoriesData}
            renderItem={renderIem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true} />
        </View>
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