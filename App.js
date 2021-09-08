import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FilmsStack from './src/Stacks/FilmsStack';

export default function App() {
  return (
    <NavigationContainer>
      <ExampleStack />
    </NavigationContainer>
  );
}

