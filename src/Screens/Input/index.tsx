import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';


type InputProps = {
  completedCount: number;
  onAddTodo: (todo: string) => void;
};

export default function Input({ completedCount, onAddTodo}: InputProps) {
  const [inputText, setinputText] = useState("");
  
  const [focused, setFocused] = useState(false);
  const [create, setCreate] = useState(0);


  const handleAddTodo = () => {
    if (inputText.trim() === "") {
      return;
    }

    if (onAddTodo) {
      onAddTodo(inputText);
      setCreate((prev) => prev + 1);
    }
    setinputText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.insert}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: -30}}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={inputText}
            onChangeText={setinputText}
            style={[styles.input, {borderColor: focused ? '#5E60CE' : '#0D0D0D'}]}
            
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <View style={{marginLeft:4}}/>
          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <Text style={styles.text}><AntDesign name="pluscircleo" size={16} color="white" />
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>

      <View style={styles.category}>
        <View style={styles.status}>
          <Text style={styles.create}>Criadas</Text>
          <Text style={styles.value}>{create}</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.completed}>Concluídas</Text>
          <Text style={styles.value}>{completedCount}</Text>
        </View>
      </View>
      
    </View>
  );
}
