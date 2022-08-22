import React from "react";
import { View,Image,Text,TouchableWithoutFeedback} from 'react-native'
import style from './CategoriesCard.style'

const CategoriesCard = ({category,onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
    <View style={{backgroundColor:'#FF6900'}}> 
        <View style={style.container}>
            <Image source={{uri:category.strCategoryThumb}} style={style.image}/>
            <Text style={style.title}>{category.strCategory}</Text>
        </View>
    </View>  
        </TouchableWithoutFeedback>
    )
}
export default CategoriesCard;