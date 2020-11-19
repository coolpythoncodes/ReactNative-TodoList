import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import NoTodoScreen from './Screens/NoTodoScreen';

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
    // <View>Hello World</View>
    <View style={styles.container}>
      
      {/* <WelcomeScreen /> */}
      <NoTodoScreen todos={todos}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;
