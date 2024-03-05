import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { COLORS, SIZES } from '../../constants/theme'
import { styles } from './Searcbar.styles'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <Searchbar
      placeholder='Search for Pokémons...'
      onChangeText={setSearchInput}
      value={searchInput}
      style={styles.searchbar}
    />
  )
}

export default SearchBar