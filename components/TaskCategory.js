import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskCategory = ({category, icon, iconBackrgroundColor}) => {
    const iconStyles = [styles.icon];
    if (iconBackrgroundColor){
        iconStyles.push({backgroundColor:`${iconBackrgroundColor}`})
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            style={{
                width:160,
                height:200,
                backgroundColor:'#fff',
                justifyContent:"center",
                alignItems:'center',
                margin:5,
                shadowColor:'#bbb',
                shadowOffset:{
                    width:0,
                    height:2,
                },
                shadowOpacity:0.25,
                shadowRadius:3.84,
                elevation:5,
            }}
        >
            <View style={iconStyles} >
                {icon}
            </View>
            <Text>{category}</Text>
            <Text style={{fontSize:10,}}>24 Task</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon:{ 
        width:100,
        height:100,
        borderRadius:100,
        justifyContent:"center",
        alignItems:'center',
        marginBottom:5,
    }
})
export default TaskCategory;
