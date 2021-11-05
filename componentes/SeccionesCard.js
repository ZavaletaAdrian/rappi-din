import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from "react-native";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';

const SeccionesCard = (props) =>{
    const redirect = () =>{

    }
    return(
        <View style={styles.card}>
            <TouchableCmp onClick={redirect}>
                <View style={{height:'100%',width:'100%'}}>
                    <Image source={{uri: props.productInfo.img}} style={styles.image}/>
                    <Text style={styles.text}>{props.productInfo.name}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

export default SeccionesCard;

const styles= StyleSheet.create({
    card: {
        width: '95%',
        marginHorizontal:'2.5%',
        height:Dimensions.get('window').height * 0.25,
        borderRadius:15,
        overflow:'hidden',
        backgroundColor: '#AED9E0',
        marginBottom:15,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width:'100%',
        height:'70%',
        resizeMode:'contain',
        marginTop:10
    },
    text:{
        color: 'white',
        fontFamily:'roboto-bold',
        fontSize: 25,
        textAlign:'center'
    }
})