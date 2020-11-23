import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import NoTodoScreen from './Screens/NoTodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        <Stack.Screen name="NoTodo" component={NoTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;
