import React, { memo, useState, useEffect } from 'react'
import { Button, Card, IconButton } from 'react-native-paper'
import * as SecureStore from 'expo-secure-store'
import { COLORS } from '../../constants/theme'
import { styles } from './PokemonCard.styles'

const PokemonCard = ({ navigation, pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const checkIsFavorite = async () => {
    try {
      const favorites = await SecureStore.getItemAsync('favoritePokemons')
      if (favorites) {
        const parsedFavorites = JSON.parse(favorites)
        const isAlreadyFavorite = parsedFavorites.some(
          (fav) => fav.id === pokemon.id
        );
        setIsFavorite(isAlreadyFavorite)
      }
    } catch (error) {
      console.error('Error checking favorites:', error)
    }
  };

  const toggleFavorite = async () => {
    try {
      let favorites = await SecureStore.getItemAsync('favoritePokemons')

      if (!favorites) {
        favorites = []
      } else {
        favorites = JSON.parse(favorites)
      }

      const isAlreadyFavorite = favorites.some((fav) => fav.id === pokemon.id)

      if (isAlreadyFavorite) {
        favorites = favorites.filter((fav) => fav.id !== pokemon.id)
      } else {
        favorites.push({
          id: pokemon.id,
          title: title,
          imageUrl: pokemon.sprites.front_default,
        });
      }

      await SecureStore.setItemAsync('favoritePokemons', JSON.stringify(favorites));
      setIsFavorite(!isAlreadyFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error)
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
          onPress={toggleFavorite}
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