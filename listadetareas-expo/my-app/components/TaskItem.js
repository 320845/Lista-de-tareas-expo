import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function TaskItem({ task, index, toggleTaskCompletion, deleteTask }) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(index)}>
        <Text style={{ marginRight: 10 }}>
          {task.completed ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>
      
      <Text style={[styles.taskText, task.completed && styles.completed]}>
        {task.text}
      </Text>

      {task.completed && (
        <Button 
          title="Eliminar" 
          onPress={() => deleteTask(index)}
          color="red"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  taskText: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});