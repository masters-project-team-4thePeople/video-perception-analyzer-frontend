import Home from '../screens/Home';
import Login from '../screens/Login';
import Details from '../screens/Details';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import { useFonts } from 'expo-font';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CredentialsContext } from '../components/CredentialsContext';
import Welcome from '../screens/Welcome';
import Categories from '../screens/Categories';
import EditProfile from '../screens/EditProfile';
import EditCategories from '../screens/EditCategories';
import UploadVideo from '../screens/UploadVideo';

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white"
    }
}




const RootStack = () => {

    const [loaded] = useFonts({
        InterBold: require("../assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
        InterLight: require("../assets/fonts/Inter-Light.ttf"),
      })

    if(!loaded) return null;

    return (
        <CredentialsContext.Consumer>
            {
                ({ storedCredentials }) => (
                    <NavigationContainer theme={theme}>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                            {storedCredentials ? (
                                <>
                                    <Stack.Screen name='Welcome' component={Welcome}/>
                                    <Stack.Screen name='Home' component={Home} options={{gestureEnabled: false}}/>
                                    <Stack.Screen name='Details' component={Details}/>
                                    <Stack.Screen name='Categories' component={Categories}/>
                                    <Stack.Screen name='EditProfile' component={EditProfile}/>
                                    <Stack.Screen name='EditCategories' component={EditCategories}/>
                                    <Stack.Screen name='UploadVideo' component={UploadVideo}/>
                                </>
                                
                            ) :
                                (
                                    <>
                                        <Stack.Screen name='Login' component={Login} />
                                        <Stack.Screen name='SignUp' component={SignUp} />
                                        <Stack.Screen name='Details' component={Details} />
                                        <Stack.Screen name='ResetPassword' component={ResetPassword} />
                                    </>
                                )
                            }
                        </Stack.Navigator>
                    </NavigationContainer>
                )
            }
        </CredentialsContext.Consumer>

    )
}

export default RootStack;