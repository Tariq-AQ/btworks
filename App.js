import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import OurServices from './screens/OurServices';
import GalleryScreen from './screens/GalleryScreen';
import Prices from './screens/Prices';
import { DrawerContent } from './screens/DrawerContent';


import * as constants from './constants/constants';



const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer
      theme={constants.MyTheme}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>

      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Our Services" component={OurServices} />
        <Drawer.Screen name="Gallery" component={GalleryScreen} />
        <Drawer.Screen name="Prices" component={Prices} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}