import React from 'react';
import {NavigationContainer as Container} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          title: 'Izzet Life Counter',
          headerStyle: {
            backgroundColor: '#050608',
          },
          headerTitleStyle: {
            color: '#ffffff',
          },
        }}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </Container>
  );
}
