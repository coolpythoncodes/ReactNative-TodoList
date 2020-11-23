import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const AddButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <Icon name='circle-with-plus' size={80} color='red' />
        </TouchableOpacity>
    );
}


export default AddButton;
