import {Tabs} from "expo-router";
import {Image} from  "react-native"
import {tabs} from "@/constant/data";
import { View } from "react-native";
import clsx from 'clsx'
import {colors,components} from '@/constant/theme'
import { useSafeAreaInsets } from "react-native-safe-area-context";


const tabBar = components.tabBar
const TabLayout =() => {
        const insets = useSafeAreaInsets()
        const Tabicon = ({focused , icon} :TabIconProps)=>{
                return (
                    <View className={'tabs-icon'}>
                            <View className = {clsx('tab-pill', focused && 'tabs-active')}>
                                    <Image  source = {icon}
                                    resizeMode="contain"
                                    className ="tabs-glyph"
                                    />

                            </View>

                    </View>
        )
        }

        return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
                position:'absolute',
                bottom:Math.max(insets.bottom,tabBar.horizontalInset),
                height:tabBar.height,
                marginHorizontal:tabBar.horizontalInset,
                borderRadius:tabBar.radius,
                backgroundColor:colors.primary,
                borderTopWidth:0,
                elevation:0
            },
            tabBarItemStyle:{
                paddingVertical:tabBar.height / 2 - tabBar.iconFrame /1.6
            },
            tabBarIconStyle:{
                width: tabBar.iconFrame,
                height:tabBar.iconFrame,
                alignItems:'center'
            }

        }}>

                {tabs.map((tab) => (

                        <Tabs.Screen
                            key={tab.name}
                            name={tab.name}
                            options={{
                                    title: tab.title,
                                    tabBarIcon: ({focused}) =>(
                                        <Tabicon focused={focused} icon={tab.icon} />
                                    )
                            }}


                        />


                    )
                )}


        </Tabs>
        )
}
export  default  TabLayout