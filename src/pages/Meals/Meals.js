import React from "react";
import { FlatList } from "react-native";
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import MealsCard from "../../components/MealsCard";
import useFetch from '../../hook/useFetch'
import Config from "react-native-config";

const Meals = ({navigation,route}) => {
    const {category} = route.params

    const {loading,error,data} = useFetch(`${Config.API_URL_MEALS}${category}`)

    const handleMealSelect = (id) =>{
        navigation.navigate('DetailsScreen',{id})
    }

    const renderMeals = ({item}) => <MealsCard meal={item} onSelect={(()=>handleMealSelect(item.idMeal))} />
   
    if(loading){
        return <Loading/>
    }
    
    if(error){
        return <Error/>
    }

    return(
        <FlatList
        keyExtractor={(item)=>item.idMeal}
        data={data.meals}
        renderItem={renderMeals}
        />
    )
}

export default Meals;