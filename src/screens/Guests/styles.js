import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  guestContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  row: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  searchButton: {
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#f15454'
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18
  },
  guestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20
  },
  descriptor: {
    justifyContent: 'center'
  },
  person: {
    fontSize: 18,
    fontWeight: 'bold'
  }, 
  caption: {
    color: 'gray',
    fontSize: 12
  },
  actions: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  action: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: 'lightgray'
  },
  count: {
    fontSize: 18
  }
})