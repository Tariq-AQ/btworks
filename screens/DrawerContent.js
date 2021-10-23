import React from "react";
import { View, StyleSheet, Image, Linking, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";



export function DrawerContent(props) {


    const focusedRoute = props.state.index;
    return (

        <View style={{ flex: 1 }}>

            <ImageBackground source={require('../assets/background.jpg')} style={styles.artImage2}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Your Contents</Text>

                    <DrawerContentScrollView {...props}>
                        <View style={styles.drawerContent}>
                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: 'row', paddingBottom: 10, width: '100%', borderBottomColor: '#c9c9c9', borderBottomWidth: 1, marginTop: 15, alignItems: 'center' }} >
                                    <Avatar.Image style={{ marginLeft: 15, backgroundColor: 'white' }} source={require('../assets/logo.png')} size={50} />
                                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                        <Title style={{ color: '#fcd703', fontWeight: 'bold' }}>B&T</Title>
                                        <Title style={{ marginLeft: 5 }}>Plasterworks</Title>
                                    </View>
                                </View>

                                <View style={styles.row} >

                                </View>

                            </View>

                            <Drawer.Section style={styles.drawerContent}>


                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="home"
                                        color={focusedRoute === 0 ? '#fcd703' : color}
                                        size={size} />
                                )}
                                    label="Home"
                                    onPress={() => { props.navigation.navigate('Home') }}
                                />

                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="toolbox"
                                        color={focusedRoute === 1 ? '#fcd703' : color}
                                        size={size} />
                                )}
                                    label="Our Services"
                                    onPress={() => { props.navigation.navigate('Our Services') }}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="image-album"
                                        color={focusedRoute === 2 ? '#fcd703' : color}
                                        size={size} />
                                )}
                                    label="Gallery"
                                    onPress={() => { props.navigation.navigate('Gallery') }}
                                />

                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="currency-gbp"
                                        color={focusedRoute === 3 ? '#fcd703' : color}
                                        size={size} />
                                )}
                                    label="Prices"
                                    onPress={() => { props.navigation.navigate('Prices') }}
                                />


                            </Drawer.Section>



                        </View>
                    </DrawerContentScrollView>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <TouchableOpacity onPress={() => { return; }}>
                            <Icon name='phone' size={30} color={'black'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { return; }}>
                            <Icon name='whatsapp' size={30} color={'black'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { return; }}>
                            <Icon name='email' size={30} color={'black'} />
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