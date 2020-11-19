import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = ({ todos }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Hello Pal
            </Text>

            <Text style={styles.text}>
                Today you have no tasks
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#6074F9',
        height:80,
        justifyContent:'center',
        paddingStart:15,
        color:'#fff',
    },
    heading:{
        color:'#fff',
        fontSize: 20,
        fontWeight:'700',
        paddingBottom:5,
    },
    text:{
        color:'#fff',
        fontSize: 15,
        paddingBottom:5,
    }
})

export default HeaderBar;
