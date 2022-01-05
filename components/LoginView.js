import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';

function LoginView() {
  const styles = StyleSheet.create({
    button: {
      width: 300,
      paddingVertical: 15,
      margin: 3,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: 'white',
    },

    buttonText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
      textAlign: 'center',
    },
  });
  return (
    <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 100}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 40,
          color: 'white',
          fontWeight: '100',
        }}>
        Logga In
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{...styles.buttonText}}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{...styles.buttonText}}>Hotmail</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && (
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'black'}}
          onPress={() => {}}>
          <Text style={{...styles.buttonText, color: 'white'}}>Apple</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.53)',
            fontWeight: '200',
          }}>
          Hjälp
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginView;
