import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Background from './components/Background';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), // Asegúrate de tener este archivo
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <View style={{ padding: 20, maxWidth: 400, margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10 }}>
        <Text style={{ fontSize: 24, fontFamily: 'Roboto-Bold', marginBottom: 20 }}>Lista de Tareas</Text>
        <TaskInput taskText={taskText} setTaskText={setTaskText} addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      </View>
    </Background>
  );
}