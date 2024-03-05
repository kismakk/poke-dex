import { StyleSheet, Text, View } from 'react-native'
import { Chip } from 'react-native-paper'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

const Types = ({ pokemon }) => {
  const { types } = pokemon

  const typeArray = types.map((type) => ({
    name: type.type.name,
  }))
  return (
    <View style={styles.chip_container}>
      {typeArray?.map((type) => {
        return (
          <Chip style={styles.chip}>{type.name.toUpperCase()}</Chip>
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
  chip: {
    backgroundColor: COLORS.light.secondary
  }
})