import { StyleSheet } from 'react-native';
import { SIZES, FONTWEIGHT } from '../../constants/theme';

export const styles = StyleSheet.create({
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
  },
  pokemon_image: {
    width: 100,
    height: 100,
    marginRight: SIZES.small
  }
})