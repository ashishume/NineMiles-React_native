import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';


const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem} >
                <Image style={{width:50,height:50,borderWidth:1,borderRadius:50}} source={props.placeImage}/>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        // width: 200,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
})
export default ListItem;