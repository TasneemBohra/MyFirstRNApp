/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
      <Text>Hi There ! </Text>
  );
};

AppRegistry.registerComponent('albums', () => App);
