import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskType = ({task, backgroundColor}) => {

    const returnColor = (val) => {
        const colorTestReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
          (backgroundColor !== null || backgroundColor !== undefined) &&
          colorTestReg.test(val)
        ) {
          return val;
        } else {
          return '#fff';
        }
      };

      const circleStyles = [styles.circle];
      if(backgroundColor !== undefined){
        circleStyles.push({backgroundColor:returnColor(backgroundColor)})
      }
      

    return (
        <View style={styles.container}>
            <View style={circleStyles}></View>
            <Text>
              {task}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    circle:{
        height:10,
        width:10,
        borderRadius:50,
        marginRight:5,
        marginLeft:15,
    }
})
export default TaskType;
