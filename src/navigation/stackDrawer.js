import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Routes from './stackRoutes'
import Bottom from '../navigation/stackBottom'

const Drawer = createDrawerNavigator();


const stackDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Bottom} />
            <Drawer.Screen name="Perfil" component={Routes.Perfil} />
        </Drawer.Navigator>
    )
}

export default stackDrawer
