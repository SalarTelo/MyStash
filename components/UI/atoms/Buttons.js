import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Buttons({children}) {
  return (
    <TouchableOpacity style={Styles.container}>
      <View style={Styles.button}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

let Styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 10,
  },
});

export default Buttons;
