import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'

const GuestRow = props => {
  const { type, caption } = props
  const [guest, setGuest] = useState(0)

  return (
    <View style={{...styles.guestRow, ...props.style}}>
      <View style={styles.descriptor}>
        <Text style={styles.person}>{type}</Text>
        {caption?.length &&
          <Text style={styles.caption}>{caption}</Text>
        }
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.action} onPress={() => setGuest(Math.max(0, guest - 1))}>
          <AntDesign name="minus" color="gray" />
        </Pressable>
        <Text style={styles.count}>{guest}</Text>
        <Pressable style={styles.action} onPress={() => setGuest(guest + 1)}>
          <AntDesign name="plus" color="gray" />
        </Pressable>
      </View>
    </View>
  )
}

export default GuestRow