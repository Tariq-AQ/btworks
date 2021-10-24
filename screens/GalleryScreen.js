import * as React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { runOnJS } from 'react-native-reanimated';

import * as gallery from '../assets/gallery/index'
import * as constants from '../constants/constants'
import HorizontalSpeparator from '../components/HorizontalSpeparator';


export default function GalleryScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} scrollsToTop={true} showsVerticalScrollIndicator={false} >

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} bounces={true} style={styles.section}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Decking</Text>
                </View>
                <Image style={styles.image} source={gallery.deck1} />
                <Image style={styles.image} source={gallery.deck2} />
                <Image style={styles.image} source={gallery.deck2} />
                <Image style={styles.image} source={gallery.deck2} />
            </ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} bounces={true} style={styles.section}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Patio</Text>
                </View>
                <Image style={styles.image} source={gallery.deck1} />
                <Image style={styles.image} source={gallery.deck2} />
                <Image style={styles.image} source={gallery.deck2} />
                <Image style={styles.image} source={gallery.deck2} />
            </ScrollView>

            {/* <View style={{ borderBottomWidth: 1, borderBottomColor: constants.myColors.gray, width: '94%', alignSelf: 'center' }} /> */}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    section: {
        marginVertical: 10,
        // marginHorizontal: 10,
        backgroundColor: 'white',


    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: constants.myColors.navyDark,
        width: 60,
    }
})