import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/HeaderBar';

import noTodoImage from '../assests/noToDo.png';
import FooterBar from '../components/FooterBar';

const NoTodoScreen = ({ todos }) => {
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#6074F9' />

                <HeaderBar todos={todos} />

                <View style={styles.body}>
                    <Image source={noTodoImage} />
                    <Text style={styles.heading}>No tasks</Text>
                    <Text>You have no task to do.</Text>
                </View> 

                <View style={styles.footer}>
                    <FooterBar /> 
                </View>    

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        justifyContent:'space-between'
    },
    body: {
        flex: 0.5,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    heading: {
        fontWeight: '800',
        fontSize: 25,
        paddingTop: 50,
        paddingBottom: 10,
    },
    footer: {
        flex:0.12,
        backgroundColor: '#f4f4f4',
    }
})
export default NoTodoScreen;
