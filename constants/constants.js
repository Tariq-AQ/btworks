import { BackgroundImage } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';


//Contact Details

export const phoneNumber = '07397829976';
export const email = 'tariq_esa90@yahoo.com';
export const whatsapp = 'whatsapp://send?text=Hi, could you please let me know of your earliest availabilty?&phone=' + '+447397829976';

//Images

export const backgroundImage = require('../assets/cardBackground.jpg');
export const workers = require('../assets/workers.png');
export const legos = require('../assets/legos.jpg');
export const trollWorkers = require('../assets/trollWorkers.jpg');

//Colors

export const myColors = {
    themeColor: '#fcd703',
    themBackground: '#fff7c6',


}


//MyTheme

export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff'
    },
};