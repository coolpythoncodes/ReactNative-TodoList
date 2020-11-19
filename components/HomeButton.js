import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
        <Icon name='home' size={25} color='#6074F9'/>

        <Text style={{
            color:'#6074F9'
        }}>
            Home
        </Text>
    </TouchableOpacity>
    );
}

export default Home;
