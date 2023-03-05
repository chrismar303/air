import React from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const SearchEntry = props => {
  const { entry, style } = props 
  return (
    <View style={style}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={30} />
      </View>
      <Text style={styles.locationText}>{entry.description}</Text>
    </View>
  )
}

export default SearchEntry