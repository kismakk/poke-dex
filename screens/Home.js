import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTWEIGHT, SIZES } from '../constants/theme'
import SearchBar from '../components/search/SearchBar'
import PokemonCard from '../components/home/PokemonCard'
import usePokemon from '../hooks/usePokemon'
import { ActivityIndicator } from 'react-native-paper'

const Home = ({ navigation }) => {
  const { pokemonDetails, dataFetched } = usePokemon()
  const pokemonArray = Object.values(pokemonDetails).sort((a, b) => a.id - b.id)

  if (!dataFetched) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={COLORS.light.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Welcome!</Text>
      <SearchBar />
      <Text style={styles.titles}>All Pokémons</Text>
      <FlatList
        data={pokemonArray}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titles: {
    fontSize: SIZES.large,
    fontWeight: FONTWEIGHT.heavy,
    marginVertical: SIZES.medium
  },
  container: {
    flex: 1,
    marginHorizontal: SIZES.small
  }
})

export default Home