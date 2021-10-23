import * as React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text } from 'react-native';


import * as constants from '../constants/constants';


export default function HomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={constants.backgroundImage} ></ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    }

})