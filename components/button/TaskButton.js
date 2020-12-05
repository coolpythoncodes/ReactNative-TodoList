import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TaskButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TaskCategories')}
        >
            <Icon name='tasks' size={25} color='#6074F9' />
            <Text style={{
                color: '#6074F9'
            }}>
                Task
        </Text>
        </TouchableOpacity>
    );
}

export default TaskButton;
