import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/Screens/Header';
import Input from './src/Screens/Input';
import Todo from './src/Screens/Todo';
import { useState } from 'react';

export default function App() {
  const [completedCount, setCompletedCount] = useState(0);

  return (
    <>
      <Header />
      <Input completedCount={completedCount} />
      <Todo onCompleteChange={setCompletedCount} />
    </>
  );
}
