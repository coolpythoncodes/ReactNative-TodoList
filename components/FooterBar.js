import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddButton from './button/AddButton';
import BottomLine from './BottomLine';
import Home from './button/HomeButton';
import TaskButton from './button/TaskButton';

const FooterBar = () => {
    return (
        <View style={styles.container}>
            <Home />
            <View style={styles.addButtonStyle}>
                <AddButton />
                <BottomLine />
            </View>
            <TaskButton />

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
        marginTop:-50,
        flexDirection:'column',
        justifyContent:'space-between',
        height:137,
        zIndex:9999,
    },
})

export default FooterBar;
