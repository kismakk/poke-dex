import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/search/SearchBar'
import { COLORS, SIZES } from '../constants/theme'
import PokemonCard from '../components/home/PokemonCard'
import { ActivityIndicator } from 'react-native-paper'

const Search = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('')
  const [pokemonArray, setPokemonArray] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchAllPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500')
      const data = await response.json()
      setPokemonArray(data.results)
    }
    fetchAllPokemons()
  }, []);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setFilteredPokemons((prevDetails) => [...prevDetails, data])
    } catch (error) {
      console.error(`Error fetching details for Pokemon with url: ${url}`, error)
    }
  };

  async function onSubmit() {
    setIsLoading(true)
    if (searchInput.length < 2) {
      setIsLoading(false)
      return
    }
    try {
      const filtered = pokemonArray.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase()) && !pokemon.name.includes('-')
      );

      setFilteredPokemons([]);

      try {
        filtered.forEach((pokemon) => {
          fetchPokemonDetails(pokemon.url)
        });
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error("Error fetching or filtering Pokémon data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        autoFocus={true}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSubmitEditing={onSubmit}
      />
      {isLoading ?
        <View style={styles.loading}>
          <ActivityIndicator color={COLORS.light.primary} />
        </View> :
        <FlatList
          data={filteredPokemons}
          renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
          keyExtractor={item => item?.id.toString()}
        />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.small,
    gap: SIZES.small
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Search