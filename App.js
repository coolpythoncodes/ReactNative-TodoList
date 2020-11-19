import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {

  return (
    // <View>Hello World</View>
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff'/>
      <WelcomeScreen />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;
