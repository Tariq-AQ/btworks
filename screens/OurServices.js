import * as React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text, ScrollView, Image } from 'react-native';

import * as gallery from '../assets/gallery/index'
import * as constants from '../constants/constants'

export default function OurServices({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Tiling</Text>

                </View>
                <Image style={styles.image} source={gallery.tiles} />
            </View>

            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Wall Kanaf</Text>

                </View>
                <Image style={styles.image} source={gallery.kanaf} />
            </View>

            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Patio</Text>

                </View>
                <Image style={styles.image} source={gallery.patio2} />
            </View>

            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Decking</Text>

                </View>
                <Image style={styles.image} source={gallery.deck1} />
            </View>
            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Plasterboard Installation</Text>

                </View>
                <Image style={styles.image} source={gallery.pb1} />
            </View>
            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Plastering</Text>

                </View>
                <Image style={styles.image} source={gallery.plastering} />
            </View>

            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Steps</Text>

                </View>
                <Image style={styles.image} source={gallery.steps} />
            </View>
            <View style={styles.section} >
                <View style={styles.text}>
                    <Text style={styles.title} >Fencing</Text>

                </View>
                <Image style={styles.image} source={gallery.fencing} />

            </View>



        </ScrollView>
    );
}


const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5,
        marginHorizontal: 2,
    },

    image: {
        width: '55%',
        height: 180,
        borderColor: constants.myColors.navyLight,
        borderWidth: 1,
        // shadowColor: 'rgba(0,0,0, .9)', // IOS
        // shadowOffset: { height: 1, width: 1 }, // IOS
        // shadowOpacity: 1, // IOS
        // shadowRadius: 1, //IOS
        // elevation: 2, // Android

    },
    text: {
        width: '30%',
        height: 180,
        paddingVertical: 5,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: constants.myColors.grayLight,
        borderBottomWidth: 1,
        marginVertical: 0,
        // backgroundColor: '#f0f0f0',
        // shadowColor: 'rgba(0,0,0, .9)', // IOS
        // shadowOffset: { height: 1, width: 1 }, // IOS
        // shadowOpacity: 1, // IOS
        // shadowRadius: 1, //IOS
        // elevation: 2, // Android

    },
    title: {

        fontSize: 20,
        marginBottom: 5,
        color: constants.myColors.navyDark,
    },
    p: {
        textAlign: 'center',
        color: '#727272',
        width: '95%',

    }


})