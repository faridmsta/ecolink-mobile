import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { setBackgroundColorAsync } from 'expo-system-ui';
const RootDirector = () => {
    return (
        
        <Tabs
            screenOptions={{
                tabBarLabel: () => null, 
                tabBarStyle: {
                    position: 'absolute',
                    margin: 15,
                    height:60,
                    borderRadius:10
                },
                tabBarItemStyle:{
                    top:'20%',
                    // transform: [{ translateY: -20 }],
                }
            }}

        >
            <Tabs.Screen name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <Octicons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="comunity"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <Octicons name="people" size={24} color={color} />,
                    
                }}
            />
            <Tabs.Screen
                name="camera"

                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <Feather name="camera" size={24} color={color} />,
                    
                }}
            />

            <Tabs.Screen name="map"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =><FontAwesome5 name="map" size={24} color={color} />,
                    
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => <Octicons name="person" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}

export default RootDirector