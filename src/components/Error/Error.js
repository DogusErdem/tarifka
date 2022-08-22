import React from "react";
import LottieView from 'lottie-react-native'

const Error = () => {
    return(
        <LottieView style={{backgroundColor:'white'}} source={require('../../assets/error.json')}/>
    )
}

export default Error