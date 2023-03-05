import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 56,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  searchButton: {
    top: 40,
    width: Dimensions.get('screen').width - 20,
    position: 'absolute',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles;