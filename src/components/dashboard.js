import React, { Component, useState } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Touchable,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import Image from './../assets/image.jpg'
import PlaceInput from './placeInput';
import PlaceList from './placeList';
import PlaceDetail from './placeDetails'

export class Dashboard extends Component {

    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        places: [],
        selectedPlace: null
    }

    placeAddedHandler = placeName => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat(
                    {
                        key: Math.random(),
                        name: placeName,
                        image: Image
                    }
                )
            }
        })
    }

    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            }
        })
    }

    onModalClosedHandler = () => {
        this.setState({
            selectedPlace: null
        })
    }
    onModalDeleteHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            }
        })
    }
    render() {

        return (
            <View>
                <StatusBar backgroundColor="tomato" barStyle="light-content" />
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onModalClosed={this.onModalClosedHandler}
                    onItemDeleted={this.onModalDeleteHandler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <PlaceList
                        places={this.state.places}
                        onItemSelected={this.placeSelectedHandler}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

})