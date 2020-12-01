import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CancelButton = ({style}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={style} 
            activeOpacity={0.7} 
            onPress={() => navigation.goBack()}
        >
            <Icon 
                name='circle-with-cross' 
                size={80} 
                color='red' 
            />
        </TouchableOpacity>
    );
}

export default CancelButton;


