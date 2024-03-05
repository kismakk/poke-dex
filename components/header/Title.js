import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Title.styles'
const logo = require('../../assets/images/pokemon-icon.png')

const Title = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Title