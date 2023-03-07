import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';


const HomeHeader = ({ userName, onSearch }) => {
  const openMenu = () => {
    setIsMenuOpen(true);
  }
  const onBackdropPress = () => {
    setIsMenuOpen(false);
  }
  const navigation = useNavigation();
  const onOptionSelect = (value) => {
    setIsMenuOpen(false);
    if(value == 1) {
      navigation.navigate('Home', {
        userDetails: {}
      });
    } else if(value == 2) {
      navigation.navigate('Home', {
        userDetails: {}
      });
    } else {
      navigation.navigate('Login');
    }
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#6082B6',
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.vpa}
          resizeMode="contain"
          style={{ width: '30%', height: 90, left: -30 }}
        />
       
          <Menu opened={isMenuOpen}
          onBackdropPress={onBackdropPress}
          onSelect={value => onOptionSelect(value)}>
            <MenuTrigger style={{ width: 45, height: 80 }} onPress={openMenu}>
            <Image
            source={assets.person03}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 15,
              right: 0,
            }}
          /></MenuTrigger>
            <MenuOptions>
              <MenuOption value={1} text='Profile Information' />
              <MenuOption value={2} text='Edit Profile'/>
              <MenuOption value={3} text='Logout'/>
            </MenuOptions>
          </Menu>
        {/* <TouchableOpacity style={{ width: 45, height: 45 }} onPress={openMenu}>
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </TouchableOpacity> */}
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}
        >
          Hello, {userName.displayName} 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's view your favorite videos
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.primary,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
            <TextInput
              placeholder="Search Videos"
              placeholderTextColor="white"
              style={{ flex: 1, color: 'white' }}
              onChangeText={onSearch}
            />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;