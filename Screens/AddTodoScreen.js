import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CancelButton from '../components/button/CancelButton';
import Layout from '../components/Layout';
import ListTaskType from '../components/ListTaskType';
import AddTaskButton from '../components/button/AddTaskButton';


const AddTodoScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return ` ${hours}:${minutes}`;
  };
  return (
    <Layout
      addTodo
      height={140}
    >
      <View style={styles.container}>

        <View 
          style={{ 
            marginHorizontal: 40, 
            }}
          >
          <CancelButton 
            style={{
            marginTop: -40, 
            alignSelf: 'center', 
            zIndex: 999, }} 
          />

          <TextInput
            autoFocus={true}
            style={{ 
              fontSize: 20, 
              paddingTop: 30, 
            }}
          />
          <View style={styles.task}>
            <ListTaskType />
          </View>

          <View style={{ 
            marginTop: 40,
            flexDirection:'row',
            alignItems:'center', 
            justifyContent:'space-between', 
            width:175 
            }}
          >
            <Text 
              style={{
                fontSize:20
                }}
            >
              Choose a date
            </Text>
            <Icon
              name='chevron-down' 
              size={20} 
              color='black' 
              onPress={showTimepicker}
            />
          </View>

          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View>
            <Text style={{
              fontWeight:'bold', 
              marginTop:20}}
            >
              {formatDate(date)}
            </Text>
          </View>
          <AddTaskButton
            title='Add task'
          />
          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor:'#7EB6FF',
              paddingVertical: 20,
              borderRadius:10,
              marginTop:100,
            }}
        >
            <Text
              style={{
                color:'#fff',
                fontSize:18,
                textAlign:'center'
              }}
            >
               Add Task
            </Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </Layout >
  );

}

const styles = StyleSheet.create({
  container: {
    height: 3000,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25,
    backgroundColor: '#fff',
  },
  task: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderTopColor: '#E0E0E0',
    borderTopWidth: 2,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 2,
  }
})
export default AddTodoScreen;
