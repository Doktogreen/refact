import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Router from './src/router';
import { Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
    <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <Router />
    </NavigationContainer>
    {/* <Text  > Text</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;