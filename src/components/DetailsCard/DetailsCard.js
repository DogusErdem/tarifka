import React from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView,Linking} from 'react-native';
import style from './DetailsCard.style';

const DetailsCard = ({detail, link}) => {

    const handleSelect = async () => {
        const supported = await Linking.canOpenURL(link)
        if(supported)
        await Linking.openURL(link)
    }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.image_conteiner}>
        <Image style={style.image} source={{uri: detail.strMealThumb}} />
      </View>
      <View style={style.desc_conteiner}>
        <Text style={style.desc_text}>{detail.strInstructions}</Text>
      </View>
      
        <TouchableOpacity style={style.button} onPress={handleSelect}>
            <Text style={style.button_text}>Videolu Tarifi Göster</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
};
export default DetailsCard;
