import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import noTodoImage from '../assests/noToDo.png';
import Layout from '../components/Layout';

const NoTodoScreen = () => {
    return (

        <Layout style={styles.container}>
            <View style={styles.body}>
                <Image source={noTodoImage} />
                <Text style={styles.heading}>No tasks</Text>
                <Text>You have no task to do.</Text>
           </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
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
})
export default NoTodoScreen;
