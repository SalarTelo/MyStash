/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RoundedButton from './components/UI/atoms/Buttons/RoundedButton';

const App: () => Node = () => {
  return (
    <LinearGradient style={Styles.container} colors={['#c780ff', '#471bc5']}>
      <SafeAreaView >
        <RoundedButton>test</RoundedButton>
      </SafeAreaView>
    </LinearGradient>
  );
};

let Styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
  },
});

export default App;
