import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,

} from 'react-native';
class PlaceInput extends Component {


    state = {
        placeName: '',
    }
    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName)
    }
    render() {
        return (

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <TextInput
                    placeholder={"Change the text"}
                    style={{ width: 300, borderColor: "black", borderWidth: 1 }}
                    onChangeText={this.placeNameChangeHandler}
                    value={this.state.placeName}
                />
                <View style={{ marginTop: 10, width: 100 }}>
                    <Button onPress={this.placeSubmitHandler} title="Press" color="tomato" />
                </View>
            </View>
        )
    }
}
export default PlaceInput;