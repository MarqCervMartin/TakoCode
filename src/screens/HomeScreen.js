import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Promo from '../components/Promo'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Promo/>
            <Promo/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen
