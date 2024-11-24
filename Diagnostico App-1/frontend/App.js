import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import CollectionScreen from './src/screens/CollectionScreen';
import ReportScreen from './src/screens/ReportScreen';
import ResultScreen from './src/screens/ResultScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Painel" component={DashboardScreen} />
        <Tab.Screen name="Coletas" component={CollectionScreen} />
        <Tab.Screen name="Relatórios" component={ReportScreen} />
        <Tab.Screen name="Resultados" component={ResultScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
