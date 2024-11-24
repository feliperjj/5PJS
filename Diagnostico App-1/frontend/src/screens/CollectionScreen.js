import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import api from '../database/api';

export default function CollectionScreen() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [collections, setCollections] = useState([]);

  const fetchCollections = () => {
    api.get('/collections').then(({ data }) => setCollections(data));
  };

  const handleAddCollection = () => {
    api.post('/collections/new', { name, details }).then(() => {
      fetchCollections();
      setName('');
      setDetails('');
    });
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coletas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Coleta"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Detalhes"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Adicionar Coleta" onPress={handleAddCollection} />
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name}: {item.details}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  listItem: { fontSize: 16, marginBottom: 8 },
});
