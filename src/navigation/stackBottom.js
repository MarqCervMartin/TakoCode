import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Routes from './stackRoutes';


const Tab = createMaterialBottomTabNavigator();

const stackBottom = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="Home" component={Routes.Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Menu" component={Routes.Menu} 
            options={{
                tabBarLabel: 'Menu',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="taco" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Orden" component={Routes.Orden} 
            options={{
                tabBarLabel: 'Orden',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="clipboard-check" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name="Puntos" component={Routes.Puntos} 
            options={{
                tabBarLabel: 'Descuentos',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="badge-account" color={color} size={26} />
                ),
              }}/>
        </Tab.Navigator>
    )
}

export default stackBottom
