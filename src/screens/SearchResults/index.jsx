import React from 'react'
import { FlatList } from 'react-native'
import Post from '@/components/Post';
import feed from '@/assets/data/feed'

const SearchResultsScreen = props => {
  console.log(props.style)
  return (
    <FlatList
      data={feed}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={item => item.id}
      style={props.style}
    />
  )
}

export default SearchResultsScreen