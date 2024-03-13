import React, { memo, useState, useEffect, useContext } from 'react'
import { Button, Card, IconButton } from 'react-native-paper'
import * as SecureStore from 'expo-secure-store'
import { COLORS } from '../../constants/theme'
import { styles } from './PokemonCard.styles'
import { FavoriteContext } from '../context/favoriteContext'

const PokemonCard = ({ navigation, pokemon }) => {
  const { favoritePokemons, addFavoritePokemon, deleteFavoritePokemon } = useContext(FavoriteContext)
  const isFavorite = favoritePokemons.some(favPokemon => favPokemon.id === pokemon.id)
  const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  const toggleFavorite = (pokemon) => {
    if (isFavorite) {
      deleteFavoritePokemon(pokemon.id);
    } else {
      addFavoritePokemon(pokemon);
    }
  }

  if (!pokemon) {
    return null
  }

  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={`# ${pokemon.id.toString()}`}
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Cover src={pokemon.sprites.front_default} resizeMode='contain' />
      <Card.Actions>
        <IconButton
          icon={isFavorite ? 'heart' : 'heart-outline'}
          size={28}
          onPress={() => toggleFavorite({
            id: pokemon.id,
            title: title,
            imageUrl: pokemon.sprites.front_default,
          })}
        />
        <Button
          mode='contained-tonal'
          buttonColor={COLORS.light.secondary}
          onPress={() => navigation.navigate('Details', {
            pokemon: pokemon,
            title: title
          })}
        >
          See details
        </Button>
      </Card.Actions>
    </Card>
  )
}

export default memo(PokemonCard)