import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '../components/Layout';
import TaskCategory from '../components/TaskCategory';
import PersonalIcon from 'react-native-vector-icons/FontAwesome'
import MeetingIcon from 'react-native-vector-icons/FontAwesome'
import StudyIcon from 'react-native-vector-icons/FontAwesome'
import ShoppingIcon from 'react-native-vector-icons/FontAwesome'
import WorkIcon from 'react-native-vector-icons/MaterialIcons'

const TaskCategories = () => {

    return (
        <Layout style={styles.container}>
            <ScrollView style={styles.body}>
               <View 
                    // showsVerticalScrollIndicator={false}
                    style={{marginHorizontal: 10}}>
                    <Text style={{paddingVertical:20}}>
                        Projects
                    </Text>
                    <View style={styles.categoryList}>
                        <TaskCategory 
                            category ='Personal'
                            icon = {<PersonalIcon name='user' size={50} color='#FFD506'/>}
                            iconBackrgroundColor='rgba(255, 213, 6, 0.2)'
                        />
                        <TaskCategory 
                            category ='Work'
                            icon = {<WorkIcon name='work' size={50} color='#5DE61A'/>}
                            iconBackrgroundColor='rgba(93, 230, 26, 0.2)'
                        />
                        <TaskCategory 
                            category ='Meeting'
                            icon = {<MeetingIcon name='handshake-o' size={50} color='#D10263'/>}
                            iconBackrgroundColor='rgba(209, 2, 99, 0.2)'
                        />
                        <TaskCategory 
                            category ='Study'
                            icon = {<StudyIcon name='book' size={50} color='#3044F2'/>}
                            iconBackrgroundColor='rgba(48, 68, 242, 0.2)'
                        />
                        <TaskCategory 
                            category ='Shopping'
                            icon = {<ShoppingIcon name='shopping-basket' size={50} color='#F29130'/>}
                            iconBackrgroundColor='rgba(242, 145, 48, 0.2)'
                        />
                        
                        
                    </View>
               </View>
            </ScrollView>
        </Layout>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    body:{
        flex:0.9,
    },
    categoryList:{
        flexDirection:'row',
        flexWrap:'wrap',
    }
})

export default TaskCategories;
