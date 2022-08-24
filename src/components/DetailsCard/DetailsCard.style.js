import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
  },
  image_conteiner: {
    backgroundColor: 'red',
    flex: 1,
  },
  desc_text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
  },
  desc_conteiner: {
    margin: 10,
  },
  button:{
    backgroundColor:'#FF6900',
    margin:15,
    padding:15,
    borderRadius:10,
    alignItems:'center',
    marginTop:25
  },
  button_text:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
});
