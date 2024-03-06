import { StyleSheet, Text, View } from 'react-native'
import { Chip } from 'react-native-paper'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

const typeColors = {
  "normal": "#A8A77A",
  "fighting": "#C22E28",
  "flying": "#A98FF3",
  "poison": "#A33EA1",
  "ground": "#E2BF65",
  "rock": "#B6A136",
  "bug": "#A6B91A",
  "ghost": "#735797",
  "steel": "#B7B7CE",
  "fire": "#EE8130",
  "water": "#6390F0",
  "grass": "#7AC74C",
  "electric": "#F7D02C",
  "psychic": "#F95587",
  "ice": "#96D9D6",
  "dragon": "#6F35FC",
  "dark": "#705746",
  "fairy": "#D685AD"
}

const Types = ({ pokemon }) => {
  const { types } = pokemon

  const typeArray = types.map((type) => ({
    name: type.type.name,
  }))

  console.log(typeArray)
  return (
    <View style={styles.chip_container}>
      {typeArray?.map((type) => {
        return (
          <Chip
            key={type}
            style={{ backgroundColor: typeColors[type.name] }}
          >
            {type.name.toUpperCase()}
          </Chip>
        )
      })}
    </View>
  )
}

export default Types

const styles = StyleSheet.create({
  chip_container: {
    flexDirection: 'row',
    gap: SIZES.small
  },
})