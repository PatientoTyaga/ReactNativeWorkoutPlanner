import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className='items-center justify-center gap'>
            <Image 
                source = {icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />


            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name = "home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.home}
                            color = {color}
                            name = "Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color = {color}
                            name = "Profile"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "today"
                options={{
                    title: 'Today',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.todaysworkout}
                            color = {color}
                            name = "Today"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "completed"
                options={{
                    title: 'Completed',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.completed}
                            color = {color}
                            name = "Completed"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "custom"
                options={{
                    title: 'Custom',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.custom}
                            color = {color}
                            name = "Custom"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "randomize"
                options={{
                    title: 'Randomize',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={icons.randomize}
                            color = {color}
                            name = "Randomize"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout