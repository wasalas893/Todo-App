import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Task from './Components/Task';



export default function App() {
 

  return (
    <View style={styles.container}>
      
      <Text style={styles.Title}>Todo App</Text>
      <View style={styles.Items}>
      <Task />
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    
    
   
  },
  Title: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: "bold",
    
  },
  Items:{

  }
});
