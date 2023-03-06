import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import GuestRow from './GuestRow'
import styles from './styles'

const GuestsScreen = props => {
  const navigation = useNavigation()
  return (
    <View style={styles.guestContainer}>
      <View>
        <GuestRow type="Adults" caption="Ages 13 or above" style={styles.row}/>
        <GuestRow type="Children" caption="Ages 2 - 12" style={styles.row}/>
        <GuestRow type="Infants" style={styles.row}/>
      </View>
      <Pressable style={styles.searchButton} onPress={() => navigation.navigate('SearchResults')}>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>
    </View>
  )
}

export default GuestsScreen