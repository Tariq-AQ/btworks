import * as React from 'react';
import { Button, StyleSheet, View, ImageBackground, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import * as constants from '../constants/constants';
import HorizontalSpeparator from '../components/HorizontalSpeparator';
import OurServices from './OurServices';

export default function HomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={constants.backgroundImage} >
                <ScrollView>
                    <View style={styles.textElement}>

                        <Image style={styles.squareLogo} source={constants.squareLogo} />
                        <Text style={styles.mainHeader}>Welcome to B&T Builders!</Text>

                        <Text style={styles.p1}>B&T Builders will help you find
                            the best services and builders
                            around you at competitive prices. Here you
                            can check the availablity of more than 500
                            builders.</Text>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.btnText}>Check Our Services</Text>
                        </TouchableOpacity>
                        <HorizontalSpeparator />

                        <Image style={styles.troll} source={constants.trollWorkers} />
                        <Text style={styles.pHeader}>Hire with confidence!</Text>
                        <Text style={styles.p1}>B&T Builders lets you hire builders with confidence
                            by connecting you with qualified and experienced builders. You can visit gallery to see the quality work our builders have done </Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
                            <Text style={styles.btnText}>Visit Gallery</Text>
                        </TouchableOpacity>
                        <HorizontalSpeparator />

                        <Image style={styles.van} source={constants.van} />

                        <Text style={styles.pHeader}>Onsite Quotes</Text>
                        <Text style={styles.p1}>If you're unsure of the type of service you need, let us know and one of our builders will help you pick the right service and material on site for free. </Text>


                        <View style={styles.bottomIcons}>
                            <TouchableOpacity onPress={() => { Linking.openURL(`tel:${constants.phoneNumber}`); }}>
                                <Icon name='phone' size={40} color={constants.myColors.navyDark} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL(constants.whatsapp); }}>
                                <Icon name='whatsapp' size={40} color={constants.myColors.navyDark} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL(`mailto:${constants.email}`); }}>
                                <Icon name='email' size={40} color={constants.myColors.navyDark} />
                            </TouchableOpacity>
                        </View>
                        <HorizontalSpeparator />
                        <View style={{ marginTop: 10, marginBottom: 5 }}>
                            <Text style={{ color: constants.myColors.gray }} >B&T  |  UK  |  Yorkshire  |  2021</Text>
                        </View>
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
        color: constants.myColors.navyDark,
    },
    troll: {
        width: '90%',
        height: 220,
        opacity: 1,
        marginVertical: 20,

    },
    mainHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30,
        color: constants.myColors.navyDark,
    },
    squareLogo: {
        width: '90%',
        height: 200,
        opacity: 1,
        marginBottom: -20,
    },
    van: {
        width: '80%',
        height: 150,
        marginBottom: 20,
        marginTop: 40,
    },
    brush: {
        width: 200,
        height: 40,
    },
    button: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants.myColors.navyDark,
        width: 200,
        height: 40,
        borderRadius: 0,
        marginBottom: 50,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android

    },
    btnText: {
        fontWeight: 'bold',
        color: constants.myColors.gray,
    },
    bottomIcons: {
        flexDirection: 'row',
        marginVertical: 20,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})