import React, { useState, useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const CategoriesHeader = ({ onSearch }) => {
  const openMenu = () => {
    setIsMenuOpen(true);
  }
  const { name } = useSelector(state => state.userReducer);
  const onBackdropPress = () => {
    setIsMenuOpen(false);
  }
  const navigation = useNavigation();
  const onOptionSelect = (value) => {
    setIsMenuOpen(false);
    if (value == 1) {
      navigation.navigate('Home', {
        userDetails: {}
      });
    } else if (value == 2) {
      navigation.navigate('Home', {
        userDetails: {}
      });
    } else {
      clearLogin();
    }
  }
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const clearLogin = () => {
    AsyncStorage.removeItem('vpaCredentials')
      .then(() => {
        setStoredCredentials("")
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
          style={{ width: '30%', height: 80, left: -30 }}
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
            <MenuOption value={1} text='Profile Information' />
            <MenuOption value={2} text='Edit Profile' />
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

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Select at least 3 categories to get started
        </Text>
      </View>
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
export default CategoriesHeader;
