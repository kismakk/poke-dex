import React from 'react';
import { View, Text, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from './FavoritePokemon.styles';

const FavoritePokemon = ({ pokemon, onDelete }) => {
  const handleDelete = async () => {
    onDelete(pokemon.id)
  }

  return (
    <View style={styles.favorite_container}>
      <View style={styles.pokemon}>
        <Image source={{ uri: pokemon.imageUrl }} style={styles.pokemon_image} resizeMode='cover' />
        <Text style={styles.name} >{pokemon.title}</Text>
      </View>
      <IconButton icon='delete' size={28} onPress={handleDelete} />
    </View>
  )
}

export default FavoritePokemon