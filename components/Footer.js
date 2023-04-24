import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, NFTData, assets, SIZES } from "../constants";

const Footer = () => {
    const navigation = useNavigation();
    const navigateToHome = () => {
        navigation.navigate('Home')
    }

    const navigateToProfile = () => {
        navigation.navigate('EditProfile')
    }

    const navigateToUpload = () => {
        navigation.navigate('UploadVideo')
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