import { BackgroundImage } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';


//Contact Details

export const phoneNumber = '07873881124';
export const email = 'bandtplasterwork"gmail.com';
export const whatsapp = 'whatsapp://send?text=Hi, could you please let me know of your earliest availabilty?&phone=' + '+447873881124';

//Images

export const backgroundImage = require('../assets/cardBackground.jpg');
export const workers = require('../assets/workers.png');
export const legos = require('../assets/legos.jpg');
export const trollWorkers = require('../assets/trollWorkers.jpg');
export const squareLogo = require('../assets/squareLogo.png');
export const pngLogo = require('../assets/pngLogo.png');
export const logo = require('../assets/logo.png');
export const van = require('../assets/van.png');
export const brush = require('../assets/btnBackBrush.png');

//Colors

export const myColors = {
    themeColor: '#f8df25',
    themBackground: '#fff7c6',
    navyDark: '#2a5b84',
    navyLight: '#aac4d1',
    gray: '#dfdfdf',


}


//MyTheme

export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
        border: myColors.themeColor,
    },
};