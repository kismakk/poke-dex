import { View, Text, StyleSheet, FlatList, ScrollView, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTWEIGHT, SIZES } from '../constants/theme'
import SearchBar from '../components/search/SearchBar'
import PokemonCard from '../components/home/PokemonCard'
import usePokemon from '../hooks/usePokemon'
import { ActivityIndicator, Button, IconButton } from 'react-native-paper'

const Home = ({ navigation }) => {
  const [offset, setOffset] = useState(0)
  const { pokemonArray, dataFetched } = usePokemon(offset)

  if (!dataFetched) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={COLORS.light.primary} />
      </View>
    )
  }

  function handlePrevious() {
    setOffset(prevOffset => Math.max(0, prevOffset - 10))
  }

  function handleNext() {
    setOffset(prevOffset => prevOffset + 10)
  }

  function handleSearchButtonPressed() {
    navigation.navigate('Search', {
      navigate: navigation.navigate
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titles}>Welcome!</Text>
      <Button
        mode='contained-tonal'
        buttonColor={COLORS.light.secondary}
        icon='magnify'
        onPress={handleSearchButtonPressed}
      >
        Search for Pokémons
      </Button>
      <View style={styles.title_container}>
        <Text style={styles.titles}>All Pokémons</Text>
        <View style={styles.page_buttons}>
          <IconButton icon='chevron-left' size={28} onPress={handlePrevious} disabled={offset === 0} />
          <IconButton icon='chevron-right' size={28} onPress={handleNext} />
        </View>
      </View>
      <FlatList
        data={pokemonArray}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
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
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small
  },
  page_buttons: {
    flexDirection: 'row',
  },
})

export default Home