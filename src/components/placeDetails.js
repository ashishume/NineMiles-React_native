import React from 'react';
import {
    Modal,
    Text,
    View,
    Image,
    Button
} from 'react-native';
const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View style={{ alignItems: 'center' }}>
                <Image style={{
                    height: 100, width: 100
                }} source={props.selectedPlace.image} />
                <Text>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={{ margin: 10 }}>
                {modalContent}
                <Button title="Delete" onPress={props.onItemDeleted} />
                <Button title="Close" onPress={props.onModalClosed} />
            </View>
        </Modal>
    )

};

export default placeDetail;