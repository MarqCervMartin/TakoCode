import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './src/navigation/stackDrawer'

export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
    
  );
}
