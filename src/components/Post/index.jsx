import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

const Post = props => {
  const { post } = props
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.bedrooms}>{ post.bed } bed * {post.bedroom} bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}>  ${post.newPrice} </Text> 
        / night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} Total</Text>
    </View>
  )
}

export default Post
