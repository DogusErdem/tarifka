import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import style from './MealsCard.style';
const MealsCard = ({meal,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={style.container}>
        <ImageBackground style={style.image} source={{uri: meal.strMealThumb}}/>
          <Text style={style.title}>{meal.strMeal}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
