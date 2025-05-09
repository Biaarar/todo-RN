import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Logo.png")} />
      <StatusBar style="auto" />
    </View>
  );
}