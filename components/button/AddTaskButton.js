import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddTaskButton = ({title}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor:'#7EB6FF',
          paddingVertical: 20,
          borderRadius:10,
          marginTop:100,
        }}
    >
        <Text
          style={{
            color:'#fff',
            fontSize:18,
            textAlign:'center'
          }}
        >
           {title}
        </Text>
    </TouchableOpacity>
    );
}

export default AddTaskButton;
