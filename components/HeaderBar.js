import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = ({ height, addTodo }) => {
    const containerStyles = [styles.container];
    if (height) {
        containerStyles.push({height: height});
      }

    return (
        <View style={containerStyles}>
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
        height:100,
        paddingStart:15,
        color:'#fff',
        paddingTop:20,
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
