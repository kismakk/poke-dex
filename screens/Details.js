import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FONTWEIGHT, SIZES } from '../constants/theme'
import Stats from '../components/details/Stats'
import Types from '../components/details/Types'

const Details = ({ route, navigation }) => {
  const { pokemon, title } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{title}</Text>
        <Types pokemon={pokemon} />
      </View>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={{ width: 'auto', height: 250, marginVertical: 10 }}
        resizeMode='contain'
      />
      <Stats pokemon={pokemon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: SIZES.small,
    padding: SIZES.small
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: FONTWEIGHT.bold,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small
  },
})

export default Details