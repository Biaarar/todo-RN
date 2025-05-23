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
      height: 64,
      alignItems: 'center',
      borderRadius: 8,
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 8,
      textAlign: 'left',
      backgroundColor: '#333333',
    },
    text: {
      flex: 1,
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
    textAlign: 'center',
      color: '#808080',
      fontSize: 14,
      marginLeft: 12,
    },
    categoryBold:{
      textAlign: 'center',
        color: '#808080',
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '900',
      },
  });