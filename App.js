import * as React from 'react';
import { Button, Text, SafeAreaView, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import OurServices from './screens/OurServices';
import GalleryScreen from './screens/GalleryScreen';
import Prices from './screens/Prices';






const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      {/* <Avatar.Image source={require('./assets/icon.png')}></Avatar.Image> */}

      <Drawer.Navigator initialRouteName="Home" >


        <Drawer.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }} />

        <Drawer.Screen name="Our Services" component={OurServices} options={{
          title: 'Our Services',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="toolbox"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }} />

        <Drawer.Screen name="Gallery" component={GalleryScreen}
          options={{
            title: 'Gallery',
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="image-album"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />

        <Drawer.Screen name="Prices" component={Prices}
          options={{
            title: 'Prices',
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="currency-gbp"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}