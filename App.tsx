import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/Screens/Header";
import Input from "./src/Screens/Input";
import Todo from "./src/Screens/Todo";
import { use, useState } from "react";
import * as Crypto from "expo-crypto";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const generateId = () => Math.random().toString(36).substring(2, 10);

type TodoItem = {
  id: string;
  text: string;
};

const newTodo: TodoItem = {
  id: generateId(),
  text: "",
};

function App() {
  const insets = useSafeAreaInsets();

  const [completedCount, setCompletedCount] = useState(0);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  console.log(insets);

  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <Header />
      <Input
        completedCount={completedCount}
        onAddTodo={(text: string) => {
          const newTodo: TodoItem = {
            id: Crypto.randomUUID(),
            text,
          };
          setTodos((prev) => [...prev, newTodo]);
        }}
      />
      <Todo
        todos={todos}
        onCompleteChange={setCompletedCount}
        onDeleteTodo={handleDelete}
      />
      <View style={{marginBottom: insets.bottom}}/>
    </View>
  );
}

const enhanceApp = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default enhanceApp;
