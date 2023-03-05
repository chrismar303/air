import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from '@/screens/Home/styles.js'
import Fontisto from 'react-native-vector-icons/Fontisto'
const image = require('@/assets/images/israel.jpg')

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={image}
        style={styles.image}
        resizeMode="cover"
      >
        <Pressable 
          style={styles.searchButton}
          onPress={() => console.log('Where to next?')}
        >
          <Fontisto name="search" size={25} color={"#F15454"} />
          <Text style={styles.searchButtonText}>Where to next traveler!</Text>
        </Pressable>
        
        <Text style={styles.title}>Air: A Breath of Fresh Air</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.log('Explore Button Clicked')}
        >
          <Text style={styles.buttonText}>Your Story! Your Adventure!</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen