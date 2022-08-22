import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    maxWidth: deviceSize.width,
    height: deviceSize.height/4,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign:'center'
},
});
