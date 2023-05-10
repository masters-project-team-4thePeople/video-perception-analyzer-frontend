import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, NFTData, assets, SIZES } from "../constants";
import {launchImageLibraryAsync} from "expo-image-picker";
import { uploadFile } from "../utility/upload";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const navigation = useNavigation();
    const { userinfo } = useSelector(state => state.userReducer);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigateToHome = () => {
        navigation.navigate('Home')
    }

    const navigateToProfile = () => {
        navigation.navigate('EditProfile')
    }

    const navigateToUpload = async () => {
        let pickerResult = await launchImageLibraryAsync({
            mediaTypes: "Videos"
          });
          if (pickerResult.canceled === true) {
            return;
          }
          console.log(pickerResult);
          uploadFile(pickerResult, userinfo[0].username, userinfo[0].id).then(() => {
          })
          setSelectedImage({ localUri: pickerResult.assets });
    }

    const navigateToEdit = () => {
        navigation.navigate('EditCategories')
    }
    return (
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
            <View style={{ backgroundColor: 'white', height: 40, color: 'black', flexDirection: 'row' }}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Image
                        source={assets.home}
                        resizeMode="contain"
                        style={{ width: 30, height: 30, marginLeft: 40, marginTop: 10, shadowColor: 'black' }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToUpload}>
                    <Image
                        source={assets.upload}
                        resizeMode="contain"
                        style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToEdit}>
                    <Image
                        source={assets.edit}
                        resizeMode="contain"
                        style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToProfile}>
                    <Image
                        source={assets.user}
                        resizeMode="contain"
                        style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;