/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App: () => Node = () => {
  return (
    <LinearGradient
      style={Styles.container}
      colors={['#c780ff', '#471bc5']}
      start={{x: 1, y: 0}}
      end={{x: -1, y: 1}}
    />
  );
};

let Styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
  },
});

export default App;
