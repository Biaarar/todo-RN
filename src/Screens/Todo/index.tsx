import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type TodoItem = {
  id: string;
  text: string;
};

type TodoProps = {
  todos: TodoItem[];
  onDeleteTodo: (id: string) => void;
  onCompleteChange: (count: number) => void;
};

export default function Todo({
  todos,
  onDeleteTodo,
  onCompleteChange,
}: TodoProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const completedCount = Object.values(checkedItems).filter(Boolean).length;
    onCompleteChange(completedCount);
  }, [checkedItems]);

  const toggleCheckbox = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDelete = (id: string) => {
    if (onDeleteTodo) {
      onDeleteTodo(id);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isChecked = !!checkedItems[item.id];

          const todoStyle = isChecked
            ? StyleSheet.flatten([
                styles.text,
                {
                  textDecorationLine: "line-through" as "line-through",
                  color: "#808080",
                },
              ])
            : styles.text;

          const todoArroundStyle = isChecked
            ? [styles.todo, { borderColor: "#1A1A1A" }]
            : styles.todo;

          return (
            <View style={todoArroundStyle}>
              <Checkbox
                style={styles.check}
                value={isChecked}
                onValueChange={() => toggleCheckbox(item.id)}
              />
              <Text style={todoStyle}>{item.text}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Image
                  source={require("../../../assets/trash.png")}
                  style={{ width: 32, height: 32, cursor: "pointer" }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                marginBottom: 16,
                backgroundColor: "#808080",
                width: "85%",
                height: 1,
              }}
            />
            <FontAwesome5 name="clipboard-list" size={90} color="#808080" />
            <View style={{ marginBottom: 16 }} />
            <Text style={styles.categoryBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.category}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
