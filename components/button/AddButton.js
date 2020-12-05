import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const AddButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.7}  >
            <Icon 
                name='circle-with-plus' 
                size={80} 
                color='red' 
                onPress={() => navigation.navigate('AddTodo')}
            />
        </TouchableOpacity>
    );
}


export default AddButton;
