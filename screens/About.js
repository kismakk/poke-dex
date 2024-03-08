import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { FONTWEIGHT, SIZES } from '../constants/theme'
import { IconButton } from 'react-native-paper'
import { Link } from '@react-navigation/native'

const gitHubUrl = 'https://github.com/kismakk/poke-dex'

const Settings = () => {

  const handleButtonClick = () => {
    Linking.canOpenURL(gitHubUrl)
      .then(() => {
        Linking.openURL(gitHubUrl)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Pokedéx</Text>
        <Text style={styles.author}>Developed by: Sami Köngäs</Text>
      </View>
      <Text style={styles.content}>
        This app is a hobby project developed for a university course on mobile app development with React Native
        and Expo. For the source code, contributions, and bug reports, click the button down below.
      </Text>
      <IconButton icon='github' size={32} onPress={handleButtonClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginBottom: SIZES.small
  },
  title: {
    fontSize: SIZES.xlarge,
    fontWeight: FONTWEIGHT.bold,
  },
  author: {
    fontSize: SIZES.small,
    fontWeight: FONTWEIGHT.light,
    fontVariant: 'italic'
  },
  content: {
    textAlign: 'center',
    marginHorizontal: SIZES.small
  }
})

export default Settings