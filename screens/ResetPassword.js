import { Text, View, Image, TextInput, useWindowDimensions, StyleSheet, Button, Platform, Pressable } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { CustomButton, CustomInput } from '../components';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();
    const onContinue = () => {
        console.log('continue')
    }
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={assets.vpa}
                    resizeMode="contain"
                    style={[styles.logo, { height: height * 0.3 }]}
                />
                <View>
                    <Text style={styles.primary}>Enter the email address associated with your account and we will send a code to reset your password</Text>
                </View>
                <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
                <CustomButton text="Continue" onPress={onContinue}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '80%', maxWidth: 500, marginBottom: 30
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,

    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
    primary: {
        fontFamily: FONTS.semiBold,
        color: COLORS.secondary,
    }
})
export default ResetPassword
