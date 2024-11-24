import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Principal</Text>
      <Button title="Coletas" onPress={() => navigation.navigate('Coletas')} />
      <Button title="Relatórios" onPress={() => navigation.navigate('Relatórios')} />
      <Button title="Resultados" onPress={() => navigation.navigate('Resultados')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
});
