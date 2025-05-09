import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Checkbox from 'expo-checkbox';
import { styles } from "./styles";

type TodoProps = {
  onCompleteChange: React.Dispatch<React.SetStateAction<number>>;
};

export default function Todo({ onCompleteChange }: TodoProps) {
  console.log('onCompleteChange:', onCompleteChange); // debug
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    onCompleteChange(0)
    onCompleteChange(prev => isChecked ? prev + 1 : prev - 0);

  }, [isChecked]);
  

  const todoStyle = isChecked
    ? StyleSheet.flatten([styles.text, { textDecorationLine: 'line-through' as 'line-through', color: '#808080' }])
    : styles.text;

  const todoArroundStyle = isChecked
    ? StyleSheet.flatten([styles.todo, { borderColor: '#1A1A1A' }])
    : styles.todo;

  return (
    <View style={styles.container}>
      <View>
        <View style={todoArroundStyle}>
          <FlatList data={[1]} renderItem={() => (
            <Image
              source={require('../../../assets/trash.png')}
              style={{ width: 24, height: 24, marginLeft: 12 }}
            />
          )} keyExtractor={(item) => item.toString()} />
          <Checkbox style={styles.check} value={isChecked} onValueChange={setChecked} />
          <Text style={todoStyle}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
        </View>

        

      </View>
    </View>
  );
}
