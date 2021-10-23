import React from 'react'
import { StyleSheet, View } from 'react-native'

import * as constants from '../constants/constants'

export default function HorizontalSpeparator() {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: constants.myColors.gray,
        width: '85%'
    }
})