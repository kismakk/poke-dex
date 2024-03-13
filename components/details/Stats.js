import { Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { ProgressBar } from 'react-native-paper'
import { styles } from './Stats.styles'

const Stats = ({ pokemon }) => {
  const { stats } = pokemon

  const statsArray = stats.map((stat) => ({
    name: stat.stat.name,
    baseStat: stat.base_stat
  }));

  const progressValue = (baseStat) => {
    let value = baseStat / 255
    return value
  }

  return (
    <>
      {statsArray?.map((stat) => {
        return (
          <View key={stat.name}>
            <View style={styles.stats_container}>
              <Text style={styles.stat_titles}>{stat.name.toUpperCase()}</Text>
              <Text>{stat.baseStat}</Text>
            </View>
            <ProgressBar progress={progressValue(stat.baseStat)} color={COLORS.light.accent} />
          </View>
        )
      })}
    </>
  )
}

export default Stats