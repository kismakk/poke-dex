import React from 'react'
import { Appbar } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements';
import Title from './Title';

const Header = ({ navigation, route, options, back, backgroundColor }) => {
  const title = getHeaderTitle(options, route.name)

  return (
    <Appbar.Header style={{ backgroundColor: backgroundColor }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={<Title title={title} />} />
      {back ? null : <Appbar.Action icon='cog' onPress={() => { navigation.navigate('Settings') }} />}
    </Appbar.Header>
  )
}

export default Header