import React, { createContext, useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'

const FavoriteContext = createContext()

const FavoriteProvider = ({ children }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([])

  const addFavoritePokemon = async (pokemon) => {
    const newFavorites = [...favoritePokemons, pokemon]
    setFavoritePokemons(newFavorites)
    await SecureStore.setItemAsync('favoritePokemons', JSON.stringify(newFavorites))
  }

  const deleteFavoritePokemon = async (pokemonId) => {
    const newFavorites = favoritePokemons.filter(pokemon => pokemon.id !== pokemonId)
    setFavoritePokemons(newFavorites)
    await SecureStore.setItemAsync('favoritePokemons', JSON.stringify(newFavorites))
  }

  const loadFavorites = async () => {
    const favorites = await SecureStore.getItemAsync('favoritePokemons')
    if (favorites) {
      setFavoritePokemons(JSON.parse(favorites))
    }
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  return (
    <FavoriteContext.Provider value={{ favoritePokemons, addFavoritePokemon, deleteFavoritePokemon }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export { FavoriteContext, FavoriteProvider }
