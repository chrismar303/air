import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import SearchEntry from './SearchEntry'
import search from '@/assets/data/search'
import styles from './styles'

const SearchScreen = props => {
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
        renderItem={({ item }) => <SearchEntry entry={item} style={styles.row} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default SearchScreen