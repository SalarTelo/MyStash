import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

function RoundedButton({children, weight, invertColor = false, onPress}) {

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      width: '70%',
      borderRadius: 99,
      backgroundColor: invertColor ? 'black' : 'white',
    },
    text: {
      color: invertColor ? 'white' : 'black',
      fontSize: 20
    }
  });

  return (
    <Button style={styles.button} onPress={onPress} title={children}/>
  );
}


export default RoundedButton;
