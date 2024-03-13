import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { FONTWEIGHT, SIZES } from '../constants/theme'
import { FavoriteContext } from '../components/context/favoriteContext'
import FavoritePokemon from '../components/favorites/FavoritePokemon'

const Favorites = () => {
  const { favoritePokemons, deleteFavoritePokemon } = useContext(FavoriteContext)

  const handleDelete = async (pokemonId) => {
    try {
      deleteFavoritePokemon(pokemonId)
    } catch (error) {
      console.error('Error deleting favorite:', error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      {favoritePokemons.length === 0 ?
        <View style={styles.message_container}>
          <Text style={styles.message}>No favorites yet.</Text>
        </View> :
        favoritePokemons.map((pokemon) => (
          <FavoritePokemon key={pokemon.id} pokemon={pokemon} onDelete={handleDelete} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.small
  },
  message_container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.bold
  },
})

export default Favorites