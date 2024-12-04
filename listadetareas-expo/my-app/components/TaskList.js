import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TaskItem 
          task={item}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      )}
    />
  );
}