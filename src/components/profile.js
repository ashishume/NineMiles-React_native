import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export class Profile extends Component {
    static navigationOptions = {
        title: 'NineMiles',
    };
    render() {
        const navigate = this.props.navigation;
        return (
            <>
                
                <View>
                    <Text>Profile Page</Text>
                </View>

            </>
        );
    }
}