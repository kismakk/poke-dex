import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { FONTWEIGHT, SIZES } from '../constants/theme'
import { IconButton } from 'react-native-paper'
import { FavoriteContext } from '../components/context/favoriteContext'

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
        <PokemonFavorite key={pokemon.id} pokemon={pokemon} onDelete={handleDelete} />
      ))}
    </ScrollView>
  )
}

const PokemonFavorite = ({ pokemon, onDelete }) => {
  const handleDelete = async () => {
    onDelete(pokemon.id)
  }

  return (
    <View style={styles.favorite_container}>
      <View style={styles.pokemon}>
        <Image source={{ uri: pokemon.imageUrl }} style={{ width: 100, height: 100, marginRight: SIZES.small }} resizeMode='cover' />
        <Text style={styles.name} >{pokemon.title}</Text>
      </View>
      <IconButton icon='delete' size={28} onPress={handleDelete} />
    </View>
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
  favorite_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pokemon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.normal
  }
})

export default Favorites