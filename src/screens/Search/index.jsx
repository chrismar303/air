import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import SearchEntry from './SearchEntry'
import search from '@/assets/data/search'
import styles from './styles'

const SearchScreen = props => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        style={styles.input}
        placeholder="Where are you going?"
        onChangeText={setSearchText}
      />
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Guests')}>
            <SearchEntry entry={item} style={styles.row} />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default SearchScreen