import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details/Details';
const Stack = createNativeStackNavigator();
const Route = () => {
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={'#FF6900'}/>
            <Stack.Navigator>
                <Stack.Screen name='CategoryScreen' component={Categories} options={{
                    title:'CATEGORİES',
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:25,fontWeight:'bold',color:'#FF6900'},
                    headerStyle:{backgroundColor:'white'}
                }}/>

            <Stack.Screen name='MealsScreen' component={Meals} options={{
                    title:'MEALS',
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:25,fontWeight:'bold',color:'#FF6900'},
                    headerStyle:{backgroundColor:'white'},
                    
                }}/>
                <Stack.Screen name='DetailsScreen' component={Details} options={{
                    title:'DETAİLS',
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:25,fontWeight:'bold',color:'#FF6900'},
                    headerStyle:{backgroundColor:'white'},
                    
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;