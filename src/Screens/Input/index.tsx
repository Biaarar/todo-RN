import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

type InputProps = {
  completedCount: number;
};

export default function Input({ completedCount }: InputProps) {
  const [inputText, setinputText] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  const [create, setCreate] = useState(0);
const onAdd = () => setCreate(prevAdd => prevAdd + 1);

  const add = () => {
    if (inputText.trim() !== "") {
      setTodo(prevTodo => [...todo, inputText.trim()]);
      setinputText("");
      console.log(setinputText);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.insert}>
        <View style={styles.input}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={inputText}
            onChangeText={setinputText}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={onAdd}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{create}</Text>
        </View>
      </View>

      <View style={styles.category}>
        <View style={styles.status}>
          <Text style={styles.create}>Criadas</Text>
          <Text style={styles.value}>1</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.value}>{completedCount}</Text>
        </View>
      </View>
      {todo.map((todo: string, index: number) => (
  <View key={index} style={styles.category}>
    <Text>{todo}</Text>
  </View>
))}
    </View>
  );
}
