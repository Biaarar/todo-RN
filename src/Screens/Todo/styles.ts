import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
      backgroundColor: '#1A1A1A',
      flex: 1,
    },
    todo: {
      borderWidth: 1,
      borderColor: '#808080',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 327,
      height: 64,
      alignItems: 'center',
      borderRadius: 8,
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 8,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 14,
      padding: 10,      
    },
    check: {
      marginLeft: 12,
      borderRadius: 100,
      borderColor: '#4EA8DE',
      borderStyle: 'solid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      
    },
    category:{
    
    },
  });