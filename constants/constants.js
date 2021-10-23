import { BackgroundImage } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const phoneNumber = '07397829976';
export const email = 'tariq_esa90@yahoo.com';
export const whatsapp = 'whatsapp://send?text=Hi, could you please let me know of your earliest availabilty?&phone=' + '+447397829976';
export const backgroundImage = require('../assets/cardBackground.jpg');


export const myColors = {
    themeColor: '#fcd703',
    themBackground: '#fff7c6',

}



export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
    },
};