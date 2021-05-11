import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface IToDo {
  text: string;
  completed: boolean;
}

const Task=()=>{
    const [value, setValue] = useState<string>("");
    const [toDoList, setToDos] = useState<IToDo[]>([]);
    const [error, showError] = useState<Boolean>(false);

    const handleSubmit = (): void => {
      if (value.trim())
        setToDos([...toDoList, { text: value, completed: false }]);
      else showError(true);
      setValue("");
    };
  
    const removeItem = (index: number): void => {
      const newToDoList = [...toDoList];
      newToDoList.splice(index, 1);
      setToDos(newToDoList);
    };
  
    const toggleComplete = (index: number): void => {
      const newToDoList = [...toDoList];
      newToDoList[index].completed = !newToDoList[index].completed;
      setToDos(newToDoList);
    };

    return(
        <View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your todo task..."
          value={value}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          style={styles.inputBox}
        />
        <Button title="Add A Task"   onPress={handleSubmit}  />
      </View>

      {error && (
        <Text style={styles.error}> Input  is empty </Text>
      )}

      <Text style={styles.subtitle}>Show Tasks</Text>

      {toDoList.length === 0 && <Text style={styles.TaskTitle}>task available</Text>}

      {toDoList.map((toDo: IToDo, index: number) => (

        <View style={styles.listItem} key={`${index}_${toDo.text}`}>
          <Text style={styles.square}></Text>
          <Text
            style={[
              styles.task,
              { textDecorationLine: toDo.completed ? "line-through" : "none" }
            ]}
          >
            {toDo.text}
          </Text>
          <Button
            title={toDo.completed ? "Completed" : "Complete"}
            onPress={() => toggleComplete(index)}
          />
          <Button
            title="X"
            onPress={() => {
              removeItem(index);
            }}
            color="crimson"
          />
        </View>
      ))}
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center"
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 19
  },
  inputBox: {
    width: '60%',
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 10
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  TaskTitle:{
    textAlign:'center',
    fontSize:15
  },
 
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "purple",
    textAlign:'center'
  },
  listItem: {
    flexDirection: "row",
    backgroundColor:'#C3F5C2',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    borderRadius:10,
    padding:10
    
  },
  square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,

  },
  addButton: {
    alignItems: "flex-end"
  },
  task: {
    width: 200,
    textAlign:'center'
  },
  error: {
    color: "red"
  }
  
});
export default Task;