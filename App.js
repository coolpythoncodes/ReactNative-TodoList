import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from './Screens/WelcomeScreen';
import NoTodoScreen from './Screens/NoTodoScreen';
import AddTodoScreen from './Screens/AddTodoScreen';
import TaskCategories from './Screens/TasksCategories';


const Stack = createStackNavigator();

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: 'Learn React',
    },
    {
      id: Math.random(),
      title: 'Read my Bible',
    },
    {
      id: Math.random(),
      title: 'pray',
    },
  ])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={
          {
            headerShown:false,
          }
        }
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
        <Stack.Screen 
          name="NoTodo" 
          component={NoTodoScreen} 
        />
        <Stack.Screen 
          name="AddTodo" 
          component={AddTodoScreen} 
        />
        <Stack.Screen
          name='TaskCategories'
          component={TaskCategories}
        />
      </Stack.Navigator>
    </NavigationContainer>
       
  );
}

export default App;
