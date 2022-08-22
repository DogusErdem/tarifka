import React from "react";
import LottieView from 'lottie-react-native'

const Loading = () => {
    return(
        <LottieView style={{backgroundColor:'white'}} source={require('../../assets/loading.json')} autoPlay/>
    )
}

export default Loading