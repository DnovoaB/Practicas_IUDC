import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CompaniesScreen from './src/screens/CompaniesScreen';
import StudentsScreen from './src/screens/StudentsScreen';
import colors from './src/styles/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }} 
        />
        <Stack.Screen 
          name="Companies" 
          component={CompaniesScreen} 
          options={{ title: 'Empresas' }} 
        />
        <Stack.Screen 
          name="Students" 
          component={StudentsScreen} 
          options={{ title: 'Estudiantes' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}