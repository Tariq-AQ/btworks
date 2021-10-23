import * as React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text, ScrollView, Image } from 'react-native';


import * as constants from '../constants/constants';


export default function HomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={constants.backgroundImage} >
                <ScrollView>
                    <View style={styles.textElement}>
                        <Text style={styles.pHeader}>Welcome to B&T Builders!</Text>

                        <Text style={styles.p1}>B&T Builders will let you find
                            the best services
                            around you at competitive prices.Here you
                            can check availablity of our range of more than 500
                            builders, get a quote, and watch the process of your
                            home builder in real time.</Text>
                    </View>
                </ScrollView>
            </ImageBackground>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    textElement: {
        alignItems: 'center',
        marginVertical: 20,
    },
    p1: {
        marginHorizontal: 20,
        lineHeight: 22,
        textAlign: 'center'
    },
    pHeader: {
        fontWeight: 'bold',
        marginVertical: 10,
    },
    troll: {
        width: 200,
        height: 300,
        opacity: 1,
    }

})