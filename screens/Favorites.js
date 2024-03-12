import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FONTWEIGHT, SIZES } from '../constants/theme'
import { Button, Card, IconButton } from 'react-native-paper'
import * as SecureStore from 'expo-secure-store'

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favorites = await SecureStore.getItemAsync('favoritePokemons');
      if (favorites) {
        const parsedFavorites = JSON.parse(favorites);
        setFavoritePokemons(parsedFavorites);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const handleDelete = async (pokemonId) => {
    try {
      const updatedFavorites = favoritePokemons.filter(
        (pokemon) => pokemon.id !== pokemonId
      );
      await SecureStore.setItemAsync(
        'favoritePokemons',
        JSON.stringify(updatedFavorites)
      );
      setFavoritePokemons(updatedFavorites)
    } catch (error) {
      console.error('Error deleting favorite:', error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      {favoritePokemons.map((pokemon) => (
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