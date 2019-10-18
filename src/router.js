import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Dashboard } from './components/dashboard';
// import { createStackNavigator } from 'react-navigation-stack';
import { Profile } from './components/profile';
import React, { Component } from 'react';


const TabNavigator = createBottomTabNavigator(
    {
        Dashboard: { screen: Dashboard },
        Profile: { screen: Profile },
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                title: "NineMiles",
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = Ionicons;
                    let iconName;
                    if (routeName === 'Dashboard') {
                        iconName = `ios-home`;
                    } else if (routeName === 'Profile') {
                        iconName = `ios-contact`;
                    }
                    return <IconComponent name={iconName} size={25} color={tintColor} />;
                },
            }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        },
    }
);


const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;