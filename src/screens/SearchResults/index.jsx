import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Post from '@/components/Post';
import feed from '@/assets/data/feed'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchResultsScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id}
        style={styles.post}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32
  },
  post: {
    paddingHorizontal: 20
  }
})

export default SearchResultsScreen