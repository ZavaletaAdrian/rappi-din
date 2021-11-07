import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Divider} from "react-native-elements";
import Card from "./UI/Card";
import InputSpinner from "./UI/InputSpinner";
import {Ionicons} from "@expo/vector-icons";
import * as cartActions from "../validators/actions/cartActions";
import {useDispatch} from 'react-redux';

const CartItem = props =>{
    const dispatch = useDispatch();
    const DeleteItem = (item) =>{
        try{
            dispatch(cartActions.deleteItemFromCart(item));
        }catch(e){
            console.log(e)
        }
    }
    console.log("PROPS",props)
    return(
        <Card style={styles.product}>
            <Text style={styles.restTitle}>{props.item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("Removed from Cart Successfully!"); console.log("Deleted", props.item.id); DeleteItem(props.item);}}>
                <Ionicons name="trash-outline" size={24} color="blue"/>
            </TouchableOpacity>
            <Divider style={styles.separatorLine}/>
            <View style={{flexDirection:'row'}}>
                <View style={styles.imgContainer}>
                    <Image source={{uri: props.item.image}} style={styles.image}/>
                </View>
                <View style={styles.costContainer}>
                    <Text style={styles.cost}>${props.item.costo} MXN.</Text>
                </View>
                <View style={styles.editQty}>
                    <View style={styles.spinnerContainer}>
                        <InputSpinner
                            price ={props.item}
                        />
                    </View>
                </View>
            </View>
        </Card>

    )
}

export default CartItem;
const styles = StyleSheet.create({

    product:{
        height:Dimensions.get('window').height * 0.20,
        marginVertical:5,
        marginHorizontal:10,
        flexDirection:'column',
        marginBottom:'2.5%'
    },
    costContainer:{
        width:'33%',
        height:'100%',
        alignItems:'flex-end',
    },
    cost:{
        fontSize:16,
        position: 'absolute',
        bottom: 5,
    },
    restTitle:{
        fontSize:Dimensions.get('window').height * 0.025,
        color:'black',
        margin:'3%',
    },
    separatorLine:{
        marginHorizontal:'1%',
        backgroundColor: 'grey',
        margin: StyleSheet.hairlineWidth,
        marginBottom: 15,
    },
    imgContainer:{
        width:'33%',
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        bottom: 10,
    },
    image:{
        width:Dimensions.get('window').height * 0.10,
        height:Dimensions.get('window').height * 0.10,
        resizeMode: 'contain',
        borderRadius:10,
    },
    editQty:{
        width:'33%',
        flexDirection:'column-reverse',
        alignItems:'flex-end',
    },
    spinnerContainer:{
        marginRight: 70,
        height:'35%',
        width: '28%',
        marginBottom: 5,
    },
    button:{
        flex: 1,
        marginTop: -35,
        marginLeft: '90%',
    }
});