import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export class Modal extends Component {
    static navigationOptions = {
        title: 'Modal',
        headerStyle: {
            backgroundColor: 'lightblue',
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Dialog</Text>
            </View>
            // <Button
            //     title="This is a modal"
            //     onPress={() => navigate('Dashboard', { name: 'Ashish' })}
            // />
        );
    }
}