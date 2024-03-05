import React from 'react'
import { Button, Card } from 'react-native-paper'
import { COLORS } from '../../constants/theme'
import { styles } from './PokemonCard.styles'

const PokemonCard = ({ navigation, pokemon }) => {
  const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={`# ${pokemon.id.toString()}`}
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Cover src={pokemon.sprites.front_default} />
      <Card.Actions>
        <Button
          mode='contained-tonal'
          buttonColor={COLORS.light.secondary}
          onPress={() => navigation.navigate('Details', {
            pokemon: pokemon,
            title: title
          })}
        >
          See more
        </Button>
      </Card.Actions>
    </Card>
  )
}

export default PokemonCard