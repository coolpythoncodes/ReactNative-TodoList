import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TaskButton = () => {
    return (
        <TouchableOpacity>
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
