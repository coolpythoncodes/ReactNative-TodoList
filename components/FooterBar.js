import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddButton from './AddButton';
import BottomLine from './BottomLine';
import Home from './HomeButton';
import TaskButton from './TaskButton';

const FooterBar = () => {
    return (
        <View style={styles.container}>
            <Home />
            <View style={styles.addButtonStyle}>
                <AddButton />
                <BottomLine />
            </View>
            <TaskButton style={{marginTop:-30}} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    addButtonStyle:{
        marginTop:-60,
        flexDirection:'column',
        justifyContent:'space-between',
        height:137,        
    },
})

export default FooterBar;
