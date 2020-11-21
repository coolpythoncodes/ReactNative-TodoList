import React from 'react';
import { StyleSheet, View } from 'react-native';

const BottomLine = () => {
    return (
        <View style={styles.bottomLine}></View>
    );
}

const styles = StyleSheet.create({
    bottomLine:{
        borderBottomColor:'#E0E0E0',
        borderBottomWidth:4,
        borderRadius:2.5,
        width:100,
        alignSelf:'center',
        marginBottom:25,    
      }
})

export default BottomLine;
