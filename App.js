import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/components/Home";

const App = () => {
  return (
    <NavigationContainer>
      <Home></Home>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
