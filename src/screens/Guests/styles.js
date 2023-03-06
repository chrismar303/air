import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rows: {
    gap: 16
  },
  row: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
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