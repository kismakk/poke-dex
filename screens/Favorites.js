import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.small
  }
})

export default Favorites