import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A1A1A',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    category:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 24,
      marginBottom: 20,
    },
    status:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    value:{
      width: 24,
      height: 19,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333',
      borderRadius: 100,
      textAlign: 'center',
      marginLeft: 8,
      color: '#FFFFFF',
    },
    input:{
      flexDirection: 'row',
      backgroundColor: '#262626',
      borderRadius: 8,
      flex: 1,
      height: 54,
      fontSize: 16,
      padding: 16,
      color: '#FFFFFF',

      borderWidth:1, 
      borderColor: '#0D0D0D'
    },
    button:{
      borderRadius: 8,
      width: 52,
      height: 52,
      backgroundColor: '#1E6F9F',
      justifyContent: 'center',
      alignItems: 'center',
    },
    insert:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 24,
      marginLeft:24,
    },
    create:{
      color: '#4EA8DE',
      fontSize: 14,
      fontWeight: 'bold',
    },
    completed:{
      color: '#8284FA',
      fontSize: 14,
      fontWeight: 'bold',
    },
    list:{
        backgroundColor: '#1A1A1A',
    }
  });