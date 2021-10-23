import React from "react";
import { View, StyleSheet, Image, Linking, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as constants from '../constants/constants';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";



export function DrawerContent(props) {

    const focusedRoute = props.state.index;
    return (

        <View style={{ flex: 1 }}>

            <ImageBackground source={require('../assets/background.jpg')} style={styles.artImage2}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <DrawerContentScrollView {...props}>
                        <View style={styles.drawerContent}>
                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: 'row', paddingBottom: 10, width: '100%', borderBottomColor: '#c9c9c9', borderBottomWidth: 1, marginTop: 15, alignItems: 'center' }} >
                                    <Avatar.Image style={{ marginLeft: 15, backgroundColor: 'white' }} source={constants.logo} size={50} />
                                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                        <Title style={{ color: constants.myColors.themeColor, fontWeight: 'bold' }}>B&T</Title>
                                        <Title style={{ marginLeft: 5, color: constants.myColors.navyDark }}>Builders</Title>
                                    </View>
                                </View>

                                <View style={styles.row} >

                                </View>

                            </View>

                            <Drawer.Section style={styles.drawerContent}>


                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="home"
                                        color={focusedRoute === 0 ? constants.myColors.themeColor : constants.myColors.navyDark}
                                        size={size} />
                                )}
                                    label="Home"
                                    onPress={() => { props.navigation.navigate('Home') }}
                                />

                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="toolbox"
                                        color={focusedRoute === 1 ? constants.myColors.themeColor : constants.myColors.navyDark}
                                        size={size} />
                                )}
                                    label="Services"
                                    onPress={() => { props.navigation.navigate('Services') }}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="image-album"
                                        color={focusedRoute === 2 ? constants.myColors.themeColor : constants.myColors.navyDark}
                                        size={size} />
                                )}
                                    label="Gallery"
                                    onPress={() => { props.navigation.navigate('Gallery') }}
                                />

                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="currency-gbp"
                                        color={focusedRoute === 3 ? constants.myColors.themeColor : constants.myColors.navyDark}
                                        size={size} />
                                )}
                                    label="Prices"
                                    onPress={() => { props.navigation.navigate('Prices') }}
                                />


                            </Drawer.Section>



                        </View>
                    </DrawerContentScrollView>


                    <View style={{ marginVertical: 10, borderBottomColor: '#ebebeb', borderBottomWidth: 1, width: '90%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', }} >Get in touch!</Text>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <TouchableOpacity onPress={() => { Linking.openURL(`tel:${constants.phoneNumber}`); }}>
                            <Icon name='phone' size={30} color={constants.myColors.navyDark} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL(constants.whatsapp); }}>
                            <Icon name='whatsapp' size={30} color={constants.myColors.navyDark} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL(`mailto:${constants.email}`); }}>
                            <Icon name='email' size={30} color={constants.myColors.navyDark} />
                        </TouchableOpacity>
                    </Drawer.Section>
                </View>
            </ImageBackground>

        </View>

    );
}

const styles = StyleSheet.create({
    artImage2: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
    },


    drawerContent: {
        flex: 1,
    },
    userInfoSection: {

    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,

    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,

    },
    bottomDrawerSection: {
        alignItems: 'center',
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '80%',
        marginBottom: 30,
        marginLeft: 40,


    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});