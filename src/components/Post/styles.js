import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    gap: 4,
    width: '100%'
  }, 
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10
  },
  bedrooms: {
    color: 'gray',
    marginVertical: 10
  },
  description: {
    fontSize: 18,
    lineHeight: 26
  },
  prices: {
    gap: 8,
    fontSize: 18,
    flexDirection: 'row'
  },
  oldPrice: {
    color: 'gray',
    textDecorationLine: 'line-through'
  },
  newPrice: {
    fontWeight: 'bold'
  },
  totalPrice: {
    color: 'gray',
    marginTop: 10,
    textDecorationLine: 'underline'
  }
})