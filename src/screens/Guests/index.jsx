import React from 'react'
import { View } from 'react-native'
import GuestRow from './GuestRow'
import styles from './styles'

const GuestsScreen = props => {
  return (
    <View>
      <View style={styles.rows}>
        <GuestRow type="Adults" caption="Ages 13 or above" style={styles.row}/>
        <GuestRow type="Children" caption="Ages 2 - 12" style={styles.row}/>
        <GuestRow type="Infants" style={styles.row}/>
      </View>
    </View>
  )
}

export default GuestsScreen