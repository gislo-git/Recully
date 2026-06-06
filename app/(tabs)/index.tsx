import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
    return (
        <SafeAreaView className="flex-1  bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/Onbording" className='mt-4 rounded  text-white p-4 bg-primary'>Onbording</Link>
        </SafeAreaView>
    );
}