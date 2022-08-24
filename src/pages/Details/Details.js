import React from "react";
import {Text,View, Linking} from 'react-native'
import useFetch from "../../hook/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { FlatList } from "react-native-gesture-handler";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
const Details = ({route}) => {

    const {id} = route.params
    const {loading,error,data,canWatch} = useFetch(`${Config.API_URL_DETAILS}${id}`)

    const renderDetails = ({item}) => (<DetailsCard detail={item} link={item.strYoutube}/>)

    


    return(
            <FlatList
            keyExtractor={(item)=> item.idMeal}
            data={data.meals}
            renderItem={renderDetails}
            />
    )
}
export default Details