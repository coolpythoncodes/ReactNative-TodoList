import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TaskType from './TaskType';

const screenWidth = Math.round(Dimensions.get('window').width);

const ListTaskType = () => {
    return (
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                <TaskType backgroundColor='#FFD506' task='Personal' />
                <TaskType backgroundColor='#5DE61A' task='Work' />
                <TaskType backgroundColor='#D10263' task='Meeting' />
                <TaskType backgroundColor='#3044F2' task='Study' />
                <TaskType backgroundColor='#F29130' task='Shopping' />
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 1000,
        justifyContent: 'space-between'
    },
    contentContainer: {
        flexDirection: 'row',
        width: 1000,
        justifyContent: 'space-between'
    },
})
export default ListTaskType;
