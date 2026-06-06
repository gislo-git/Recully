import { SplashScreen, Stack } from "expo-router";
import "@/global.css"
import {useFonts} from "expo-font"
import { useEffect } from "react";

export default function RootLayout() {
    const [FontsLoaded] = useFonts({
        'san-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'san-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'san-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'san-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'san-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'san-light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    })
    useEffect(()=>{
        if(FontsLoaded){
            SplashScreen.hideAsync()
        }
    },[FontsLoaded])
    if (!FontsLoaded) return null;
  return <Stack screenOptions={{ headerShown: false}} />;
}


