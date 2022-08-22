import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        backgroundColor:'#FAD0C3',
        alignItems:'center',
        borderBottomLeftRadius:40,
        borderTopLeftRadius:40,
        borderBottomEndRadius:10,
        borderTopRightRadius:10,
        padding:5
    },
    image:{
        width:120,
        height:100,
        resizeMode:'contain',
        borderRadius:40
    },
    title:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold'
    }
})