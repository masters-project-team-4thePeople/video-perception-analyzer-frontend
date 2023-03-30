import { Text, View, Image, useWindowDimensions, StyleSheet, Button, Platform, Pressable, Alert } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { CustomButton, CustomInput } from '../components';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const { height } = useWindowDimensions();
    const navigator = useNavigation();
    const onContinue = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            Alert.alert('Please check your email to reset your password');
            }
        )
    }

    const onLogin = () => {
        navigator.navigate('Login')
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
                    <Text style={styles.primary}>Enter the email address associated with your account and we will send the password reset link</Text>
                </View>
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomButton text="Continue" onPress={onContinue} />
                <View style={styles.buttons}>
                    <Pressable><Text style={{ color: '#2196f3' }} onPress={onLogin}>Login</Text></Pressable>
                </View>
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
