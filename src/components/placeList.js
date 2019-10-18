import React, { Component } from 'react';
import {
    View,
    FlatList,
    ScrollView
} from 'react-native';
import ListItem from './listItem';

const placeList = props => {
    return (
        <FlatList
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}

        />)
}
export default placeList;