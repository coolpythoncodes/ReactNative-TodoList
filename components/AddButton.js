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

// const styles = StyleSheet.create({

//     addButton: {
//         backgroundColor: 'red',
//         marginTop: -30,
//     }
// })

export default AddButton;
