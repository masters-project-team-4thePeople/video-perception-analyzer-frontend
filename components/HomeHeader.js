import React, { useState, useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import { useSelector, useDispatch } from "react-redux";
import { setResetAction } from "../redux/actions";

const HomeHeader = ({ onSearch, searchBar }) => {
  const { name } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const openMenu = () => {
    setIsMenuOpen(true);
  }
  const onBackdropPress = () => {
    setIsMenuOpen(false);
  }
  const navigation = useNavigation();
  const onOptionSelect = (value) => {
    setIsMenuOpen(false);
    if (value == 1) {
      navigation.navigate('Home', {
        userDetails: {}
      }) } else {
      clearLogin();
    }
  }
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const clearLogin = () => {
    AsyncStorage.removeItem('vpaCredentials')
      .then(() => {
        setStoredCredentials("")
        dispatch({ type: 'RESET_STATE' });
      }
      )
      .catch((error) => console.error(error));
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
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption value={5} text='Logout' />
          </MenuOptions>
        </Menu>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}
        >
          Hello, {name} 👋
        </Text>

        {searchBar == 1 ? <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's view your favorite videos
        </Text> : searchBar == 2 ? <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Change your categories selection
        </Text> : <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's see your uploads
        </Text>}

      </View>
      {searchBar == 1 ?
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
        </View> : null}
    </View>
  );
};

const optionsStyles = {
  optionsWrapper: {
    backgroundColor: '#6082B6',
    shadowRadius: 100
  },
  optionWrapper: {
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 5
  },
  optionText: {
    color: 'black',
  },
};
export default HomeHeader;
