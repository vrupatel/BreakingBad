import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/Store';
import NavigationController from './src/Navigation/NavigationController';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationController />
    </Provider>
  );
};

export default App;
