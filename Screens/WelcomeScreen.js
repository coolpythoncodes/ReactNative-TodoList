import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';
import welcomeScreenImage from '../assests/login.png';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            <View>
                <Image source={welcomeScreenImage} />
            </View>

            <View style={styles.welcomeText}>
                <Text style={styles.heading}>Welcome to Todos</Text>
                <Text style={styles.text}>What's going to happen today?</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop:100,
    },
    welcomeText:{
        alignItems:'center',
    },
    heading: {
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 34,
        paddingBottom: 5,
    },
    text: {
        fontSize: 16,
        letterSpacing: 0.8,
        paddingBottom: 30,
      },
})

export default WelcomeScreen;
