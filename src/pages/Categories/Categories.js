import React from "react";
import { FlatList } from 'react-native'
import useFetch from '../../hook/useFetch'
import Config from "react-native-config";
import CategoriesCard from "../../components/CatagoriesCard";
import Error from '../../components/Error'
import Loading from '../../components/Loading'
const Categories = ({navigation}) => {

    const handleCategorySelect = (category) => {
        navigation.navigate('MealsScreen',{category})
    }

    const {loading,data,error} = useFetch(Config.API_URL_CATEGORIES)
    const renderCategories = ({item}) => <CategoriesCard category={item} onSelect={()=> handleCategorySelect(item.strCategory)}/>
    if(loading){
        return <Loading/>;
    }

    if(error){
        return <Error/>;
    }
    
    return(
        <FlatList
        keyExtractor={item => item.idCategory}
        data={data.categories}
        renderItem={renderCategories}
        />
    )
}
export default Categories;