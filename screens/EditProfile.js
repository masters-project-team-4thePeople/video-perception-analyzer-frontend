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

const EditProfile = () => {
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>
        <HomeHeader searchBar={3}/>
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
              Your Uploads 
            </Text>
           
          </View>
        </ScrollView>
        <View>
        <Footer/>
        </View>
    </SafeAreaView>
  );
};

export default EditProfile;
